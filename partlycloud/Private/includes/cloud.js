const NUMBER_OF_CLOUDS = 6; // clouds to show on screen
const NUMBER_OF_IMAGES2 = 17; // images + 1
function init2() { 
    var container2 = document.getElementById("CloudContainer");
    for (var i = 0; i < NUMBER_OF_CLOUDS; i++) {
	container2.appendChild(createACloud())}
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
function createACloud() {
    var cloudDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "partlycloud/Private/images/cloud" + randomInteger(1, NUMBER_OF_IMAGES2) + ".png";
    cloudDiv.style.top = pixelValue(randomInteger(-2, 8));
    // cloudDiv.style.left = pixelValue(randomInteger(-220, -100));
    var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
    cloudDiv.style.webkitAnimationName = "fade, float";
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndfloatDuration = durationValue(randomFloat(100, 250));
    var spinDuration = durationValue(randomFloat(40, 80));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    image.style.webkitAnimationDuration = spinDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}
window.addEventListener("load", init2, false);
