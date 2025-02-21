import config from "../../lib/config";
import Helpers from "../../lib/Helpers";

export default class MenuItem {
  /**
   * Display a menu item for a page
   */
  static render(page) {
    let li = document.createElement("li"),
      liMarkup = "",
      hash = Helpers.makeHashFromLink(page);

    liMarkup += `<a href="${hash}">`;
    liMarkup += page.title.rendered;
    liMarkup += "</a>";

    li.innerHTML = liMarkup;
    config.menuContainer.appendChild(li);
  }
}
