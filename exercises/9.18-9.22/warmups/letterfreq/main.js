// function frequency(string) {
//     var freq = []
//     for (var i = 0; i < string.length; i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//             freq[character]++;
//         } else {
//             freq[character] = 1;
//         }
//     }
//     return freq;
// }
//
// console.log(frequency("racecar"))

var phrase = "slimy smelly solution";
var phraseArray = phrase.split("");
var letterCount = {};

phraseArray.forEach(function(letter) {
    if (letterCount[letter]) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
    }
});
console.log(letterCount)
console.log (Object.keys(letterCount).join(""))
