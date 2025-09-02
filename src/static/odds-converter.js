function amToDec(am) {
    if (am === 0 || Number.isNaN(am)) return NaN;
    return am > 0 ? 1 + (am / 100) : 1 + (100 / Math.abs(am));
}
function decToAm(dec) {
    if (dec <= 1 || Number.isNaN(dec)) return NaN;
    const profitFactor = dec - 1;
    return profitFactor >= 1 ? Math.round(profitFactor * 100) : Math.round(-100 / profitFactor);
}

const $ = (id) => document.getElementById(id)
const addLegEl = $("addLeg")
const bankrollEl = $("bankroll");
const kellyMultiplierEl = $("kellyMultiplier")
const decOddsEl = $("decOdds")
const amOddsEl = $("amOdds")
const betOutEl = $("betOut")
const winOutEl = $("winOut")
const calcBtn = $("calcBtn")
const resetBtn = $("resetBtn")

const STORAGE_KEY = 'parlay_state';

function getStateFromDOM() {
    const legs = Array.from(document.querySelectorAll('.leg')).map((row, idx) => {
        const n = idx + 1;
        return {
        american: parseFloat(document.getElementById('leg' + n)?.value) || '',
        fairOdds: parseFloat(document.getElementById('legFair' + n)?.value) || ''
        };
    });
    return {
        bankroll: parseFloat(bankrollEl.value) || '',
        kellyMultiplier: parseFloat(kellyMultiplierEl.value) || '',
        legs
    };
}

function setStateToDOM(state) {
    if (!state) return;

    const existing = document.getElementsByClassName('leg').length;
    for (let i = existing; i < (state.legs?.length || 0); i++) addLeg();

    if (state.bankroll !== '') bankrollEl.value = state.bankroll;
    if (state.kellyMultiplier !== '') kellyMultiplierEl.value = state.kellyMultiplier;

    (state.legs || []).forEach((leg, idx) => {
        const n = idx + 1;
        const am = document.getElementById('leg' + n);
        const fo = document.getElementById('legFair' + n);
        if (am && leg.american !== '') am.value = leg.american;
        if (fo && leg.fairOdds !== '')  fo.value = leg.fairOdds;
    });
}

function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save:', e);
    }
}

function loadState() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

function debounce(fn, ms = 150) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), ms);
    };
}

const saveStateDebounced = debounce(() => saveState(getStateFromDOM()), 200);

document.addEventListener('DOMContentLoaded', () => {
    setStateToDOM(loadState());
});
document.addEventListener('input', (e) => {
    if (e.target.matches('#bankroll, #kellyMultiplier, [id^="leg"], [id^="legFair"]')) {
        saveStateDebounced();
    }
});
addLegEl.addEventListener('click', () => {
    addLeg();
    saveStateDebounced();
});

function addLeg() {
    const allLegsEl = document.getElementsByClassName('leg');
    const n = allLegsEl.length + 1;

    const html = `
        <div class="leg grid grid-cols-2 gap-4 my-1">
            <div class="form-control">
                <label class="label"><span class="label-text text-xs">Leg ${n} Odds</span></label>
                <input id="leg${n}" type="number" inputmode="numeric" placeholder="e.g. -110 or +200" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label"><span class="label-text text-xs">Leg ${n} Fair Odds</span></label>
                <input id="legFair${n}" type="number" inputmode="numeric" placeholder="e.g. +105 or -220" class="input input-bordered" />
            </div>
        </div>`;
    document.getElementById('legsAdded').insertAdjacentHTML('beforeend', html);
}

addLegEl.addEventListener('click', addLeg)

function formatMoney(x) {
    if (!isFinite(x)) return "—"
    return "$" + x.toFixed(2);
}

function calculate() {
    const bankroll = parseFloat(bankrollEl.value)
    const kellyMultiplier = parseFloat(kellyMultiplierEl.value)

    const allLegsEl = document.getElementsByClassName('leg')
    const numberOfLegs = allLegsEl.length

    const data = []
    for (let i = 1; i <= numberOfLegs; i++) {
        const odds = parseFloat(document.getElementById('leg' + i).value)
        const fairOdds = parseFloat(document.getElementById('legFair' + i).value)
        const decimalOdds = amToDec(odds)
        const decimalFairOdds = amToDec(fairOdds)
        const probabilityFairOdds = 1 / decimalFairOdds

        if (!isFinite(decimalOdds) || !isFinite(1 / decimalFairOdds)) {
            continue;
        }
        data.push({
            decimal: decimalOdds,
            probabilityFairOdds: probabilityFairOdds
        })
    }


    let  parlayDecimal = 1
    let parlayFairProbability = 1
    for (let i = 0; i < data.length; i++) {
        parlayDecimal *= (data[i].decimal)
        parlayFairProbability *= (data[i].probabilityFairOdds)
    }

    const b = parlayDecimal - 1;
    const p = parlayFairProbability;
    const kellyFraction = (b * p - (1 - p)) / b;
    const stake = bankroll * kellyFraction * kellyMultiplier
    const parlayAmerican = decToAm(parlayDecimal)
    const win = isFinite(stake) ? stake * (parlayDecimal - 1): NaN;

    amOddsEl.textContent = isFinite(parlayAmerican) ? (parlayAmerican > 0 ? `+${parlayAmerican}` : `${parlayAmerican}`) : "—";
    betOutEl.textContent = formatMoney(stake);
    winOutEl.textContent = formatMoney(win);
}

calcBtn.addEventListener("click", calculate);

resetBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    document.querySelectorAll("#legs input")
        .forEach(el => el.value = "")
    document.querySelector('#bankroll').value = 1000
    document.querySelector('#kellyMultiplier').value = 0.25
    amOddsEl.textContent = "—";
    betOutEl.textContent = "—";
    winOutEl.textContent = "—";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.matches("input")) {
        e.preventDefault();
        calculate();
    }
});