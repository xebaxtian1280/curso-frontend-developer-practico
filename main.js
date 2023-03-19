//Variables

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const iconShoppingMenu = document.querySelector(".navbar-shopping-cart");
const shoppingMenu = document.getElementById("productCardContainer");
const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailContainerCloseButton = document.querySelector(
  ".product-detail-close"
);

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
iconShoppingMenu.addEventListener("click", toggleShoppingCarMenu);
productDetailContainerCloseButton.addEventListener("click", closeProductDetail);

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 500,
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 5000,
  Image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/**<div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div> */

renderProducts(productList);

//** Funciones */

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");

  if (!shoppingMenu.classList.contains("inactive")) {
    shoppingMenu.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  if (!shoppingMenu.classList.contains("inactive")) {
    shoppingMenu.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
}

function toggleShoppingCarMenu() {
  shoppingMenu.classList.toggle("inactive");

  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
}

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.Image);
    img.addEventListener("click", openProductuDetail);
    productCard.appendChild(img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfodiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerHTML = "$" + product.price;
    productInfodiv.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerHTML = document.name;
    productInfodiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");

    const productFigureImg = document.createElement("img");
    productFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productFigureImg);

    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

function openProductuDetail() {
  productDetailContainer.classList.remove("inactive");
  if (!shoppingMenu.classList.contains("inactive")) {
    shoppingMenu.classList.add("inactive");
  }

  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
}

function closeProductDetail() {
  productDetailContainer.classList.add("inactive");
}
