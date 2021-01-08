export const filterMoveLevelUp = (array) => {
    return array.filter(method => method.version_group_details[0].move_learn_method.name === "level-up")
}