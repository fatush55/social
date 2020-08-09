export const range = (start, end) => {
    return [...Array(end).keys()].map(elem => elem + start)
}

export const setRoundingUp = (totalItems, countItems) => {
    return Math.ceil(totalItems/ countItems)
}
