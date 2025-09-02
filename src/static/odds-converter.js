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

function addLeg() {
    const allLegsEl = document.getElementsByClassName('leg');
    const n = allLegsEl.length + 1;

    const html = `
        <div class="leg grid grid-cols-2 gap-4">
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

    decOddsEl.textContent = isFinite(parlayDecimal) ? parlayDecimal.toFixed(4) : "—";
    amOddsEl.textContent = isFinite(parlayAmerican) ? (parlayAmerican > 0 ? `+${parlayAmerican}` : `${parlayAmerican}`) : "—";
    betOutEl.textContent = formatMoney(stake);
    winOutEl.textContent = formatMoney(win);
}

calcBtn.addEventListener("click", calculate);

resetBtn.addEventListener("click", () => {
    document.querySelectorAll("#legsAdded input, #bankroll, #kellyMultiplier, .input")
        .forEach(el => el.value = "");
    decOddsEl.textContent = "—";
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