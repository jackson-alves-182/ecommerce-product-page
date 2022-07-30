import{
  menu,
  menuIcon,
  closeMenuIcon,
  cartIcon,
  cartInfo,
  cartProduct
} from "./elements.js"

export default function(){

  menu.addEventListener('click', function(){
    openMenu();
  })

  closeMenuIcon.addEventListener('click', function(){
    closeMenu();
  })

  cartIcon.addEventListener('click', function(){
    var quantCart = document.querySelector('.quant-cart-notification');
    
    checkCart(quantCart);
  })

  cartInfo.addEventListener('mouseout', function(){
    cartInfo.classList.add('hide');
  })

  function closeMenu(){
    document.querySelector('.menu-container').classList.add('hide');

    document.querySelector('.navi').prepend(menuIcon);
    menuIcon.style.display = "none";
  }

  function openMenu(){
    document.querySelector('.menu-container').classList.remove('hide');
    closeMenuIcon.classList.remove('hide');

    document.querySelector('.menu-container').appendChild(menuIcon);
    menuIcon.style.display = "flex";
  }

  function resizeCheck(){
    var widthOut = window.innerWidth;
    if((widthOut > 625 )&&(menuIcon.style.display == "none")){
      menuIcon.style.display = "flex";
    }
    else if((widthOut < 625)&&(menuIcon.style.display == "flex")){
      closeMenu();
      menuIcon.style.display = "none";
    }
  }

  function checkCart(quantCart){
    if(quantCart.textContent == 0){
      cartProduct.innerHTML = "<div class='empty-cart'>Your cart is empty</div>";
      cartInfo.classList.remove('hide');
    }
    else{
      cartInfo.classList.remove('hide');
    }
  }

  window.addEventListener('resize', resizeCheck);

  
}