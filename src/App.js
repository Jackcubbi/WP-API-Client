import Header from "./components/Header";
import Menu from "./components/Menu/index";
import Router from "./lib/Router";

export default class App {
  /**
   *
   * @return {void}
   */
  static init() {
    Header.render();
    Menu.render();
    Router.init();
  }
}

App.init();
