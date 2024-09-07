const cardsList = document.querySelector(".cards-list");
const navToggle = document.querySelector(".nav-toggle");
const navBody = document.querySelector("body>nav");
async function getData() {
  const url = "https://dummyjson.com/products?limit=0";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const products = (await response.json()).products;

    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <div class="product-info">
          <h3>${product.title}</h3>
          <p>Brand: ${product.brand}</p>
          <p>Price: $${product.price}</p>
          <a href="./singleProduct.html?id=${product.id}"><button class="btn">View Product</button></a>
        </div>
      `;
      cardsList.appendChild(productCard);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getData();

navToggle.onclick = function () {
  navBody.classList.toggle("nav-head-side");
};
