// Image slider

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slider");
  const slideImages = document.querySelectorAll(".portfolio-images");
  const prevslideButton = document.querySelector(".prev");
  const nextslideButton = document.querySelector(".next");

  let slideIndex = 0;

  function showSlide(index) {
    if (index >= slideImages.length) {
      slideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
      slideIndex = slideImages.length - 1; // Go to the last slide
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  prevslideButton.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
  });

  nextslideButton.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
  });

  // Optional: Auto slide every 5 seconds
  setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 5000);
});
