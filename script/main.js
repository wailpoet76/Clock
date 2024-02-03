const hourHand = document.querySelector(".Hour-arm");
const minHand = document.querySelector(".Minute-arm");
const secHand = document.querySelector(".Second-arm");

setInterval(adjuster, 100);

function adjuster() {
    const userTimer = new Date();
    if (userTimer.getHours() > 12) {

        userTimer.setHours(userTimer.getHours() - 12)
    }
    console.log(userTimer.getMilliseconds());
    secHand.style.transform = `rotate(${(userTimer.getSeconds() + userTimer.getMilliseconds() / 1000) * 6  + 90}deg)`
    minHand.style.transform = `rotate(${((userTimer.getMinutes()) * 6 + userTimer.getSeconds() / 10) + 90}deg)`
    hourHand.style.transform = `rotate(${((userTimer.getHours() * 30) + userTimer.getMinutes() / 2) + 90}deg)`

}