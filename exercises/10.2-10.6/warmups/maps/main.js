// var numbers = [1, 2, 10]
// var doubles = numbers.map(function(x) {
//     return x * 2;
// });
//
// console.log(doubles)
//----------------------------------------------------
// var numbers = [2, 4, 8]
//
// var string = numbers.map(function(x) {
//     return x
// }).join(" ");
//
// console.log(string)
//------------------------------------------------------
// var popCeleb = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]
//
// var namesOnly = []
// var names = popCeleb.map(function(x) {
//     return namesOnly.push(x.name)
// })
//
// console.log(namesOnly)
//---------------------------------------------------
// var popCeleb = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]
//
// var canGo = []
// var checkAge = popCeleb.map(function(x) {
//     return  x.age > 17 ? canGo.push(x.name) : false
// });
//
// console.log(canGo.map(function(x) {
//     return x + ' can go to "The Matrix"'
// }))
//----------------------------------------------------
var popCeleb = [
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]

var readyForDom = []
var changes = popCeleb.map(function(x) {
    return '<h1>' + x + '</h1>'
}).push(readyForDom)

console.log(readyForDom)
