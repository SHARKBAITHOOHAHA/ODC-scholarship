const navToggle = document.querySelector(".nav-toggle");
const navBody = document.querySelector("body>nav");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
async function getData() {
  const url = "https://dummyjson.com/products/" + id;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const product = await response.json();

    const productCard = document.querySelector(".single-product");
    productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <div class="product-info">
          <h2>${product.title}</h2>
          <p><strong>Description</strong>: ${product.description}</p>
          <p><strong>Brand</strong>: ${product.brand}</p>
          <p><strong>Price</strong>: $${product.price}</p>
          <a href="./"><button class="btn">Add to Cart</button></a>
        </div>
      `;
  } catch (error) {
    console.error(error.message);
  }
}

getData();

navToggle.onclick = function () {
  navBody.classList.toggle("nav-head-side");
};
