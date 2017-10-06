var readline = require("readline-sync");

console.log("You wake up in a dark room...\nAfter feeling around for a bit, you discover a locked door, with a fist sized \nhole in the wall next to it.")

var choices = ["Put your hand in the hole", "try the door", "search for a key"];

index = readline.keyInSelect(choices, "What do you do?")

var doorLocked = 1

while (doorLocked === 1) {
    if (index === 0) {
        console.log("\n...You die\n");
        return;
    } else if (index === 1) {
        console.log("\nIt's locked.\n");
        return;
    } else if (index === 2) {
        console.log("\nAfter several minutes of searching, you find a rusty key in a corner...\n");
        var door = 0
    }
}

var choicePt2 = ["Put your hand in the hole", "Try the door"];

if (index === 0) {
    console.log("\n...You die\n");
} else if (index === 1) {
    console.log("\nThe door swings open, and you walk free\n");
}
