function noDups(string){
    var uniques = []
    var dups = []
    for (var i = 0 ; i < string.length; i++){
        if(uniques.indexOf(string[i]) === -1){
            uniques.push(string[i]);
        } else {
            dups.push(string[1])
        }
    }
    return {
        uniques: uniques.join(""),
        dups: dups.join("")
    };
}

var result = noDups("sdfgsdgadgadfgsdfgadgt");
console.log(result.dups);
console.log(result.uniques);
