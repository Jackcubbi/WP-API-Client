import Header from "./components/Header";
import Menu from "./components/Menu/index";

export default class App {
  /**
   *
   * @return {void}
   */
  static init() {
    Header.render();
    Menu.render();
  }
}

App.init();
