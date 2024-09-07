let navItems = [
  "Home",
  "Sketches",
  "Decorative Pieces",
  "Workshops",
  "About Us",
  "Contact Us",
];
let sideImages = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
];

const navUl = document.querySelector(".header-nav-items");
const footerNavItems = document.querySelector(".footer-nav-items");
const sideNav = document.querySelector(".side-nav-links");
const sideNavContent = document.querySelector(".side-nav-content");
const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header-nav");

const sidePics = document.querySelector(".side-pics");
const sidePic = document.querySelector(".pic");

for (let i = 0; i < navItems.length; i++) {
  let navItem = document.createElement("li");
  navItem.innerHTML = `<a href="#">` + navItems[i] + `</a>`;
  navItem.classList.add("header-nav-item");
  navUl.appendChild(navItem);
}

for (let i = 0; i < navItems.length; i++) {
  let navItem = document.createElement("li");
  navItem.innerHTML = `<a href="#">` + navItems[i] + `</a>`;
  navItem.classList.add("footer-nav-item");
  footerNavItems.appendChild(navItem);
}

for (let i = 0; i < navItems.length; i++) {
  let navItem = document.createElement("li");
  navItem.innerHTML = `<a href="#">` + navItems[i] + `</a>`;
  navItem.classList.add("side-nav-item");
  sideNav.appendChild(navItem);
}

for (let i = 0; i < sideImages.length; i++) {
  let pic = document.createElement("img");
  pic.src = sideImages[i];
  pic.classList.add("side-pic");
  pic.onclick = function () {
    sidePic.src = sideImages[i];
  };
  sidePics.appendChild(pic);
}

sidePic.src = sideImages[0];
sidePic.alt = "image";

navToggle.addEventListener("click", function () {
  sideNavContent.classList.toggle("side-nav-content");
  headerNav.classList.toggle("side-header-nav");
});
