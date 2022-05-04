import { Rooms } from "../views/Rooms";
import { Treatments } from "../views/Treatments";
import { NavigationButton } from "./NavigationButton";
import "./navigation.scss";
import { Cart } from "../views/Cart";
import { Home } from "../views/Home";
import { Vouchers } from "../views/Vouchers";

// Elementy Menu
const navigationItems = [
  { component: Home, name: "HOME🏠" },
  { component: Rooms, name: "ROOMS🏨", path: "/rooms" },
  { component: Treatments, name: "TREATMENTS🛁" },
  { component: Vouchers, name: "VOUCHERS❗" },
  { component: Cart, name: "CART 🛒" },
];

export function Navigation() {
  const nav = document.createElement("nav");

  nav.classList.add("nav");

  const navigationButtons = navigationItems.map((item) => {
    const { component, name } = item;
    return NavigationButton(component, name);
  });

  navigationButtons[0].classList.add("active-btn");

  nav.append(...navigationButtons);

  return nav;
}
