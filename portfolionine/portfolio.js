"use strict";

// Click prev button, slider move to the left
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Slider Area
const slider = document.querySelector(".slider");
    const leftarrow = document.querySelector(".left");
    const rightarrow = document.querySelector(".right");

   

    var sectionIndex = 0;

    leftarrow.addEventListener("click",function(){
        sectionIndex = ( sectionIndex > 0 ) ? sectionIndex - 1 : 0;
        slider.style.transform = 'translate('+ (sectionIndex) * -280 +'px)';

    });

    rightarrow.addEventListener("click",function(){
        sectionIndex = ( sectionIndex < 3 ) ? sectionIndex + 1 : 4;
        slider.style.transform = 'translate('+ (sectionIndex) * -280 +'px)';

    });

  
    