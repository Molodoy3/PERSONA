"use strict";

//?Импорт кастомного открывания картинок (снипет doi)
//import customOpenImage from './modules/customOpenImage.js';
//?Импор Свайпера (снипет swp)
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';


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
    if(welcomeSlider){
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
    if(newSlider){
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
    if(newBigSlider){
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
    if(trendsSlider){
        console.log(trendsSlider); // Добавьте это для проверки

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
}