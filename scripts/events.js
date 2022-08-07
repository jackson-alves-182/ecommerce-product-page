
import{
  menu,
  menuIcon,
  closeMenuIcon,
  modalCartInfo,
  cartIcon,
  cartInfo,
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

export default function(views){

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
    views.openMenu();
  })
  closeMenuIcon.addEventListener('click', function(){
    views.closeMenu();
  })
  cartIcon.addEventListener('click', function(){
    var quantCart = document.querySelector('.quant-cart-notification');
    auxCloseModal = 1;
    
    checkCart(quantCart);
    views.openModal(auxCloseModal);
  })
  wipeCart.addEventListener('click', function(){
    auxCloseModal = 1;
    cartNotification.textContent = "";
    cartNotification.classList.remove('cart-full');
    
    closeModal(auxCloseModal);
           
    cartIcon.removeAttribute('full', "");
    cartNotification.removeAttribute('full',"");
  })
  modalCartInfo.addEventListener('click', function(){
    closeModal(auxCloseModal);
  })

  iconPrevious.addEventListener('click', function(){
    var status = "previous";
    views.navigationArrow(status);
    views.slideLeftAnimation();
  })
  iconNext.addEventListener('click', function(){
    var status = "next";
    views.navigationArrow(status);
    views.slideRightAnimation();
  })

  mainImage.addEventListener('click', function(){
    views.openModal();
  })
   closeMod.addEventListener('click', function(){
    closeModal();
  })

  thumb1.addEventListener('click', function(){
    views.selectThumbImage(thumb1);
  })
  thumb2.addEventListener('click', function(){
    views.selectThumbImage(thumb2);
  })
  thumb3.addEventListener('click', function(){
    views.selectThumbImage(thumb3);
  })
  thumb4.addEventListener('click', function(){
    views.selectThumbImage(thumb4);
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
      cartIcon.setAttribute('full', "");
      cartNotification.setAttribute('full',"");
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



  function closeModal(auxCloseModal){

    if(auxCloseModal == 1){
      cartInfo.setAttribute('close', "");
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
  
