console.log("hello World")
function clock() {
    let now = new Date();

    console.log(now);

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    // hold values of variable

    let displaysec = 0;
    let displaymin = 0;
    let displayhr = 0;

    period = 'AM'

    console.log(seconds);
    console.log(minutes);
    console.log(hours);




    if (hours == 0) {
        hours = 12;

    }
    if (hours > 12) {
        period = "PM"
        hours = hours - 12;
    }

    if (hours < 10) {
        displayhr = "0" + hours;
    } else {
        displayhr = hours;
    }
    if (minutes < 10) {
        displaymin = "0" + minutes;
    } else {
        displaymin = minutes;
    }
    if (seconds < 10) {
        displaysec = "0" + seconds;
    } else {
        displaysec = seconds;
    }

    document.getElementById("realTime").innerHTML = displayhr + ":" + displaymin + ":" + displaysec + " " + period;

    window.setInterval(clock, 1000);
    // setTimeout(clock, 1000)

}



clock()