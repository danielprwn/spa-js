import { AddToCartButton } from "../common/AddToCartButton";

export function Treatment(treatment) {
  const { name, area, img, description, time, price } = treatment;
  const article = document.createElement("article");

  article.style.padding = "1em 2em";
  article.style.margin = " 10px 10px";
  article.style.backgroundColor = "#262624";
  article.style.color = "#ffffff";
  article.style.borderRadius = "12px";

  article.innerHTML = `
        <h4>${name}</h4>
        <p>Area ▶ ${area}</p>
        <p>Time ▶ ${time} minutes ⏱</p>
        <p>Description ▶ ${description}</p>
        <img src=${img} />
        <footer>
            <strong>$${price.toFixed(2)}</strong>
                ${price < 100 ? "✅" : "❌"}
        </footer>
                `;
  article.append(AddToCartButton(treatment));

  return article;
}
