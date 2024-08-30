'use strict';
// navbar
const overlay=document.querySelector("[data-overlay]");
const navopenbtn=document.querySelector("[data-nav-open-btn]");
const navbar=document.querySelector("[data-navbar]");
const navClosebtn=document.querySelector("[data-nav-close-btn]");
const navLinks=document.querySelectorAll("[data-nav-link]");
console.log(navLinks);
const navElemArr=[navopenbtn,navClosebtn,overlay];
const navToggleEvent=function(elem){
  for(let i=0;i<elem.length;i++){
    elem[i].addEventListener("click",function(){
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
   
  }
}
navToggleEvent(navElemArr);
navToggleEvent(navLinks);

// header sticky

const header=document.querySelector("[data-header]");
const goTopBtn=document.querySelector("[data-go-top]");
window.addEventListener("scroll",()=>{
  if(window.scrollY>=200){
    header.classList.add("active");
    goTopBtn.classList.add("active");
  }
  else{
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
})