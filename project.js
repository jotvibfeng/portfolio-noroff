// Image slider

const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// Function to update the active slide
function updateSlider(newIndex) {
  slides[currentIndex].classList.remove("active"); // Hide current slide
  slides[newIndex].classList.add("active"); // Show new slide
  currentIndex = newIndex; // Update the index
}

// Previous button click handler
prevButton.addEventListener("click", () => {
  const newIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateSlider(newIndex);
});

// Next button click handler
nextButton.addEventListener("click", () => {
  const newIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateSlider(newIndex);
});
