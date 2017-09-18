antiCaps('Hello') // hELLO
antiCaps('racEcar') // RACeCAR
antiCaps('bAnAnA') // BaNaNa


function isCaps(letter) {
    return letter === letter.toUpperCase()
}

function antiCaps(str) {
    var newString = ""
    for (var i = 0; i < str.length; i++) {
        if (isCaps(str[i])){
            newString += str[i].toLowerCase();
        } else {
        newString += str[i].toUpperCase
    }
    return newString;
}
}

console.log(antiCaps("RaceCar"));
