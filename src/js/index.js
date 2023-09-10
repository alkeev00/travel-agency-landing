import mobileNav from './modules/mobile-nav'
mobileNav()

document.querySelector('.btn-login').addEventListener('click', function () {
	document.querySelector('.popup-login__wrapper').classList.add('active')
})

document
	.querySelector('.popup-login__not-account')
	.addEventListener('click', function () {
		document.querySelector('.popup-login__wrapper').classList.remove('active')
		document.querySelector('.popup-signup__wrapper').classList.add('active')
	})

document
	.querySelector('.popup-login__close-btn')
	.addEventListener('click', function () {
		document.querySelector('.popup-login__wrapper').classList.remove('active')
	})

document
	.querySelector('.popup-login__overlay')
	.addEventListener('click', function () {
		document.querySelector('.popup-login__wrapper').classList.remove('active')
	})

document.querySelector('.btn-signup').addEventListener('click', function () {
	document.querySelector('.popup-signup__wrapper').classList.add('active')
})

document
	.querySelector('.popup-signup__have-account')
	.addEventListener('click', function () {
		document.querySelector('.popup-signup__wrapper').classList.remove('active')
		document.querySelector('.popup-login__wrapper').classList.add('active')
	})

document
	.querySelector('.popup-signup__close-btn')
	.addEventListener('click', function () {
		document.querySelector('.popup-signup__wrapper').classList.remove('active')
	})

document
	.querySelector('.popup-signup__overlay')
	.addEventListener('click', function () {
		document.querySelector('.popup-signup__wrapper').classList.remove('active')
	})

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
