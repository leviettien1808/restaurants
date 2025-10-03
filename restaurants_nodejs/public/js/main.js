const backdrop = document.querySelector(".backdrop");
const sideDrawer = document.querySelector(".mobile-nav");
const menuToggle = document.querySelector("#side-menu-toggle");

function backdropClickHandler() {
  backdrop.style.display = "none";
  sideDrawer.classList.remove("open");
}

function menuToggleClickHandler() {
  backdrop.style.display = "block";
  sideDrawer.classList.add("open");
}

backdrop.addEventListener("click", backdropClickHandler);
menuToggle.addEventListener("click", menuToggleClickHandler);

// ---------- Increase/Descrease the number of products ----------
const $$ = document.querySelectorAll.bind(document);
const decreaseQuantityProducts = $$(".decrease-quantity-product");
const quantityProducts = $$(".quantity-product");
const increaseQuantityProducts = $$(".increase-quantity-product");

quantityProducts.forEach((quantityProduct, index) => {
  increaseQuantityProducts[index].addEventListener("click", () => {
    quantityProduct.value = parseInt(quantityProduct.value) + 1;
  });

  decreaseQuantityProducts[index].addEventListener("click", () => {
    if (parseInt(quantityProduct.value) > 0) {
      quantityProduct.value = parseInt(quantityProduct.value) - 1;
    }
  });
});
