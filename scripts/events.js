
import{
  menu,
  closeMenuIcon,
  modalCartInfo,
  cartIcon,
  cartNotification,
  cartDescription,
  cartPrice,
  cartQuant,
  cartTotal,
  wipeCart,
  closeMod,
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

export default function(view){

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
  window.addEventListener('resize', view.resizeCheck);

  window.addEventListener('load', function(){
    brand.textContent = shoe.brand;
    model.textContent = shoe.model;
    description.textContent = shoe.description;
    price.textContent = parseFloat((shoe.totalPrice * shoe.discount) / 100).toPrecision(5);
    discount.textContent = `${shoe.discount}\%`;
    totalPrice.textContent = `\$${parseFloat(shoe.totalPrice).toPrecision(5)}`;
  })

  menu.addEventListener('click', function(){
    view.openMenu();
  })
  closeMenuIcon.addEventListener('click', function(){
    view.closeMenu();
  })
  cartIcon.addEventListener('click', function(){
    var quantCart = document.querySelector('.quant-cart-notification');
    auxCloseModal = 1;
    
    view.checkCart(quantCart);
    view.openModal(auxCloseModal);
  })
  wipeCart.addEventListener('click', function(){
    auxCloseModal = 1;
    cartNotification.textContent = "";
    cartNotification.classList.remove('cart-full');
    
    view.closeModal(auxCloseModal);
           
    cartIcon.removeAttribute('full', "");
    cartNotification.removeAttribute('full',"");
  })
  modalCartInfo.addEventListener('click', function(){
    view.closeModal(auxCloseModal);
  })

  iconPrevious.addEventListener('click', function(){
    var status = "previous";
    view.navigationArrow(status);
    view.slideLeftAnimation();
  })
  iconNext.addEventListener('click', function(){
    var status = "next";
    view.navigationArrow(status);
    view.slideRightAnimation();
  })

  mainImage.addEventListener('click', function(){
    view.openModal();
  })
   closeMod.addEventListener('click', function(){
    view.closeModal();
  })

  thumb1.addEventListener('click', function(){
    view.selectThumbImage(thumb1);
  })
  thumb2.addEventListener('click', function(){
    view.selectThumbImage(thumb2);
  })
  thumb3.addEventListener('click', function(){
    view.selectThumbImage(thumb3);
  })
  thumb4.addEventListener('click', function(){
    view.selectThumbImage(thumb4);
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
  
}
  
