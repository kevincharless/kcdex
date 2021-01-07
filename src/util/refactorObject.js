export const refactorObject = (object) => {
    const result = {};
    Object.keys(object).forEach(key => {
        if(object[key]) result[key] = object[key]
    })
    return result
}