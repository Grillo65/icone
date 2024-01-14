const NUMBER_OF_drop = 100; // drop to show on screen
const NUMBER_OF_IMAGES = 4; // images + 1
function init() {
    var container = document.getElementById("dropContainer");
    for (var i = 0; i < NUMBER_OF_drop; i++) {
	container.appendChild(createAdrop());}
}
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}
function pixelValue(value) {
    return value + "%";
}
function durationValue(value) {
    return value + "s";
}
function createAdrop() {
    var dropDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "snow/Private/images/snow" + randomInteger(1, NUMBER_OF_IMAGES) + ".png";
    dropDiv.style.top = pixelValue(randomInteger(-5, 0));
    dropDiv.style.left = pixelValue(randomInteger(0, 100));
    var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
    dropDiv.style.webkitAnimationName = "drop";
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndDropDuration = durationValue(randomFloat(5, 7));
    var spinDuration = durationValue(randomFloat(8,8));
    dropDiv.style.webkitAnimationDuration = fadeAndDropDuration + ", " + fadeAndDropDuration;
    image.style.webkitAnimationDuration = spinDuration;
    dropDiv.appendChild(image);
    return dropDiv;
}
window.addEventListener("load", init, false);
