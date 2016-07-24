window.onload = function(){
  var modalstairs = document.getElementById("modalstairs");
  var buttonstairs = document.getElementById("buttonstairs");
  var modalpulse = document.getElementById("modalpulse");
  var buttonpulse  = document.getElementById("buttonpulse");
  var modaldot = document.getElementById("modaldot");
  var buttondot = document.getElementById("buttondot");
  var modalslider  = document.getElementById("modalslider");
  var buttonslider  = document.getElementById("buttonslider");
  var closestairs  = document.getElementById("closestairs");
  var closepulse  = document.getElementById("closepulse");
  var closedot  = document.getElementById("closedot");
  var closeslider  = document.getElementById("closeslider");

  buttonstairs.onclick = function() {
      modalstairs.classList.add("modalopen");
  }

  buttonpulse.onclick = function() {
      modalpulse.classList.add("modalopen");
  }

  buttondot.onclick = function() {
      modaldot.classList.add("modalopen");
  }

  buttonslider.onclick = function() {
      modalslider.classList.add("modalopen");
  }

  closestairs.onclick = function() {
      modalstairs.classList.remove("modalopen");
  }

  closepulse.onclick = function() {
      modalpulse.classList.remove("modalopen");
  }

  closedot.onclick = function() {
      modaldot.classList.remove("modalopen");
  }

  closeslider.onclick = function() {
      modalslider.classList.remove("modalopen");
  }

  window.onclick = function(event) {
      if (event.target == modalstairs) {
      modalstairs.classList.remove("modalopen");
      }
      if (event.target == modalpulse) {
      modalpulse.classList.remove("modalopen");
      }
      if (event.target == modaldot) {
      modaldot.classList.remove("modalopen");
      }
      if (event.target == modalslider) {
      modalslider.classList.remove("modalopen");
      }
  }
};
