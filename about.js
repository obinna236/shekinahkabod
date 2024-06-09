let media = document.querySelector(".media-nav");
let menu = document.querySelector(".menu");

menu.onclick = function () {
  media.classList.toggle("slideOut");
};


//  Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },

  breakpoints:{
    0:{
       slidesPerView: 1, 
    },
    520:{
       slidesPerView: 2, 
    },
    950:{
       slidesPerView: 3, 
    },
  },

});

