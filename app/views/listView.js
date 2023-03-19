const renderListItem = (item) => `
    <li id="${item.id}" class="list-item">${item.name}</li>
`;
const renderListItems = (items) => `
  ${items.map((item) => renderListItem(item)).join("")}
`;

export const listView = (listItems, title = "My Lists") => `
  <section>
    <h1 class="list-title">${title}</h1>
    <ul class="list">
      ${renderListItems(listItems)}
    </ul>
  </section>
`;
