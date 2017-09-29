var cars = ["truck", "van", "sedan"];

var trucks = [
    {make: "Ford", model: "E150", price: 10000},
    {make: "Chevy", model: "Camaro", price: 20010},
    {make: "Toyota", model: "Tacoma", price: 30900},
    {make: "Ford", model: "Explorer", price: 9000},
    {make: "Ford", model: "F250", price: 2400},
]

// for (var i = 0; i < cars.length; i++) {
//   console.log(`${cars[i]} goes vroom`);
// }


// cars.forEach(function(car) {
//     console.log(car);
// });

// var angryCars = cars.map(function(car) {
//     return car.toUpperCase()
// });
// console.log(angryCars)

// var newTrucks = []
//
// var cost = trucks.filter(function(truck) {
//     return truck.price < 15000
// });
// console.log(cost)

// var searchCar = trucks.find(function(truck) {
//     return truck.model === "E150";
// });
// console.log(searchCar)

// var allTruckModels = trucks.some(function(truck) {
//     return truck.model === "E150"
// });
// console.log(allTruckModels)

// var notAllTruck = trucks.every(function(truck) {
//     return truck.model != "E150"
// });
// console.log(notAllTruck)



var truckType = trucks.reduce(function(previous, truck) {
    if (truck.make === "Chevy") previous.numberOfChevys++;
    if (truck.make === "Ford") previous.numberOfFords++;
    return previous;
}, { numberOfChevys: 0, numberOfFords: 0});
console.log(truckType)
