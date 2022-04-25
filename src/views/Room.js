import { AddToCartButton } from "../common/AddToCartButton";
import { RoomDetails } from "./RoomDetails";

function SeeMoreButton(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerText = "See More";
  button.classList.add("btn-lg", "btn-success");

  const navigateEvent = new CustomEvent("navigate", {
    detail: () => RoomDetails(id),
  });

  button.addEventListener("click", () => {
    document.body.dispatchEvent(navigateEvent);
  });

  return button;
}

export function Room(room) {
  const { id, name, price, guests } = room;
  const li = document.createElement("li");

  li.style.color = "#ffffff";
  li.style.padding = "1em 2em";
  li.style.margin = "10px 10px";
  li.style.backgroundColor = "#262624";
  li.style.borderRadius = "12px";

  li.innerHTML = `
        <h4>${name}</h4>
        <p>Price ▶ $${price} USD</p>
        <p>Number of guests ▶ ${guests}</p>
    `;

  li.append(AddToCartButton(room));
  li.append(SeeMoreButton(id));

  return li;
}
