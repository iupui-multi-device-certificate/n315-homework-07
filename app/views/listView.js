const renderListItem = (item) => `
    <li id="${item.id}" class="list-item">${item.name}</li>
`;
const renderListItems = (items) => `
  ${items.map((item) => renderListItem(item)).join("")}
`;

export const listView = (listItems, title = "My Lists", hasClose = false) => `
  <section>
    <header>  
      <h1 class="list-title">${title}</h1>
      ${
        hasClose
          ? `<button class="close-detail"><span class="sr-only">Close</span></button>`
          : ""
      }
      
    </header>
    <ul class="list">
      ${renderListItems(listItems)}
    </ul>
  </section>
`;
