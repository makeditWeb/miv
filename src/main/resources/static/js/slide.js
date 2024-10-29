

document.addEventListener('DOMContentLoaded', function() {
    // main slide
    const swiper = new Swiper(".mainSlide", {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".main-slide .swiper-button-next",
            prevEl: ".main-slide .swiper-button-prev",
            enabled: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // 모바일
            768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
                navigation: {
                    enabled: false, // 모바일에서 navigation 비활성화
                }
            },
            // PC
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
                navigation: {
                    enabled: true, // PC에서 navigation 활성화
                }
            }
        },
    });

    // 인기 캠페인

    const swiper01 = new Swiper(".pouplarSlide", {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: ".popular-slide .swiper-button-next",
            prevEl: ".popular-slide .swiper-button-prev",
            enabled: false,
        },
        breakpoints: {
            // 모바일
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                navigation: {
                    enabled: false, // 모바일에서 navigation 비활성화
                }
            },
            // PC
            1200: {
                slidesPerView: 6,
                spaceBetween: 32,
                navigation: {
                    enabled: true, // PC에서 navigation 활성화
                }
            }
        },
    });

    const swiper02 = new Swiper(".todyopenSlide", {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: ".todyopen-slide .swiper-button-next",
            prevEl: ".todyopen-slide .swiper-button-prev",
            enabled: false,
        },
        breakpoints: {
            // 모바일
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                navigation: {
                    enabled: false, // 모바일에서 navigation 비활성화
                }
            },
            // PC
            1200: {
                slidesPerView: 6,
                spaceBetween: 32,
                navigation: {
                    enabled: true, // PC에서 navigation 활성화
                }
            }
        },
    });

    const swiper03 = new Swiper(".productSlide", {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: ".product-slide .swiper-button-next",
            prevEl: ".product-slide .swiper-button-prev",
            enabled: false,
        },
        breakpoints: {
            // 모바일
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                navigation: {
                    enabled: false, // 모바일에서 navigation 비활성화
                }
            },
            // PC
            1200: {
                slidesPerView: 6,
                spaceBetween: 32,
                navigation: {
                    enabled: true, // PC에서 navigation 활성화
                }
            }
        },
    });

    const swiper04 = new Swiper(".locationSlide", {
        slidesPerView: 2.5,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: ".location-slide .swiper-button-next",
            prevEl: ".location-slide .swiper-button-prev",
            enabled: false,
        },
        breakpoints: {
            // 모바일
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
                navigation: {
                    enabled: false, // 모바일에서 navigation 비활성화
                }
            },
            // PC
            1200: {
                slidesPerView: 6,
                spaceBetween: 32,
                navigation: {
                    enabled: true, // PC에서 navigation 활성화
                }
            }
        },
    });

});



