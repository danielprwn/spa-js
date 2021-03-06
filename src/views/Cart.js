import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../common/RemoveFromCartButton";
import { PurchuaseCartButton } from "../common/PurchuaseCartButton";

const add = (a, b) => a + b;
const calculateTotal = (items) =>
  items
    .map((item) => item.price)
    .reduce(add, 0)
    .toFixed(2);

export function Cart() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h2>Cart 🛒</h2>
    `;

  const cartItems = cartManager.getAll();

  const table = document.createElement("table");
  table.classList.add("table");

  const tableHead = document.createElement("tr");
  tableHead.innerHTML = `
        <th>Item</th>
        <th>Price</th>
        <th></th>
    `;

  const tableRows = cartItems.map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td></td>
        `;

    tr.lastElementChild.append(RemoveFromCartButton(item));

    return tr;
  });

  const tableFooter = document.createElement("tr");
  tableFooter.innerHTML = `
        <td></td>
        <td>${calculateTotal(cartItems)}</td>
        <td></td>
    `;

  table.append(tableHead, ...tableRows, tableFooter);
  section.append(table);
  section.append(PurchuaseCartButton());

  return section;
}
