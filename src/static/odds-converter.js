
const oddsConvertBtn = document.getElementById("odds-converter-btn")
const noVigOddsBtn = document.getElementById("no-vig-odds-btn")

const oddsConverterContainer = document.getElementById("odds-converter-container")
const noVigOddsContainer = document.getElementById("no-vig-odds-container")

const oddsConverterLearnBtn = document.getElementById("odds-converter-learn-btn")
const noVigOddsInfoBtn = document.getElementById("noVigOddsInfoBtn")
const noVigOddsInfo = document.getElementById("noVigOddsInfo")

const oddsConverterInfo = document.getElementById("odds-converter-info")
const americanOdds = document.getElementById("american-odds")
const decimalOdds = document.getElementById("decimal-odds")
const fractionalOdds = document.getElementById("fractional-odds")
const probabilityOdds = document.getElementById("probability-odds")


const oddsOne = document.getElementById("oddsOne")
const oddsTwo = document.getElementById("oddsTwo")
const noVigPctOne = document.getElementById("noVigPctOne")
const noVigPctTwo = document.getElementById("noVigPctTwo")
const noVigOddsOne = document.getElementById("noVigOddsOne")
const noVigOddsTwo = document.getElementById("noVigOddsTwo")

function calculateNoVigFairOdds() {
    const oddsOneValue = parseFloat(oddsOne.value)
    const oddsTwoValue = parseFloat(oddsTwo.value)
    
    const oddsOneToImplied = decToIp(amToDec(oddsOneValue))
    const oddsTwoToImplied = decToIp(amToDec(oddsTwoValue))

    const vigPercentageOne = (oddsOneToImplied / (oddsOneToImplied + oddsTwoToImplied))
    const vigPercentageTwo = (oddsTwoToImplied / (oddsOneToImplied + oddsTwoToImplied))
    let noVigImpliedOne = 0
    let noVigImpliedTwo = 0
    if (vigPercentageOne <= 0.5) {
        noVigImpliedOne = (100 / vigPercentageOne) - 100
    }else if(vigPercentageOne > 0.5) {
        noVigImpliedOne = -100 / ( - 1)
    }

    if (vigPercentageTwo <= 0.5) {
        noVigImpliedTwo = (100 / vigPercentageTwo) - 100
    }else if(vigPercentageTwo > 0.5) {
        noVigImpliedTwo = -100 * (vigPercentageTwo / (1 - vigPercentageTwo))
    }

    noVigPctOne.innerText = (vigPercentageOne * 100).toFixed(2)
    noVigPctTwo.innerText = (vigPercentageTwo * 100).toFixed(2)
    noVigOddsOne.innerText = noVigImpliedOne.toFixed(2)
    noVigOddsTwo.innerText = noVigImpliedTwo.toFixed(2)
}

document.addEventListener("DOMContentLoaded", function() {
    oddsConvertBtn.classList.toggle("btn-outline")
    noVigOddsBtn.classList.add("btn-outline")

    oddsConverterContainer.classList.toggle("hidden")
    noVigOddsContainer.classList.add("hidden")
})

oddsOne.addEventListener("input", function() {
    console.log("odds 1 has changed")
    calculateNoVigFairOdds()
})

oddsTwo.addEventListener("input", function() {
    calculateNoVigFairOdds()
})

oddsConvertBtn.addEventListener("click", function() {
    oddsConvertBtn.classList.toggle("btn-outline")
    noVigOddsBtn.classList.add("btn-outline")

    oddsConverterContainer.classList.toggle("hidden")
    noVigOddsContainer.classList.add("hidden")
})

noVigOddsBtn.addEventListener("click", function() {
    noVigOddsBtn.classList.toggle("btn-outline")
    oddsConvertBtn.classList.add("btn-outline")

    noVigOddsContainer.classList.toggle("hidden")
    oddsConverterContainer.classList.add("hidden")

    calculateNoVigFairOdds()

})

oddsConverterLearnBtn.addEventListener("click", function() {
    oddsConverterInfo.classList.toggle("hidden")
    oddsConverterLearnBtn.classList.toggle("btn-outline")
})

noVigOddsInfoBtn.addEventListener("click", function() {
    noVigOddsInfo.classList.toggle("hidden")
    noVigOddsInfoBtn.classList.toggle("btn-outline")
})


americanOdds.addEventListener("input", function() {
    const am = parseFloat(americanOdds.value)

    decimalOdds.value = amToDec(am).toFixed(2)
    fractionalOdds.value = decToFrac(amToDec(am)).toFixed(2)
    probabilityOdds.value = (decToIp(amToDec(am)) * 100 ).toFixed(2)
});

decimalOdds.addEventListener("input", function() {
    const dec = parseFloat(decimalOdds.value)

    americanOdds.value = decToAm(dec).toFixed(2)
    fractionalOdds.value = decToFrac(dec).toFixed(2)
    probabilityOdds.value = (decToIp(dec) * 100).toFixed(2)
})

fractionalOdds.addEventListener("input", function() {
    const frac = parseFloat(fractionalOdds.value)

    decimalOdds.value = fracToDec(frac).toFixed(2)
    americanOdds.value = decToAm(fracToDec(frac)).toFixed(2)
    probabilityOdds.value = (decToIp(fracToDec(frac)) * 100 ).toFixed(2)    
})

probabilityOdds.addEventListener("input", function() {
    const ip = parseFloat(probabilityOdds.value)

    decimalOdds.value = ipToDec(ip).toFixed(2)
    americanOdds.value = decToAm(ipToDec(ip)).toFixed(2)
    fractionalOdds.value = decToFrac(ipToDec(ip)).toFixed(2)    
})



function amToDec(am) {
    if (am > 0) {
        return (1 + am / 100)
    }else {
        return (1 + 100 / Math.abs(am))
    }
}

function fracToDec(frac) {
    return (frac + 1)
}

function ipToDec(ip) {
    return 100 / ip
}

function decToAm(dec) {
    if (dec >= 2) {
        return (100 * (dec - 1))
    }else {
        return (-(100/(dec - 1)))
    }
}

function decToFrac(dec) {
    return (dec - 1)
}

function decToIp(dec) {
    return 1 / dec
}