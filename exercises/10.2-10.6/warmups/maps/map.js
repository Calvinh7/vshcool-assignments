function doubleNums(arr) {
    return arr.map(num => num * 2)
}

function stringItUp(arr) {
    return arr.map(num => num.toString(" "))
}
module.exports = {
    doubleNums,
    stringItUp
}
