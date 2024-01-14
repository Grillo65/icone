var nb_big_ballons = [];
var NUMBER_OF_BIG_BALLOONS = 3;  // big balloons to show on screen
const NUMBER_OF_IMAGES3 = 10; // images + 1
function init() { 
    var container5 = document.getElementById("BalloonsContainer");
    for (var i = 1; i < NUMBER_OF_BIG_BALLOONS; i++) {
	container5.appendChild(createBalloons())}
}
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}
function pixelValue(value) {
    return value + "px";
}
function durationValue(value) {
    return value + "s";
}
function createBalloons() {
    var ballonsDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "balloons/big_balloons/balloon" + randomInteger(1,NUMBER_OF_IMAGES3) + ".png";
    ballonsDiv.style.top = pixelValue(randomInteger(0, 90));
    ballonsDiv.style.left = pixelValue(randomInteger(-50, 0));
    var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
    ballonsDiv.style.webkitAnimationName = "fade, float";
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndfloatDuration = durationValue(randomFloat(100, 250));
    var spinDuration = durationValue(randomFloat(20, 70));
    ballonsDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    image.style.webkitAnimationDuration = spinDuration;
    ballonsDiv.appendChild(image);
    return ballonsDiv;
}
window.addEventListener("load", init, false);
