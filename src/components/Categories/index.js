import config from "../../lib/config";
import Helpers from "../../lib/Helpers";
import Category from "./Category";

export default class Categories {
  /**
   * Render posts based on the category
   */
  static render(catSlug = "") {
    config.wp
      .categories()
      .embed()
      .slug(catSlug)
      .then((categories) => {
        categories.forEach((cat) => {
          Helpers.renderHeader(`Category: ${cat.name} [${cat.count}]`);
          Category.render(cat.id);
        });
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
