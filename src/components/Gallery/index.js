import config from "../../lib/config";
import Image from "./Image";

export default class Gallery {
  /*
   * render Gallery to page
   */
  static render() {
    const galleryContainer = document.createElement("ul");
    galleryContainer.classList.add("gallery");
    config.articleContainer.appendChild(galleryContainer);

    config.wp
      .media()
      .then((images) => {
        images.forEach((image) => image.render(image));
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
}
