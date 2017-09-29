var timer = document.getElementById("timer");
var time = 21;

function changeTime() {
    time--;
    timer.innerHTML = time;
    if (time === 0) {
        clearInterval(myVar)
    }
}

myVar = setInterval(changeTime, 1000)
