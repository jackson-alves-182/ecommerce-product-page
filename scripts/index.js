import Events from "./events.js"
import View from "./view.js"

import{
  menuContainer,
  mainImage,
  menuIcon,
  imagesContainer,
  modal,
  closeMod,
  cartInfo,
  modalCartInfo
} from "./elements.js"

const view = View({
  menuContainer,
  mainImage,
  menuIcon,
  imagesContainer,
  modal,
  closeMod,
  cartInfo,
  modalCartInfo
});

const events = Events(view);




