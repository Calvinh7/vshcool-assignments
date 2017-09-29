// You're making a restaurant, so you need a menu. Make an array of three
// object literal items for dishes on your menu. Then make a constructor
//  function and add 3 more items to your menu.
var menu = [
 food1 = {
    price: "$",
    quality: 1,
    size: "small"
},

 food2 = {
    price: "$$",
    quality: 2,
    size: "medium"
},

 food3 = {
    price: "$$$",
    quality: 3,
    size: "large"
}
]

function Menu(price, quality, size) {
    this.price = price,
    this.quality = quality,
    this.size = size
}

var food4 = new Menu("$$$$", 4, "XL")
var food5 = new Menu("$5", 5, "XXL")
var food6 = new Menu("$6", 6, "SXL")

menu.push(food4, food5, food6)

console.log(menu)

yourContainer.innerHTML = JSON.stringify(menu)

document.getElementById("menu").innerHTML = menu
