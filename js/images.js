document.addEventListener("DOMContentLoaded", function () {
    const images = ['./images/jukeboxes/newLumin8JukeboxDesigns/PG8-006FINAL.png', './images/jukeboxes/newLumin8JukeboxDesigns/PG8-007FINAL.png', './images/jukeboxes/newLumin8JukeboxDesigns/PG8-008FINAL.png', './images/jukeboxes/newLumin8JukeboxDesigns/PG8-023FINAL.png', './images/jukeboxes/newLumin8JukeboxDesigns/PG8-024FINAL.png', './images/jukeboxes/newLumin8JukeboxDesigns/PG8-027FINAL.png', `./images/jukeboxes/newLumin8JukeboxDesigns/PG8-084FINAL.png`, `./images/jukeboxes/newLumin8JukeboxDesigns/PG8-085FINAL.png`, `./images/jukeboxes/newLumin8JukeboxDesigns/PG8-091FINAL.png`];
    const slideshowContainer = document.getElementById('lumin8-images'); // Adjust ID as needed
    let currentIndex = 0;

    // Create and display the first image
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Slideshow image';
    imgElement.classList.add('card-img');
    slideshowContainer.appendChild(imgElement);

    // Function to update the image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    // Change the image every 3 seconds
    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = ['./images/jukeboxes/newCRE8Jukebox/PG8-012FINAL.png', './images/jukeboxes/newCRE8Jukebox/PG8-013FINAL.png', './images/jukeboxes/newCRE8Jukebox/PG8-016FINAL.png', `./images/jukeboxes/newCRE8Jukebox/PG8-017FINAL.png`, `./images/jukeboxes/newCRE8Jukebox/PG8-018FINAL.png`, `./images/jukeboxes/newCRE8Jukebox/PG8-094FINAL.png`];
    const slideshowContainer = document.getElementById('cre8-images'); // Adjust ID as needed
    let currentIndex = 0;

    // Create and display the first image
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Slideshow image';
    imgElement.classList.add('card-img');
    slideshowContainer.appendChild(imgElement);

    // Function to update the image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    // Change the image every 3 seconds
    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = ['./images/jukeboxes/mN8JukeboxKitsDesigns/PG8-011FINAL.png', './images/jukeboxes/mN8JukeboxKitsDesigns/PG8-021FINAL.png', './images/jukeboxes/mN8JukeboxKitsDesigns/PG8-022FINAL.png', `./images/jukeboxes/mN8JukeboxKitsDesigns/PG8-044FINAL.png`, `./images/jukeboxes/mN8JukeboxKitsDesigns/PG8-045FINAL.png`, `./images/jukeboxes/mN8JukeboxKitsDesigns/PG8-092FINAL.png`];
    const slideshowContainer = document.getElementById('mn8-images'); // Adjust ID as needed
    let currentIndex = 0;

    // Create and display the first image
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Slideshow image';
    imgElement.classList.add('card-img');
    slideshowContainer.appendChild(imgElement);

    // Function to update the image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    // Change the image every 3 seconds
    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [`./images/jukeboxes/legacyJukeboxes/PG8-053FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-054FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-055FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-056FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-057FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-058FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-059FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-060FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-061FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-062FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-063FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-064FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-065FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-066FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-067FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-068FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-069FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-070FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-071FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-072FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-073FINAL.png`, `./images/jukeboxes/legacyJukeboxes/PG8-074FINAL.png`];
    const slideshowContainer = document.getElementById('legacy-images'); // Adjust ID as needed
    let currentIndex = 0;

    // Create and display the first image
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Slideshow image';
    imgElement.classList.add('card-img');
    slideshowContainer.appendChild(imgElement);

    // Function to update the image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    // Change the image every 3 seconds
    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = ['./images/jukeboxes/legacyPortrait&DoubleScreenJukeboxes/nEAAFINAL.png', './images/jukeboxes/legacyPortrait&DoubleScreenJukeboxes/oEAAFINAL.png', './images/jukeboxes/legacyPortrait&DoubleScreenJukeboxes/PG8-077FINAL.png'];
    const slideshowContainer = document.getElementById('legacy-portrait-images'); // Adjust ID as needed
    let currentIndex = 0;

    // Create and display the first image
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Slideshow image';
    imgElement.classList.add('card-img');
    slideshowContainer.appendChild(imgElement);

    // Function to update the image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    // Change the image every 3 seconds
    setInterval(showNextImage, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [`./images/jukeboxes/legacyBrandedJukeboxes/FB_IMG_2E.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/IMG_2035E.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/IMG_2163e.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/IMG-20200318-WA0021e.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/IMGP0836E.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/IMGP2059E.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/IMGP2068E.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/Juke02E.jpg`, `./images/jukeboxes/legacyBrandedJukeboxes/JukeLightE.jpg`];
    const slideshowContainer = document.getElementById('legacy-branded-images'); // Adjust ID as needed
    let currentIndex = 0;

    // Create and display the first image
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = 'Slideshow image';
    imgElement.classList.add('card-img-2');
    slideshowContainer.appendChild(imgElement);

    // Function to update the image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgElement.src = images[currentIndex];
    }

    // Change the image every 2 seconds
    setInterval(showNextImage, 2000);
});