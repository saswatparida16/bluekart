// Fetch product recommendations from an API or define them as an array
const products = [
    { name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
    { name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
    { name: 'Product 3', description: 'Description of Product 3', image: 'product3.jpg' }
];

let recommendations;
fetch(`http://localhost:3000/api/productDetails/getProductDetails`)
  .then((response) => response.json())
  .then((data)=>{
    recommendations = data;
    const productContainer = document.querySelector('.product-container');
    
    recommendations.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.src = "https://e7.pngegg.com/pngimages/784/355/png-clipart-apple-watch-series-3-iphone-6-apple-watch-series-2-iphone-x-apple-watch-3-thumbnail.png";
    productImage.alt = "not";

    const productName = document.createElement('h3');
    productName.textContent = product.ProductName;
    const productPrice = document.createElement('h3');
    productPrice.textContent = product.price;

    const productDescription = document.createElement('p');
    productDescription.textContent = "*****";

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDescription);

    productContainer.appendChild(productCard);
});

  })
// Create the product cards dynamically

