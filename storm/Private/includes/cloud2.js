const NUMBER_OF_CLOUDS3 = 6; // clouds to show on screen
const NUMBER_OF_IMAGES3 = 19; // images + 1
function init3() { 
    var container3 = document.getElementById("thunder3");
    for (var i = 0; i < NUMBER_OF_CLOUDS3; i++) {
	container3.appendChild(createACloud3())}
}
function randomInteger3(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}
function randomFloat3(low, high) {
    return low + Math.random() * (high - low);
}
function pixelValue3(value) {
    return value + "%";
}
function durationValue3(value) {
    return value + "s";
}

function createACloud3() {
    var cloudDiv = document.createElement("div");
    var image = document.createElement("img");
    image.src = "storm/Private/images/cloud" + randomInteger3(1, NUMBER_OF_IMAGES3) + ".png";
    cloudDiv.style.top = pixelValue3(randomInteger3(-8, 6));
    // cloudDiv.style.left = pixelValue3(randomInteger3(-120, -100));
    var spinAnimationName = (Math.random() < 0.5) ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
    cloudDiv.style.webkitAnimationName = "thunder_animation2, fade, float ";
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndfloatDuration = durationValue3(randomFloat3(100, 250));
    var spinDuration = durationValue3(randomFloat3(40, 80));
    cloudDiv.style.webkitAnimationDuration = fadeAndfloatDuration + ", " + fadeAndfloatDuration;
    image.style.webkitAnimationDuration = spinDuration;
    cloudDiv.appendChild(image);
    return cloudDiv;
}

window.addEventListener("load", init3, false);
