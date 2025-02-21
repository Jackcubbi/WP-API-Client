import config from "../../lib/config";
import menuItem from "./item";

export default class Menu {
  //  render - Display the menu on the page
  static render() {
    config.wp
      .pages()
      .parent(0)
      .order("asc")
      .orderby("menu_order")
      .then((pages) => {
        let menuPages = pages.map((page) => menuItem.render(page));
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
}
