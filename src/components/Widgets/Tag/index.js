import config from "../../../lib/config";
import Category from "./Tag";

export default class Tags {
  /*
   * Render tags list in a list
   */
  static render() {
    if (document.querySelector("ul.tags")) {
      return false;
    }

    config.wp
      .tags()
      .then((tags) => {
        const sidebar = config.sidebar,
          widget = document.createElement("div");

        widget.classList.add("widget");
        widget.innerHTML = `
      <h3>Tags</h3>
      <ul class='tags'></ul>
    `;

        sidebar.appendChild(widget);

        categories.forEach((tag) => {
          Tag.render(tag);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
