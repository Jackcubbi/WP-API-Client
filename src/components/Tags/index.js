import config from "../../lib/config";
import Helpers from "../../lib/Helpers";
import Tag from "./Tag";

export default class Tags {
  /**
   * Render posts based on the Tag
   */
  static async render(tagSlug = "") {
    try {
      const tags = await config.wp.tags().embed().slug(tagSlug);

      if (!tags.length) {
        console.log(`No tags found for slug: ${tagSlug}`);
        return;
      }

      tags.map(({ id, name, count }) => {
        Helpers.renderHeader(`Tag: ${name} [${count}]`);
        Tag.render(id);
      });
    } catch (err) {
      console.error("Error fetching tags:", err);
    }
  }
}
