"use strict";
var slider = document.getElementsByClassName("myImg");
var sliderNumber = slider.length;
var slideNo = 0;
slideShow(slideNo);
function Previous(){
    slideNo--;
    slideShow(slideNo);
}
function Next(){
    slideNo++;
    slideShow(slideNo);
}
function Pause(){
    clearInterval(myInterval);
}
// function mytoggleFunction(x){    
//     var toggleicon =  x.classList.toggle("fa-play-circle");
//   }
  
var myInterval = setInterval(function(){
    slideNo++;
    slideShow(slideNo);
},5000);

function slideShow(mySlider){
    slideNo = mySlider;
    
    if(mySlider>=sliderNumber){
        slideNo = 0;
    }
    if(mySlider<0){
       slideNo =  sliderNumber -1;
    }
    for(var i=0;i<sliderNumber;i++){
        slider[i].style.display = "none";
    }
    slider[slideNo].style.display = "block";
    
}
// var pauseicon = document.getElementById("pauseicon");
// pauseicon.addEventListener("mouseover",myOver);
// pauseicon.addEventListener("mouseout",myOvericon);


// function myOver(){   
// pauseicon.style.transform = "scale(1.5)";
// pauseicon.style.transition = "1s";
// };
// function myOvericon(){   
//     pauseicon.style.transform = "scale(1)";
//     pauseicon.style.transition = "1s";
//     }  
    // pauseicon.style.display = "none";
    // function clickAgain(){  const sContainer = document.querySelector(".slider-container");

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













