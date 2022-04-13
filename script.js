let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



const navBar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');
const list = document.querySelector('#list');
const menu = document.querySelector('#menu');
const header = document.querySelector('.header');
const contentBody = document.querySelector('.content-body');
const slider = document.querySelector('.slider');

function show(){
  navBar.classList.remove('display-none')
  header.classList.add('blur')
  contentBody.classList.add('blur')
  slider.classList.add('blur')
}


function hide() {
  navBar.classList.add('display-none')
  header.classList.remove('blur')
  contentBody.classList.remove('blur')
  slider.classList.remove('blur')
}


closeBtn.addEventListener('click', hide)
menu.addEventListener('click', show);
















