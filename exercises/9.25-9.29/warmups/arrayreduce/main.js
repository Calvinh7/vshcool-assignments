// var numbers = [1,2,3]
//
// var single = numbers.reduce(function(currentTotal,curr){
//     return currentTotal + curr;
// });
//
// console.log(single);

// var string = numbers.reduce(function(currentTotal,curr){
//     return currentTotal.concat(curr)
// }, "")
//
// console.log(string)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
//
// var numVoted = voters.reduce(function(runningTotal,currVoter){
//     return runningTotal + (currVoter.voted === true);
// }, 0);
//
// console.log(numVoted)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
//
// var total = wishlist.reduce(function(t,amount){
//     return t + (amount.price)
// }, 0);
//
// console.log(total);

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];
//
// var flattened = arrays.reduce(function(currArray,nextArr){
//     return currArray.concat(nextArr);
// });
//
// console.log(flattened)

var ages = voters.reduce(function(results,currVoter){
    
})