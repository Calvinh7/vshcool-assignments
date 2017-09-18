var readline = require("readline-sync");

var name = readline.question("what is your name? ");
    console.log(name.length)

var age = readline.question("How old are you, " + name + "? ")
    console.log(name.concat(age))

var color = readline.question("What is your favorite color? ")
    console.log(color.toUpperCase())

var story = readline.question("Tell me a story. ")
 if (story.length > 20) {
     var arr = story.split(" ");
     var math = (arr / 2)
     var half = []
     half.push(math)
     console.log(half)
}
