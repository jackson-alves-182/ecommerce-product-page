import{
  menu,
  menuIcon,
  closeMenu,
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

    document.querySelector('.navi').prepend(menuIcon);
    menuIcon.style.display = "none";
  })

  function resizeCheck(){
    var widthOut = window.innerWidth;
    if((widthOut > 625 )&&(menuIcon.style.display == "none")){
      menuIcon.style.display = "flex";
    }
    else if((widthOut < 625)&&(menuIcon.style.display == "flex")){
      menuIcon.style.display = "none";
    }
  }
  window.addEventListener('resize', resizeCheck);

  
}