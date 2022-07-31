import{
  menu,
  menuIcon,
  closeMenuIcon,
  cartIcon,
  cartInfo,
  cartProduct,
  mainImage,
  iconPrevious,
  iconNext
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

  iconPrevious.addEventListener('click', function(){
    var status = "previous";
    navigationArrow(status);
  })

  iconNext.addEventListener('click', function(){
    var status = "next";
    navigationArrow(status);
  })

  function navigationArrow(status){
    var currentImage = mainImage.src;

    var countString = currentImage.length;
    countString = countString - 27;

    currentImage = currentImage.slice(countString);
    countString = currentImage.slice(22, 23);

    if((status == "previous")&&(countString > 1  && countString <= 4)){ 
      previousImage(currentImage ,countString)
    }
    else if((status == "next")&&(countString >= 1  && countString <= 3)){
     nextImage(currentImage, countString);
    }
  }

  function previousImage(currentImage ,countString){
    var auxCount = countString;

    currentImage = currentImage.replace(countString, auxCount - 1);
    mainImage.src = currentImage;

    countString = auxCount;
  }
  function nextImage(currentImage ,countString){
    var auxCount = countString;
      
    currentImage = currentImage.replace(countString, Number(auxCount) + 1);

    mainImage.src = currentImage;
    countString = auxCount;
  }

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
    if((widthOut => 625 )&&(menuIcon.style.display == "none")){
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

  /*function windowCart(){
    if(cartInfo.classList.contains('hide')){
      console.log("NOPS");
    }
    else{
      cartInfo.classList.add('hide');
    }

  }*/
  window.addEventListener('resize', resizeCheck);
}
  
