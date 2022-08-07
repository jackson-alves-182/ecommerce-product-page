export default function({
  menuContainer,
  mainImage,
  menuIcon,
  imagesContainer,
  modal,
  closeMod,
  cartInfo,
  modalCartInfo
}){

  function navigationArrow(status){
    //receive src for current image in main image container
    var currentImage = mainImage.src;

    /* Counter of the lenght of the Src to cut out only the path for the 
    image i need */
    var countString = currentImage.length;
    countString = countString - 27;
    currentImage = currentImage.slice(countString);

    /*Cut out only the number of the image to use for
     next and previous image selection*/
    countString = currentImage.slice(22, 23);

    if((status == "previous")&&(countString > 1  && countString <= 4)){ 
      previousImage(currentImage ,countString);
    }
    else if((status == "next")&&(countString >= 1  && countString <= 3)){
      nextImage(currentImage, countString); 
    }
  }
  function previousImage(currentImage ,countString){
    var auxCount = countString;

    currentImage = currentImage.replace(countString, Number(auxCount) - 1);

    var thumbSelection = (Number(auxCount) - 1) - 1;
    selection(thumbSelection);

    mainImage.src = currentImage;
    countString = auxCount - 1;
  }
  function nextImage(currentImage ,countString){
    var auxCount = countString;
      
    currentImage = currentImage.replace(countString, Number(auxCount) + 1);
   
    var thumbSelection = (Number(auxCount) + 1) - 1;
    selection(thumbSelection);

    mainImage.src = currentImage;

    countString = auxCount + 1;
  }

  function selectThumbImage(thumb){
    var currentImage = thumb.src;
    var countString = currentImage.length;

    /*Similar to the navigation part, but now i remove also the "thumbnail" 
    from the src*/
    countString = countString - 37;
    currentImage = currentImage.slice(countString);

    currentImage = currentImage.slice(1,23) + ".jpg";
    mainImage.src = currentImage;

    selection(thumb);
  }
  function selection(thumb){
    removeImageSelection();

    if(thumb >= 0 && thumb < 4){
      document.querySelectorAll('.thumb')[thumb].classList.add('selected');
    }
    else{
      thumb.classList.add('selected');
    } 
  }
  function removeImageSelection(){
    document.querySelectorAll('.thumb')
    .forEach((thumb) =>{
      thumb.classList.remove('selected');
    })
  }

  function openMenu(){
    menuContainer.classList.remove('hide');

    menuContainer.appendChild(menuIcon);
    menuIcon.style.display = "flex";

    openMenuAnimation();
  }
  function openMenuAnimation(){
    menuContainer.setAttribute('open', "");
    menuContainer.addEventListener('animationend', function(){
    menuContainer.removeAttribute('open', "");
    }, {once: true});
  }

  function closeMenu(){
    document.querySelector('.navi').prepend(menuIcon);
    menuIcon.style.display = "none";

    closeMenuAnimation();
  }
  function closeMenuAnimation(){
    //hide the mobile menu and change the display to none, after the animation end
    menuContainer.setAttribute('close', "");
    menuContainer.addEventListener('animationend', function(){
      menuContainer.classList.add('hide');
      menuContainer.removeAttribute('close', "");
    }, {once: true})
  }

  function slideLeftAnimation(){
    mainImage.classList.add('left-image');
    
    mainImage.addEventListener('animationend', function(){
      mainImage.classList.remove('left-image');
    })
  }
  function slideRightAnimation(){
    mainImage.classList.add('right-image');

    mainImage.addEventListener('animationend', function(){
      mainImage.classList.remove('right-image');
    })
  }

    
  function openModal(auxCloseModal){
    
    if(auxCloseModal == 1){
      openCartModalAnimation();
    }
    else{
      modal.appendChild(imagesContainer);
      openMainModalAnimation();
    }
  }
  function openCartModalAnimation(){
    cartInfo.setAttribute('open', "");

    cartInfo.addEventListener('animationend', function(){
      modalCartInfo.style.display = "block";
      
      cartInfo.removeAttribute('open',"");
    }, {once:true})
  }
  function openMainModalAnimation(){
    imagesContainer.classList.add('main-selection');
    modal.style.display = "block";
    closeMod.style.display = "block";
  }

  
  function closeModal(auxCloseModal){

    if(auxCloseModal == 1){
      closeCartModalAnimation();
      auxCloseModal == 0;
    }
    else{
      document.querySelector('#main-container').prepend(imagesContainer);
      closeMainModalAnimation();
    }
  }
  function closeCartModalAnimation(){
    cartInfo.setAttribute('close', "");

    cartInfo.addEventListener('animationend', function(){
      cartInfo.classList.add('hide');  
      modalCartInfo.style.display = "none";

      cartInfo.removeAttribute('close',"");
    },{once:true})
  }
  function closeMainModalAnimation(){
    imagesContainer.classList.remove('main-selection');
    modal.style.display = "none";
    closeMod.style.display = "none";
  }


  function resizeCheck(){
    var widthOut = window.innerWidth;

    if((widthOut > 624 )&&(menuIcon.style.display == "none")){
      menuIcon.style.display = "flex"; 
    }
    else if((widthOut < 625)&&(menuIcon.style.display == "flex")){
      menuIcon.style.display = "none"; 
  }

  if(!menuContainer.classList.contains('hide')){
    closeMenu();
  }
}

function checkCart(quantCart){

  if(quantCart.textContent == 0){
    cartInfo.classList.remove('hide');

    document.querySelector('.empty-cart').style.display = "grid";
    document.querySelector('.full-cart').style.display = "none";
  }
  else{
    document.querySelector('.full-cart').style.display = "grid";

    document.querySelector('.empty-cart').style.display = "none";
    cartInfo.classList.remove('hide');
  }
}

  return{
    navigationArrow,
    openMenu,
    closeMenu,
    selectThumbImage,
    slideLeftAnimation,
    slideRightAnimation,
    openModal,
    closeModal,
    resizeCheck,
    checkCart
  }
}