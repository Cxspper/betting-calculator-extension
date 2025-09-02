export function amToDec(am) {
    if (am > 0) {
        return (1 + am / 100)
    }else {
        return (1 + 100 / Math.abs(am))
    }
}

export function fracToDec(frac) {
    return (frac + 1)
}

export function ipToDec(ip) {
    return 100 / ip
}

export function decToAm(dec) {
    if (dec >= 2) {
        return (100 * (dec - 1))
    }else {
        return (-(100/(dec - 1)))
    }
}

export function decToFrac(dec) {
    return (dec - 1)
}

export function decToIp(dec) {
    return (1 / dec) * 100
}
