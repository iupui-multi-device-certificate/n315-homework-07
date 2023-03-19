import { LISTS } from "./data/lists.js";

import { listView } from "./views/listView.js";

function loadLists() {
  document.getElementById("app").innerHTML = listView(LISTS);
}

$(document).ready(function () {
  loadLists();
});
