import mobileNav from './modules/mobile-nav'
mobileNav()

import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	spaceBetween: 32,
	navigation: {
		nextEl: '.popular__controls-next',
		prevEl: '.popular__controls-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 22,
		},
		475: {
			slidesPerView: 2,
			spaceBetween: 22,
		},
		620: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
	},
})
