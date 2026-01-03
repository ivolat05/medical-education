/**
 * Инициализация Swiper с адаптацией под rem
 */

const swiperNearest = document.querySelector(".nearest__swiper");
const installSwiperNearest = {
	slidesPerView: 3,
	spaceBetween: pxToSwiper(27),
	breakpoints: {
		[pxToSwiper(319.99)]: {
			slidesPerView: 1,
			spaceBetween: pxToSwiper(27),
		},
		[pxToSwiper(572.99)]: {
			slidesPerView: 2,
			spaceBetween: pxToSwiper(15),
		},

		[pxToSwiper(1100.99)]: {
			slidesPerView: 3,
			spaceBetween: pxToSwiper(25),
		},
	},
	navigation: {
		nextEl: ".nearest__btn-next",
		prevEl: ".nearest__btn-prev",
	},
};

function initSwiper(swiper, installSwiper) {
	try {
		new Swiper(swiper, installSwiper);
	} catch (error) {
		console.log(`ошибка инициализации swiper: ${error}`);
	}
}

// Запускаем Swiper после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
	initSwiper(swiperNearest, installSwiperNearest);
});
