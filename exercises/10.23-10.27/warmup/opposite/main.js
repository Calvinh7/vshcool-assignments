//let str = "http://localhost:8080/monkeys?color=black&species=howler"

// function oppositeString(str) {
//
//     var obj = str.split("&").reduce(function(prev, curr, i, arr) {
//     var p = curr.split("=");
//     prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
//     return prev;
//     }, {});
// }
//
// console.log(oppositeString(str))

let objectifyUrl = function(url) {
    let query = {}
    url = url.slice(url.indexOf("?") + 1).split(/[=&]/);
    //use regex to split url into an array based on both = and &
    if(url.length < 2) return {};
    for(let i = 0; i < url.length; i+=2) {
        query[url[i]] = url[i + 1]
    }
    return query
}

console.log(objectifyUrl("http://localhost:8080/monkeys?color=black&species=howler"))
