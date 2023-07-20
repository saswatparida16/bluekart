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

// for product

// Simulated list of products (You can replace this with actual data fetched from a server or API)
const products = [
  {
    name: "Watch Model 1",
    image: "https://media-assets.hyperinvento.com/companies/917dd2ad-9461-4902-9d36-3760dd11ad56/others/others/files/7f5810a638a44cb3b4fefa330f000ed0-other-other.jpg",
    price: 199.99,
  },
  {
    name: "Watch Model 2",
    image: "https://media-assets.hyperinvento.com/companies/917dd2ad-9461-4902-9d36-3760dd11ad56/others/others/files/7f5810a638a44cb3b4fefa330f000ed0-other-other.jpg",
    price: 249.99,
  },
  {
    name: "Watch Model 3",
    image: "https://media-assets.hyperinvento.com/companies/917dd2ad-9461-4902-9d36-3760dd11ad56/others/others/files/7f5810a638a44cb3b4fefa330f000ed0-other-other.jpg",
    price: 179.99,
  },
  // Add more product items here
];

// Function to dynamically generate product items and display them on the page
function displayProducts() {
  const watchList = document.getElementById("watchList");
  let productHTML = "";

  products.forEach((product) => {
    productHTML += `
      <div class="watch-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="watch-price">$${product.price.toFixed(2)}</p>
      </div>
    `;
  });

  watchList.innerHTML = productHTML;
}

// Call the function to display products when the page loads
document.addEventListener("DOMContentLoaded", displayProducts);


// Show the initial slide
showSlide(currentIndex);

