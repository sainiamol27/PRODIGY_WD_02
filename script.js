let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".td");
let lapRef = document.querySelector(".lap1");
let int = null;

document.getElementById("st").addEventListener("click", () => {

    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pt").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("rt").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    lapRef.innerHTML = "00 : 00 : 00 : 000 ";
});

document.getElementById("lap").addEventListener("click", () => {

    lapRef.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + milliseconds;
});

document.getElementById("rl").addEventListener("click", () => {
    lapRef.innerHTML = "00 : 00 : 00 : 000 ";
});



function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10 ?
        "00" + milliseconds :
        milliseconds < 100 ?
        "0" + milliseconds :
        milliseconds;
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}