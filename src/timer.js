const countdown = () => {
    const countToDate = document.querySelector('#countToDate').innerHTML;
    const countDate = parseDate(countToDate).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;

    if(gap < 1000) {
        stopMyTimer();
        document.querySelector('#timer-bar').style.display = 'none';
    }

};

 parseDate = (input) => {
    let parts = input.match(/(\d+)/g);
    return new Date(parts[2], parts[1]-1, parts[0]);
};
 stopMyTimer = () => {
    clearInterval(myTimer);
};
const myTimer = setInterval(countdown, 1000);


