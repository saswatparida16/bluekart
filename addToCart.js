
  const productDetailsContainer = document.querySelector('.product-details');
  const totalAmountSpan = document.getElementById('total-amount');

  let productData = [];

  // Function to calculate and update the total amount
  function updateTotalAmount() {
    const totalAmount = productData.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    totalAmountSpan.textContent = `₹${totalAmount.toFixed(2)}`;
  }

  // Function to create a product element
  function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.name;

    const nameElement = document.createElement('span');
    nameElement.classList.add('product-name');
    nameElement.textContent = product.name;

    const priceElement = document.createElement('span');
    priceElement.classList.add('product-price');
    priceElement.textContent = `₹${product.price.toFixed(2)}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeProduct(product);
    });

    const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantity-container');

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.addEventListener('click', () => {
      decreaseQuantity(product);
    });

    const quantityElement = document.createElement('span');
    quantityElement.textContent = product.quantity;

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.addEventListener('click', () => {
      increaseQuantity(product);
    });

    quantityContainer.append(decreaseButton, quantityElement, increaseButton);

    productElement.append(imageElement, nameElement, priceElement, removeButton, quantityContainer);
    return productElement;
  }

  // Function to remove a product from the cart
  function removeProduct(product) {
    const index = productData.findIndex(p => p.id === product.id);
    if (index !== -1) {
      const productId = product.id;
      productData.splice(index, 1);
      const productElement = productDetailsContainer.querySelector(`.product:nth-child(${index + 1})`);
      productElement.remove();
      updateTotalAmount();

      // Send DELETE request to remove the product from the database
      fetch(`http://localhost:3000/api/productDetails/deleteProduct/${productId}`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => {
          console.log('Product removed successfully');
        })
        .catch(error => {
          console.log('Error removing product:', error);
        });
    }
  }

  // Function to decrease the quantity of a product
  function decreaseQuantity(product) {
    if (product.quantity > 1) {
      product.quantity--;
      const productElement = productDetailsContainer.querySelector(
        `.product:nth-child(${productData.indexOf(product) + 1})`
      );
      const quantityElement = productElement.querySelector('.quantity-container span');
      quantityElement.textContent = product.quantity;
      updateTotalAmount();
    }
  }

  // Function to increase the quantity of a product
  function increaseQuantity(product) {
    product.quantity++;
    const productElement = productDetailsContainer.querySelector(
      `.product:nth-child(${productData.indexOf(product) + 1})`
    );
    const quantityElement = productElement.querySelector('.quantity-container span');
    quantityElement.textContent = product.quantity;
    updateTotalAmount();
  }

  // Fetch product data from the API
  fetch('http://localhost:3000/api/productDetails/addtocartpage')
    .then(response => response.json())
    .then(data => {
      productData = data.map(product => ({
        id: product.id,
        name: product.ProductName,
        price: product.price,
        image: product.image,
        quantity: 1 // Set the initial quantity to 1 for each product
      }));

      // Display products on the page
      productData.forEach(product => {
        const productElement = createProductElement(product);
        productDetailsContainer.appendChild(productElement);
      });

      updateTotalAmount();
    })
    .catch(error => {
      console.log('Error fetching product data:', error);
    });

  // Checkout button click event
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', () => {
    console.log('Checkout clicked!');
    // Add your checkout logic here
  });;
