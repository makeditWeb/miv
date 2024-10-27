

document.addEventListener('DOMContentLoaded', function() {
    // main slide
    const swiper = new Swiper(".mainSlide", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    // 인기 캠페인

    const swiper01 = new Swiper(".pouplarSlide", {
        slidesPerView: 6,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    const swiper02 = new Swiper(".todyopenSlide", {
        slidesPerView: 6,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    const swiper03 = new Swiper(".productSlide", {
        slidesPerView: 6,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    const swiper04 = new Swiper(".locationSlide", {
        slidesPerView: 6,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

});



