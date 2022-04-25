export function PurchuaseCartButton() {
  const button = document.createElement("button");
  button.classList.add("btn-lg", "btn-warning");
  button.setAttribute("type", "button");
  button.innerText = "PURCHUASE! 🛒";

  button.addEventListener("click", () => {
    alert("THANKS FOR YOUR PURCHASE! SEE YOU IN SPA!:)");
    document.body.dispatchEvent(navigateEvent);
  });

  return button;
}
