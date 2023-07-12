const user = document.querySelector(".login-section-display");
const registration = document.querySelector(".registration-button");
const login = document.querySelector(".login-button");

registration.addEventListener("click", () => {
  user.classList.remove("login-section-display");
});
login.addEventListener("click", () => {
  user.classList.add("login-section-display");
});

document.getElementById("myAnchor").addEventListener("click", function (event) {
  event.preventDefault();
});
document
  .getElementById("myAnchor2")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

// for sign up

// Get form values
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// Create payload object
const payload = {
  name: username,
  email: email,
  password: password,
};

// Make a POST request
fetch("http://localhost:3000/api/users/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((response) => response.json())
  .then((data) => {
    alert("Sign Up Success"); // Handle the response from the server
    // You can redirect to another page or display a success message here
  })
  .catch((error) => {
    console.error("Error:", error); // Handle any errors
  });
