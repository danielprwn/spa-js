import { AddToCartButton } from "../common/AddToCartButton";

export function Voucher(vouchers) {
  const { name, img, description, time, price } = vouchers;
  const article = document.createElement("article");

  article.style.padding = "1em 1em";
  article.style.margin = "10px 10px";
  article.style.backgroundColor = "#262624";
  article.style.color = "#ffffff";
  article.style.borderRadius = "12px";

  article.innerHTML = `
        <h4>${name}</h4>
        <p>Time ▶ ${time} minutes ⏱</p>
        <p>Description ▶ ${description}</p>
        <img src=${img} />
        <footer>
            <strong>$${price.toFixed(2)}</strong>
                ${price < 100 ? "✅" : "❌"}
        </footer>
                `;
  article.append(AddToCartButton(vouchers));

  return article;
}
