import { cartManager } from "../cart/cart-manager";

export function AddToCartButton(item) {
  const button = document.createElement("button");
  button.classList.add("btn-lg", "btn-light");
  button.setAttribute("type", "button");
  button.innerText = "Add To Cart! 🛒";

  button.addEventListener("click", () => {
    cartManager.add(item);
  });

  return button;
}
