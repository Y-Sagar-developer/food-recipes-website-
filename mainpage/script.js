

const darkModeSwitch = document.getElementById("darkModeSwitch");
const body = document.body;

darkModeSwitch.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});




// ---------------------------------------- 
// Select all images in the slider container
const images = document.querySelectorAll(".slider-container img");

// Select all radio buttons used for slider navigation
const radioButtons = document.querySelectorAll(".radio-buttons input");

// Select the navigation bar for styling changes on scroll
const navbar = document.querySelector(".navbar");

// Initialize the current slide index to 0
let currentIndex = 0;




// Function to change the active slide
function changeSlide(index) {
// Iterate through all images and toggle the "active" class based on the current index
images.forEach((img, i) => {
img.classList.toggle("active", i === index); // Set the current slide as active
});

// Update the radio button's checked state based on the current index
radioButtons.forEach((radio, i) => {
radio.checked = i === index; // Match the radio button with the current slide
});

// Update the current index
currentIndex = index;
}

// Function to automatically switch to the next slide
function autoSlide() {
const nextIndex = (currentIndex + 1) % images.length; // Calculate the next slide index
changeSlide(nextIndex); // Change to the next slide
}

// Add click event listeners to each radio button for manual slide navigation
radioButtons.forEach((radio, index) => {
radio.addEventListener("click", () => changeSlide(index)); // Navigate to the selected slide
});

// Automatically change slides every 5 seconds
setInterval(autoSlide, 5000);

// Select the navigation logo by its ID
let logo = document.getElementById("navLogo");
let nicons=document.getElementById("nicons")

// Add a scroll event listener to change the navbar's background and logo
window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
navbar.classList.add("scrolled"); // Add a class for the scrolled navbar style
logo.src = "./images/logo.png"; // Change the logo to a black version
nicons.style.color="black"
} else {
navbar.classList.remove("scrolled"); // Revert to the default navbar style
logo.src = "./images/logo.png"; // Change the logo back to the default version
nicons.style.color="white"

}
});
// --------------------------------------- 

let learnMore = document.getElementById("learnMore");
learnMore.addEventListener("click", () => {
//   e.preventDefault(); // Prevent default button behavior
  window.location.href = "../api/index.html"; // Redirect to the signup page
});