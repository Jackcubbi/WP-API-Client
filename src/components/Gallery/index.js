import config from "../../lib/config";
import Image from "./Image";

export default class Gallery {
  /*
   * render Gallery to page
   */
  static render() {
    config.wp
      .media()
      .then((images) => {
        let galleryContainer = document.createElement("ul");

        galleryContainer.classList.add("gallery");
        config.articleContainer.appendChild(galleryContainer);

        images.forEach((image) => Image.render(image));
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}
