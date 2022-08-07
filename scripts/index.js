import Events from "./events.js"
import Views from "./views.js"

import{
  menuContainer,
  mainImage,
  closeMenuIcon,
  menuIcon
} from "./elements.js"

const views = Views({
  menuContainer,
  mainImage,
  closeMenuIcon,
  menuIcon
});

const events = Events(views);




