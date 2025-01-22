const back_image = document.getElementById("image");
let slide = 1;

function next(){
  if(slide < 4 && slide >= 1){
    slide += 1;
    back_image.classList = `bg${slide}`;
    back_image.src = `images/${slide}.png`;
  }
  else{
    slide = 1
    back_image.classList = `bg${slide}`;
    back_image.src = `images/${slide}.png`;
  }
}

function previous(){
  if(slide <= 4 && slide > 1){
    slide -= 1;
    back_image.classList = `bg${slide}`;
    back_image.src = `images/${slide}.png`;
  }
  else{
    slide = 4;
    back_image.classList = `bg${slide}`;
    back_image.src = `images/${slide}.png`;
  }
}
