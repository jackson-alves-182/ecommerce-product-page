import Events from "./events.js"
import Views from "./views.js"

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

const views = Views({
  menuContainer,
  mainImage,
  menuIcon,
  imagesContainer,
  modal,
  closeMod,
  cartInfo,
  modalCartInfo
});

const events = Events(views);




