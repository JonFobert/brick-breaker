const canvas = document.querySelector('.game');
const context = canvas.getContext('2d');

//paddle is 190x45
let paddleImg = document.createElement("img")
paddleImg.src = "images/blueButton03.png"

//Image loader
var images = [
    'images/blueButton03.png'
];
var imagesLoading = images.length;

// Image loader.
var loadImage = function (i) {
    var img = new Image();
    img.onload = function () {
        images[i] = img;
        --imagesLoading;
        // Call the complete callback when all images loaded.
        if (imagesLoading === 0) {
            console.log("drawing images")
            drawPaddle();
        }
    };
    img.src = images[i];
};



context.clearRect(0, 0, 960, 540);

function drawPaddle() {
    context.drawImage(
        paddleImg,
        0, 0, 190, 45,
        0, 0, 190, 45
    )
}
console.log("running the script at least")
var i;
for (i = 0; i < imagesLoading; ++i) {
    loadImage(i);
}
