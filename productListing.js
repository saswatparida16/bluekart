// Example product data
// const products = [
//   { name: 'Product 1', image: 'epixpro-fenix7pro-_product-en.png', price: '$19.99' },
//   { name: 'Product 2', image: 'epixpro-fenix7pro-_product-en.png', price: '$29.99' },
//   { name: 'Product 3', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 4', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 5', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 6', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 7', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 8', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 9', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   { name: 'Product 10', image: 'epixpro-fenix7pro-_product-en.png', price: '$39.99' },
//   // Add more products as needed
// ];
let products;
fetch("http://192.168.202.254:3000/api/productDetails/getProductDetails")
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved data
    products = data;
    // Generate product listing
    const productListing = document.getElementById("product-list");
    products.forEach((product) => {
      const item = document.createElement("div");
      item.classList.add("product-item");
      const url = `productDetails.html?id=${product.id}`;
      item.innerHTML = `
        <a href="${url}" target = "_blank"><img src=${product.image1}></a>
        <h1>${product.ProductName}</h1>
        <h2>${product.ProductDescription}</h2>
        <p>${product.price}</p>
        <p>${product.ProductRatings}</p>
        <button>Add to Cart</button>
      `;

      productListing.appendChild(item);
    });
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });
