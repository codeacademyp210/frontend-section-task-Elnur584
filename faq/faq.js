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
// Accordion
var mybuttons = document.querySelectorAll(".mybutton");


mybuttons.forEach(function(element) {
 
  element.addEventListener("click",function(){
    
    var contentSection = element.parentElement.nextElementSibling;
    element.children[1].style.backgroundColor = "rgba(128, 128, 128, 0.207)";

    if(contentSection.style.height === "0px"){

      contentSection.style.display = "block";
      contentSection.style.height = "20vh";
      contentSection.style.transition = "0.4s";
      element.firstChild.className="fas fa-minus";
      element.children[1].style.backgroundColor = "rgba(128, 128, 128, 0.407)";
    
    }else{

      contentSection.style.height = "0px";
      contentSection.style.transition = "0.4s";
      element.firstChild.className="fas fa-plus";
      element.children[1].style.color = "black";
    }    
  });
}, this);
// Accordion