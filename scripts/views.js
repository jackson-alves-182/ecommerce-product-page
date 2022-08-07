export default function({
  mainImage
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
  


  return{
    navigationArrow
  }
}