// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

const movingImage = document.getElementById('movingImage');
let direction = 1; // 1 for moving right, -1 for moving left

movingImage.addEventListener('mouseover', () => {
    direction *= -1; // Reverse direction on mouseover
    bounce();
});

function bounce() {
    const currentPosition = parseInt(getComputedStyle(movingImage).left);
    const newPosition = currentPosition + (50 * direction); // Adjust the distance
    movingImage.style.transform = `translateX(${newPosition}px)`;
}