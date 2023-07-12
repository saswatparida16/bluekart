const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// Function to show slide 
function showSlide(index) {
  carouselSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

//  previous button 
function handlePrevButtonClick() {
  currentIndex = (currentIndex === 0) ? carouselSlides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

// next button 
function handleNextButtonClick() {
  currentIndex = (currentIndex === carouselSlides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

// Attach
prevButton.addEventListener("click", handlePrevButtonClick);
nextButton.addEventListener("click", handleNextButtonClick);

// Show the initial slide
showSlide(currentIndex);

