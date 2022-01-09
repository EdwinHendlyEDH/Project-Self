setInterval(setClock, 1000);

const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');
function setClock(){
    const currentDate = new Date();
    const currentSecond = currentDate.getSeconds() / 60;
    const currentMinute = (currentSecond + currentDate.getMinutes()) / 60;
    const currentHour = (currentMinute + currentDate.getHours()) / 12;

    setRotate(second, currentSecond);
    setRotate(minute, currentMinute);
    setRotate(hour, currentHour);


}
function setRotate(e, rotateRatio){
    e.style.setProperty('--rotate', rotateRatio * 360);
}

setClock();
// const currentDate = new Date();
// const currentSecond = new Date().getSeconds();
// const currentMinute = new Date().getMinutes();
// const currentHour = new Date().getHours();

// console.log(currentDate);
// console.log(currentSecond);
// console.log(currentMinute);
// console.log(currentHour);