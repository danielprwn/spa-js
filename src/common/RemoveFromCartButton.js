import { cartManager } from "../cart/cart-manager";
import { Cart } from "../views/Cart";

export function RemoveFromCartButton(item) {
  const button = document.createElement("button");
  button.classList.add("btn-lg", "btn-danger");
  button.setAttribute("type", "button");
  button.innerText = "❌";

  button.addEventListener("click", () => {
    cartManager.remove(item);

    const navigateEvent = new CustomEvent("navigate", {
      detail: Cart,
    });

    document.body.dispatchEvent(navigateEvent);
  });

  return button;
}
