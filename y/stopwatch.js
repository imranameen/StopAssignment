var interval;
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourContent = document.getElementById("hour");
var minContent = document.getElementById("min");
var secContent = document.getElementById("sec");
var msecContent = document.getElementById("msec");
function timer() {
    msec++;
    msecContent.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secContent.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++;
        minContent.innerHTML = min;
        sec = 0;
    } else if (min >= 3600) {
        hour++;
        hourContent.innerHTML = hour;
        min = 0;
    }
}
function start() {
    interval = setInterval(timer, 10);
}
function pause() {
    clearInterval(interval);
}
function reset() {
    var hour = 0;
    var min = 0;
    var sec = 0;
    var msec = 0;
    hourContent.innerHTML = hour;
    minContent.innerHTML = min;
    secContent.innerHTML = sec;
    msecContent.innerHTML = msec;
    pause();
}
