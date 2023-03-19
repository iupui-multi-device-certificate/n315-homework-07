import { LISTS } from "./data/lists.js";

import { listView } from "./views/listView.js";

function loadList(list, title) {
  document.getElementById("app").innerHTML = listView(list, title);
}

function loadLists(lists) {
  loadList(lists);

  $("li").click(function (e) {
    e.preventDefault();

    //use find b/c we're not using index as id
    //if id were a different data type would need to convert first
    const list = lists.find((list) => list.id === e.currentTarget.id);

    //make sure to send sublist not whole object
    loadList(list.listItems, list.name);
  });
}

$(document).ready(function () {
  // loadList(LISTS);
  loadLists(LISTS);
});
