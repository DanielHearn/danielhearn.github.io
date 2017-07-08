function nav() {
  var button = document.getElementById("overlay-button");
  var header = document.getElementById("overlay-header");
  var overlayButtons = document.getElementsByClassName("overlay-li");
  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("top").classList.toggle("active");
  button.classList.toggle("active");
  button.classList.toggle("fixed");

  header.classList.toggle("fadeIn");
  header.classList.toggle("animated");
   for(i = 0; i < overlayButtons.length; i++){
     overlayButtons[i].classList.toggle("fadeInUp");
     overlayButtons[i].classList.toggle("animated");
    }
};
