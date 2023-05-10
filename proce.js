const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let sec = datetoday.getSeconds();

    if (hr < 10){
        hr = '' + hr;
    }

    if (min < 10) {
        min = '' + min;
    }

    if (sec < 10) {
        min = '' + min;
    }

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}, 1000);



