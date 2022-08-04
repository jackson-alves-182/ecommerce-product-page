import{
  menu,
  menuIcon,
  closeMenuIcon,
  modalCartInfo,
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
  var auxCloseModal = 0;

  const shoe = {
    image:"/images/image-product-1-thumbnail.jpg",
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
    auxCloseModal = 1;
    
    checkCart(quantCart);
    openModal(auxCloseModal);
  })
  wipeCart.addEventListener('click', function(){
    auxCloseModal = 1;
    cartNotification.textContent = "";
    cartNotification.classList.remove('cart-full');
    
    closeModal(auxCloseModal);
  })
  modalCartInfo.addEventListener('click', function(){
    closeModal(auxCloseModal);
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
    if(quantToCart.textContent != 0){
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
    
    
    document.querySelector('#img-cart').src = shoe.image;
    
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

    document.querySelector('.menu-container').setAttribute('open', "");
    document.querySelector('.menu-container').addEventListener('animationend', function(){
      document.querySelector('.menu-container').removeAttribute('open', "");
    }, {once: true})
  }
  function closeMenu(){
    document.querySelector('.navi').prepend(menuIcon);
    menuIcon.style.display = "none";

    //hide the mobile menu and change the display to none, after the animation end
    document.querySelector('.menu-container').setAttribute('close', "");

    document.querySelector('.menu-container').addEventListener('animationend', function(){
      document.querySelector('.menu-container').classList.add('hide');
      document.querySelector('.menu-container').removeAttribute('close', "");
    }, {once: true})
  }

  function openModal(auxCloseModal){
    
    if(auxCloseModal == 1){

      cartInfo.setAttribute('open', "");
      cartInfo.addEventListener('animationend', function(){
        modalCartInfo.style.display = "block";
        
        cartInfo.removeAttribute('open',"");
      }, {once:true})
     
    }
    else{
      imagesContainer.classList.add('main-selection');
      modal.appendChild(imagesContainer);
      modal.style.display = "block";
      closeMod.style.display = "block";
    }
  }

  function closeModal(auxCloseModal){

    if(auxCloseModal == 1){
      cartInfo.setAttribute('close', "");
      console.log("SAUHUHSAUHSA")
      cartInfo.addEventListener('animationend', function(){
        cartInfo.classList.add('hide');  
        modalCartInfo.style.display = "none";
       
        cartInfo.removeAttribute('close',"");
        auxCloseModal == 0;
      },{once:true})
   
    }
    else{
      imagesContainer.classList.remove('main-selection');
      document.querySelector('#main-container').prepend(imagesContainer);
      modal.style.display = "none";
      closeMod.style.display = "none";
    }
  }

  function resizeCheck(){
    var widthOut = window.innerWidth;

    if((widthOut > 624 )&&(menuIcon.style.display == "none")){
      menuIcon.style.display = "flex"; 
    }
    else if((widthOut < 625)&&(menuIcon.style.display == "flex")){
      menuIcon.style.display = "none"; 
  }

  if(document.querySelector('.menu-container').classList.contains('hide')){
  }
  else{
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

  window.addEventListener('resize', resizeCheck);
}
  
