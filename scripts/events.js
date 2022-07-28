import{
  menu,
  menuIcon,
  closeMenu
} from "./elements.js"

export default function(){

  menu.addEventListener('click', function(){
    document.querySelector('.menu-container').classList.remove('hide');
    closeMenu.classList.remove('hide');

    document.querySelector('.menu-container').appendChild(menuIcon);
    menuIcon.style.display = "flex";
  })

  closeMenu.addEventListener('click', function(){
    document.querySelector('.menu-container').classList.add('hide');
  })
}