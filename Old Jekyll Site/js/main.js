function nav() {
  var button = document.getElementById("overlay-button");
  //var overlayButtons = document.getElementsByClassName("overlay-li");
  var overlayUl = document.getElementById("overlay-ul");

  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("top").classList.toggle("active");
  button.classList.toggle("active");
  button.classList.toggle("fixed");

  overlayUl.classList.toggle("fadeIn");
  overlayUl.classList.toggle("animated");

   /*for(i = 0; i < overlayButtons.length; i++){
     overlayButtons[i].classList.toggle("fadeIn");
     overlayButtons[i].classList.toggle("animated");
   }*/
};
