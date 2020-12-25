let planCard = document.querySelectorAll('.plan-card');
let selectButton = document.querySelectorAll('.select-plan-btn');
let burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  let headerNavigation = document.querySelector('.nav');
  headerNavigation.classList.toggle('active-navigation');
  burger.classList.toggle('active-burger');
});

selectButton.forEach((el) => {
    el.addEventListener('focus', function () {
        this.parentElement.style.borderColor = '#F53838';
    });
    el.addEventListener('blur', function () {
        this.parentElement.style.borderColor = '#DDDDDD';
    });
});


var mySwiper = new Swiper('.swiper-container', {

    slidesPerView: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 50,
        }
    }
});