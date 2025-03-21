import Helpers from "../../../lib/Helpers";

export default class Category {
  /*
   * render a category on the sidebar
   */
  static render(cat) {
    const ul = document.querySelector("ul.categories"),
      li = document.createElement("li");
    let link = Helpers.makeHashFromLink(cat, "category"),
      liMarkup = "";
    if (cat.count > 0) {
      liMarkup += `<a href='${link}'>${cat.name} [${cat.count}]</a>`;
      li.innerHTML = liMarkup;
      ul.appendChild(li);
    }
  }
}
