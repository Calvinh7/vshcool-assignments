// var inscription = ("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas.")
// var arr = inscription.split(" ").sort()
// var repeats = []
//
// function answers(array) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] == arr[i] || arr[i + ','] || arr[i + '.']) {
//             repeats.push(arr[i]);
//         }
//         console.log(repeats)
//     }
// }
//
// console.log(answers(arr))

var str = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."

var arr = str.split(" ")

var dupes = []
var dupes2 = []

var repeat = arr.filter(function(item, index, array) {
    if (index !== array.indexOf(item)) {
        dupes.push(item)
    }
});

console.log(dupes)

var singles = dupes.filter(function(item, index, array) {
    if (index === array.indexOf(item)) {
        dupes2.push(item)
    }
});

console.log(dupes2)
