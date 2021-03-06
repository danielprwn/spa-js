import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import { Navigation } from "./navigation/Navigation";
import { Home } from "./views/Home";

const main = document.querySelector("main");

main.before(Navigation());

//Main page
main.append(Home());

document.body.addEventListener("navigate", (event) => {
  const { detail: Component } = event;
  main.innerHTML = "";

  main.append(Component());
});
