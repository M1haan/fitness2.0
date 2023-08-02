import Swiper from '../../vendor/swiper';

function initCoachesSwiper() {
  let coachesSwiper = new Swiper('.swiper-coaches', {
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    direction: 'horizontal',
    loop: true,
    initialSlide: 1,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  return coachesSwiper;
}

function initReviewsSwiper() {
  let reviewsSwiper = new Swiper('.reviews__slider-container', {

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    direction: 'horizontal',
    slidesPerView: 1,
    loop: false,
  });
  return reviewsSwiper;
}

export {initCoachesSwiper, initReviewsSwiper};

