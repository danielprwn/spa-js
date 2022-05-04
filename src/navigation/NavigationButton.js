export function NavigationButton(Component, text) {
  const button = document.createElement("button");

  button.classList.add("btn");
  button.setAttribute("type", "button");
  button.innerText = text;

  button.addEventListener("click", () => {
    const navigateEvent = new CustomEvent("navigate", {
      detail: Component,
    });

    document.body.dispatchEvent(navigateEvent);

    // Usunięcie klasy active btn
    Array.from(button.parentElement.children).forEach((element) => {
      element.classList.remove("active-btn");
    });

    // Nadanie klasy active btn na wciśnięty button
    button.classList.add("active-btn");
  });

  return button;
}
