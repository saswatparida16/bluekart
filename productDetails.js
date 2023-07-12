// let productDetails = [
//   [{title:"Wave Call Bluetooth Calling Smartwatch"},
// {rating:5},
// {price: 15000},
// {
//   description:`The Wave Call Bluetooth Calling Smartwatch is a stylish and functional smartwatchthat allows you to make and receive calls directly from your wrist. It features a sleek design with a vibrant
//   color display and offers a range of fitness tracking and smart features.`
// }]]// Get the URL parameters
const queryParams = new URLSearchParams(window.location.search);

// Retrieve the value of the 'id' parameter
console.log(queryParams);
const productId = queryParams.get('id');

fetch(`http://192.168.202.254:3000/api/productDetails/getProductDetails/${productId}`)
  .then((response) => response.json())
  .then((data)=>{
    let productDetails = data;
    const productListing = document.getElementById("c");
    productDetails.forEach((product)=>{
      const item = document.createElement("div");
          item.classList.add("product-images");
          item.innerHTML = `
          <img src="${product.image1}" alt="Product Image 1" class="product-image active">
          <img src="${product.image2}" alt="Product Image 2" class="product-image">
          <img src="${product.image3}" alt="Product Image 3" class="product-image">
          <img src="${product.image4}" alt="Product Image 4" class="product-image">
          <img src="${product.image5}" alt="Product Image 5" class="product-image">
          `;
          const detail = document.createElement("div");
          detail.classList.add("product-info");
          detail.innerHTML = `<div class="zoom-modal">
          <div class="zoom-content">
            <img src="${product.image1}" alt="" class="zoom-image">
          </div>
        </div class="right">
        <div>
        <h1 class="product-title">${product.ProductName}</h1>
        <p class="product-price">${product.price}</p>
        <div class="product-rating">
          <!-- <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="rating">${product.ProductRatings}</span> -->
        </div>
        <p class="product-description">${product.ProductDescription}</p>
        <button class="add-to-cart">Add to Cart</button>
        </div>`
          productListing.appendChild(item);
          productListing.appendChild(detail);
          const images = document.querySelectorAll('.product-image');
              const zoomModal = document.querySelector('.zoom-modal');
              const zoomImage = document.querySelector('.zoom-image');
              // const closeButton = document.querySelector('.close-button')
          
              images.forEach((image) => {
                image.addEventListener('click', () => {
                  zoomImage.src = image.src;
                  // zoomModal.classList.add('open');
                  images.forEach((img) => {
                  img.classList.remove('active');
                });
                image.classList.add('active');
                });
              });
    });
  })
