import config from "../../lib/config";
import Helpers from "../../lib/Helpers";
import Category from "./Category";

export default class Categories {
  /**
   * Render posts based on the category
   */
  static async render(catSlug = "") {
    try {
      const categories = await config.wp.categories().embed().slug(catSlug);

      if (!categories.length) {
        console.warn(`No categories found for slug: ${catSlug}`);
        return;
      }

      categories.forEach(({ id, name, count }) => {
        Helpers.renderHeader(`Category: ${name} [${count}]`);
        Category.render(id);
      });
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  }
}
