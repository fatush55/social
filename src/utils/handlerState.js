export const upDateArrayItemObject = (elements, index, item = {} ) => {
    return elements.map(elem => {
        if (elem.id === index) {
            return {
                ...elem,
               ...item,
            }
        }
        return elem
    })
}