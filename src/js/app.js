"use strict";

//?Импорт кастомного открывания картинок (снипет doi)
//import customOpenImage from './modules/customOpenImage.js';
//?Импор Свайпера (снипет swp)
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, Thumbs } from 'swiper/modules';


//?Основные скрипты (делегирование, шапка)
import { delegationClick } from './modules/script.js';
//?Для открытия, закрытия бургера обязательно добавить эту ф-ию (только импортировать, запускать не надо)
import { closeMenu } from './modules/script.js';


//?Функция определения мобильного устройства
//import { isMobile } from "./modules/functions";
//?Импортирование плавного скролла
//import "./modules/smoothScroll.js"
//?Галерея FancyBox
//import { Fancybox } from "@fancyapps/ui";
//import "@fancyapps/ui/dist/fancybox/fancybox.css";
//Fancybox.bind("[data-gallery]", {});
//<a href="img/3.jfif" data-fancybox="gallery" data-caption="Природа" class="block__item"><img src="img/3.jfif" alt="Природа"></a>

//?Динамический адаптив (  useDynamicAdapt()  )
import { useDynamicAdapt } from './modules/dynamic.js'


window.addEventListener("load", windowLoad);
function windowLoad() {

    delegationClick();
    useDynamicAdapt();

    const welcomeSlider = document.querySelector('.welcome-slider');
    if (welcomeSlider) {
        new Swiper(welcomeSlider, {
            modules: [Navigation, Keyboard],
            wrapperClass: 'welcome-slider__wrapper',
            slideClass: 'welcome-slider__item',
            navigation: {
                prevEl: '#w1',
                nextEl: '#w2',
            },
            direction: 'horizontal',
            slidesPerView: 1,
            loop: false,
            speed: 800,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }

    const newSlider = document.querySelector('.new__slider');
    if (newSlider) {
        new Swiper(newSlider, {
            modules: [Navigation, Keyboard, Mousewheel],
            wrapperClass: 'new__wrapper',
            slideClass: 'new__slide',
            navigation: {
                prevEl: '#n1',
                nextEl: '#n2',
            },
            direction: 'horizontal',
            slidesPerView: 4,
            loop: false,
            speed: 800,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            mousewheel: {
                invert: true,
            },
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                744: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
        });
    }

    const newBigSlider = document.querySelector('.new-slider');
    if (newBigSlider) {
        new Swiper(newBigSlider, {
            modules: [Navigation, Keyboard],
            wrapperClass: 'new-slider__wrapper',
            slideClass: 'new-slider__item',
            navigation: {
                prevEl: '#nb1',
                nextEl: '#nb2',
            },
            direction: 'horizontal',
            slidesPerView: 1,
            loop: false,
            speed: 800,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }

    const trendsSlider = document.querySelector('.trends');
    if (trendsSlider) {
        new Swiper(trendsSlider, {
            modules: [Navigation, Keyboard],
            wrapperClass: 'trends__wrapper',
            slideClass: 'trends__slide',
            navigation: {
                prevEl: '#t1',
                nextEl: '#t2',
            },
            direction: 'horizontal',
            slidesPerView: 1,
            loop: false,
            speed: 800,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }

    const brendsCatalogSlider = document.querySelector('.brends-slider');
    if (brendsCatalogSlider) {
        new Swiper(brendsCatalogSlider, {
            modules: [Navigation, Keyboard],
            wrapperClass: 'brends-slider__wrapper',
            slideClass: 'brends-slider__slide',
            navigation: {
                prevEl: '#bre1',
                nextEl: '#bre2',
            },
            direction: 'horizontal',
            slidesPerView: 2.5,
            loop: false,
            speed: 800,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }

    let swp;
    const imagesMiniProductSlider = document.querySelector('.mini-slider-images');
    if (imagesMiniProductSlider) {
        swp = new Swiper(imagesMiniProductSlider, {
            wrapperClass: 'mini-slider-images__wrapper',
            slideClass: 'mini-slider-images__slide',
            direction: 'vertical',
            slidesPerView: 7,
            loop: false,
            speed: 800,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            observeSlideChildren: true
        });
    }
    const imagesProductSlider = document.querySelector('.images-product-slider');
    if (imagesProductSlider) {
        new Swiper(imagesProductSlider, {
            modules: [Keyboard, Thumbs],
            wrapperClass: 'images-product-slider__wrapper',
            slideClass: 'images-product-slider__slide',
            direction: 'horizontal',
            slidesPerView: 1,
            loop: false,
            speed: 800,
            spaceBetween: 20,
            observer: true,
            thumbs: {
                swiper: swp
            },
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }

    const tabs = document.querySelectorAll('[data-tabs]');
    if (window.innerWidth < 600 && tabs.length) {
        tabs.forEach(tab => {
            const activeFilter = tab.querySelector('.active');
            if (activeFilter) {
                const filterValue = activeFilter.dataset.filter;
                tab.querySelectorAll('[data-filter-item]').forEach(filterItem => {
                    if (filterItem.dataset.filterItem != filterValue) {
                        filterItem.style.cssText = `position: absolute;opacity: 0;`;
                    }
                });
            }
        });
    }

    const similarSlider = document.querySelector('.similar__slider');
    if (similarSlider) {
        new Swiper(similarSlider, {
            modules: [Keyboard, Navigation],
            wrapperClass: 'similar__wrapper',
            slideClass: 'item',
            direction: 'horizontal',
            slidesPerView: 4,
            loop: false,
            navigation: {
                prevEl: '#sim1',
                nextEl: '#sim2',
            },
            breakpoints: {
                900: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                580: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                380: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
            },
            speed: 800,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }



    //для буков в брендах
    const alphabetContainer = document.getElementById('alphabetContainer');
    const searchInput = document.getElementById('searchInput');
    if (alphabetContainer && searchInput) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        alphabet.split('').forEach(letter => {
            const button = document.createElement('button');
            button.classList.add('button-alphabet')
            button.textContent = letter;
            button.type = 'button';
            alphabetContainer.appendChild(button);
        });
    }

    const miniSliderGiftCard = document.querySelector('.mini-slider-gift-card');
    if (miniSliderGiftCard) {
        swp = new Swiper(miniSliderGiftCard, {
            modules: [Mousewheel],
            wrapperClass: 'mini-slider-gift-card__wrapper',
            slideClass: 'mini-slider-gift-card__slide',
            direction: 'vertical',
            slidesPerView: 6,
            loop: false,
            speed: 800,
            spaceBetween: 0,
            observer: true,
            mousewheel: {
                invert: true,
            },
            breakpoints: {
                480: {
                    direction: 'vertical',
                    slidesPerView: 6,
                },
                0: {
                    slidesPerView: 3,
                    direction: 'horizontal',
                },
            },
            observeParents: true,
            observeSlideChildren: true
        });
    }
    const sliderGiftCard = document.querySelector('.slider-gift-card');
    if (sliderGiftCard) {
        new Swiper(sliderGiftCard, {
            modules: [Keyboard, Thumbs],
            wrapperClass: 'slider-gift-card__wrapper',
            slideClass: 'slider-gift-card__slide',
            direction: 'horizontal',
            slidesPerView: 1,
            loop: false,
            speed: 800,
            spaceBetween: 20,
            observer: true,
            thumbs: {
                swiper: swp
            },
            observeParents: true,
            observeSlideChildren: true,
            keyboard: {
                enabled: true,
            }
        });
    }
}