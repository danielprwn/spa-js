import { Room } from "./Room";

export function Rooms() {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Available Rooms</h2>
    <p id="loading">Loading rooms... Please wait :)</p>
  `;

  //Database query
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const ul = document.createElement("ul");

      const lis = rooms.map((room) => Room(room));

      ul.append(...lis);

      section.querySelector("#loading").remove();
      section.append(ul);
    });

  return section;
}
