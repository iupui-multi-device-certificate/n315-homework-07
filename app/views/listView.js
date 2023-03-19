const renderListItem = (item) => `
    <li id="${item.id}">${item.name}</li>
`;
const renderListItems = (items) => `
  ${items.map((item) => renderListItem(item)).join("")}
`;

export const listView = (listItems) => `
  <ul>
    ${renderListItems(listItems)}
  </ul>
`;
