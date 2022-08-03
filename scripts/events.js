import{
  menu,
  menuIcon,
  closeMenuIcon,
  cartIcon,
  cartInfo,
  cartProduct,
  cartNotification,
  cartDescription,
  cartPrice,
  cartQuant,
  cartTotal,
  wipeCart,
  modal,
  closeMod,
  imagesContainer,
  mainImage,
  iconPrevious,
  iconNext,
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  btnPlusCart,
  btnMinusCart,
  quantToCart,
  btnAddCart,
  brand,
  model,
  description,
  price,
  discount,
  totalPrice
} from "./elements.js"

export default function(){

  var quantAddCart = document.querySelector('#quant-to-add');

  const shoe = {
    brand:"Sneaker Company",
    model:"Fall Limited Edition Sneakers",
    description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price:null,
    discount:50,
    totalPrice:250.00
  }

  window.addEventListener('load', function(){
    brand.textContent = shoe.brand;
    model.textContent = shoe.model;
    description.textContent = shoe.description;
    price.textContent = parseFloat((shoe.totalPrice * shoe.discount) / 100).toPrecision(5);
    discount.textContent = `${shoe.discount}\%`;
    totalPrice.textContent = `\$${parseFloat(shoe.totalPrice).toPrecision(5)}`;
  })

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
  cartInfo.addEventListener('click', function(){
    window.addEventListener('click',function(){
      cartInfo.classList.add('hide');
    })
  })
  wipeCart.addEventListener('click', function(){
    cartNotification.textContent = "";
    cartNotification.classList.remove('cart-full');

    cartInfo.classList.add('hide');
  })

  iconPrevious.addEventListener('click', function(){
    var status = "previous";
    navigationArrow(status);

    mainImage.classList.add('left-image');
    
    mainImage.addEventListener('animationend', function(){
      mainImage.classList.remove('left-image');
    })
  })
  iconNext.addEventListener('click', function(){
    var status = "next";
    navigationArrow(status);
    mainImage.classList.add('right-image');

    mainImage.addEventListener('animationend', function(){
      mainImage.classList.remove('right-image');
    })
  })

  mainImage.addEventListener('dblclick', function(){
    openModal();
  })
   closeMod.addEventListener('click', function(){
    closeModal();
  })

  thumb1.addEventListener('click', function(){
    selectedImage(thumb1);
  })
  thumb2.addEventListener('click', function(){
    selectedImage(thumb2);
  })
  thumb3.addEventListener('click', function(){
    selectedImage(thumb3);
  })
  thumb4.addEventListener('click', function(){
    selectedImage(thumb4);
  })

  btnPlusCart.addEventListener('click', function(){
    quantAddCart.textContent = Number(quantAddCart.textContent) + 1;
  })

  btnMinusCart.addEventListener('click', function(){
    if(quantAddCart.textContent > 0){
      quantAddCart.textContent = Number(quantAddCart.textContent) - 1;
    }
  })

  btnAddCart.addEventListener('click', function(){

    if(quantToCart.textContent > 0){
      addToCart();
    }
   
  })



  function addToCart(){

    cartDescription.textContent = shoe.model;
    cartPrice.textContent = parseFloat((shoe.totalPrice * shoe.discount) / 100).toPrecision(5);
    cartQuant.textContent = quantToCart.textContent;
    cartTotal.textContent = `\$${parseFloat(cartPrice.textContent * cartQuant.textContent).toPrecision(5)}`;

    cartNotification.textContent = cartQuant.textContent;
    cartNotification.classList.add('cart-full');
    document.querySelector('#img-cart').src = thumb1.src;
    quantToCart.textContent = 0;

  }

  function navigationArrow(status){
    var currentImage = mainImage.src;

    var countString = currentImage.length;
    countString = countString - 27;
    currentImage = currentImage.slice(countString);

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

  function selectedImage(thumb){
    var currentImage = thumb.src;
    var countString = currentImage.length;

    countString = countString - 37;
    currentImage = currentImage.slice(countString);

    currentImage = currentImage.slice(1,23) + ".jpg";
    mainImage.src = currentImage;

    selection(thumb);
  }

  function selection(thumb){
    for(var i=0; i<4; i++){
      document.querySelectorAll('.thumb')[i].classList.remove('selected');
    }

    if(thumb >= 0 && thumb < 4){
      document.querySelectorAll('.thumb')[thumb].classList.add('selected');
    }
    else{
      thumb.classList.add('selected');
    } 
  }

  function openMenu(){
    document.querySelector('.menu-container').classList.remove('hide');
    closeMenuIcon.classList.remove('hide');

    document.querySelector('.menu-container').appendChild(menuIcon);
    menuIcon.style.display = "flex";

    document.querySelector('.menu-container').classList.remove('toggle-menu');
  }
  function closeMenu(){
    document.querySelector('.menu-container').classList.add('toggle-menu');
    document.querySelector('.navi').prepend(menuIcon);
    menuIcon.style.display = "none";

    //hide the mobile menu and change the display to none, after the animation end
    document.querySelector('.toggle-menu').addEventListener('animationend', function(){
      document.querySelector('.menu-container').classList.add('hide');
    }, {once: true})

  }

  function openModal(){

    imagesContainer.classList.add('main-selection');
    modal.appendChild(imagesContainer);

    modal.style.display = "block";
    closeMod.style.display = "block";
  }
  function closeModal(){
    imagesContainer.classList.remove('main-selection');
    document.querySelector('#main-container').prepend(imagesContainer);

    modal.style.display = "none";
    closeMod.style.display = "none";
  }

  function resizeCheck(){
    var widthOut = window.innerWidth;
    if((widthOut > 624 )&&(menuIcon.style.display == "none")){
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
  
