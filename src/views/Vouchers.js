import { Voucher } from "./Voucher";

export function Vouchers() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Vouchers</h2>
        <p id="loading">Loading...</p>
    `;

  fetch("http://localhost:3000/vouchers")
    .then((response) => response.json())
    .then((vouchers) => {
      const article = vouchers.map((vouchers) => Voucher(vouchers));

      section.querySelector("#loading").remove();
      section.append(...article);
    });

  return section;
}
