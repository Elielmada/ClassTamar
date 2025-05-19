const images = ["tamarImages/1.jpg", "tamarImages/2.jpg", "tamarImages/3.jpg", "tamarImages/4.jpg"];
let index = 0;

function switchImage() {
    index = (index + 1) % images.length;
    document.getElementById("switchImage").src = images[index];
}

// Add click event listener to the image
document.addEventListener('DOMContentLoaded', function() {
    const imageElement = document.getElementById("switchImage");
    
    // Make the image clickable
    if (imageElement) {
        imageElement.addEventListener('click', switchImage);
        imageElement.style.cursor = 'pointer'; // Change cursor to indicate clickable
    }
    
    // Keep the automatic switching as well
    setInterval(switchImage, 2000);
});
