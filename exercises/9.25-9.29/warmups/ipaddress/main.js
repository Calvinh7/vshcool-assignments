function check(num){
    return num >= 0 && num < 256 ? valid : notValid
}

module.exports = function isIp(str){
    str.split(".").forEach(function(str){
        check(num)
    }).join(".")
}
