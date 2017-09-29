//write functino that returns boolean based on the equality of the last digits of the numbers

function lastNums(a,b) {
    return a % 10 === b % 10
}

console.log(lastNums(22,22))
