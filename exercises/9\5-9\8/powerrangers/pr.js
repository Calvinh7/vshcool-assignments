var powerRangers = ["Kimberly", "Jason", "Kimberly", "Billy", "Kimberly",  "Trini", "Zack"];

var kimberlyArray = []

for (var i = 0; i < powerRangers.length; i++) {
	if (powerRangers[i] === "Kimberly") {
		kimberlyArray.push(i);
	}
}

console.log(kimberlyArray)
