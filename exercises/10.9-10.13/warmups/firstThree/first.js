
function firstThree(str, n) {
    let newStr = str.slice(0,3);
    return newStr.repeat(n);
}

module.exports = firstThree
