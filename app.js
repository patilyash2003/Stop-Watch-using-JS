var ms = 0, s = 0, m = 0, h = 0;
var timer = null;

var display = document.querySelector(".timer-display");
var laps = document.querySelector(".laps");

function start() {
    if (!timer) {  
        timer = setInterval(run, 10);
    }
}

function run() {
    ms++;
    if (ms == 100) { 
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }

    display.innerHTML = getTimer();
}

function getTimer() {
    return (
        (h < 10 ? "0" + h : h) + " : " +
        (m < 10 ? "0" + m : m) + " : " +
        (s < 10 ? "0" + s : s) + " : " +
        (ms < 10 ? "0" + ms : ms)
    );
}

function stopTimer() {
    clearInterval(timer);
    timer = null; 
}

function pause() {
    stopTimer();
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
}

function restart() {
    reset();  
    start();  
}


function lap() {
    if (timer) {
        var Li = document.createElement("li");
        Li.innerHTML = getTimer();
        laps.appendChild(Li);
    }
}


function resetLap() {
    laps.innerHTML = "";
}
