function saturdayFun(activity = 'roller-skate') {
    return `On Saturday, let's ${activity}!`;
}
function mondayWork(task = 'go to the office') {
    return `On Monday, let's ${task}!`;
}
function wrapAdjective(flair = "*") {
    return function(adjective = "a dedicated programmer") {
        return `You are ${flair}${adjective}!`;
    }
}
