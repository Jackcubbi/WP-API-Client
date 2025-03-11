import config from "../../../lib/config";
import Category from "./Category";

export default class Categories {
  /**
   * Render categories on the sidebar
   */
  static render() {
    if (document.querySelector("ul.categories")) {
      return false;
    }

    config.wp
      .categories()
      .then((categories) => {
        const sidebar = config.sidebar,
          widget = document.createElement("div");

        widget.classList.add("widget");
        widget.innerHTML = `
      <h3>Categories</h3>
      <ul class='categories'></ul>
    `;

        sidebar.appendChild(widget);

        categories.forEach((category) => {
          Category.render(category);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
