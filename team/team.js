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
// 
var mybuttons = document.querySelectorAll(".mybutton");

mybuttons.forEach(function(element) {
  element.addEventListener("click",function(){
    
    var contentSection = element.parentElement.nextElementSibling;

    if(contentSection.style.height === "0px"){
       
      contentSection.style.height = "20vh";
      contentSection.style.transition = "0.4s";
      element.firstChild.className="fas fa-minus";
      element.children[1].style.color = "#fd602c";
    
    }else{

      contentSection.style.height = "0px";
      contentSection.style.transition = "0.4s";
      element.firstChild.className="fas fa-plus";
      element.children[1].style.color = "black";
    }    
  });
}, this);

// Mini Slider Area

const slider = document.querySelector(".slider");
var sectionIndex = 0;

document.querySelectorAll(".sliderul>li").forEach(function(indicator,ind){
   indicator.addEventListener("click",function(){
       sectionIndex = ind;
       document.querySelector(".sliderul>li.selected").classList.remove("selected");
       indicator.classList.add("selected");
    slider.style.transform = 'translate('+ (sectionIndex) * -50 +'%)';
    

   });
}); 
