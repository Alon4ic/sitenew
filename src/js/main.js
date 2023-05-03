import $ from "jquery";
import "slick-carousel";
const init = () => {
	window.onload = function() {
		const preloader = document.querySelector('.preloader');
		preloader.classList.add('preloader-animation');
		setTimeout(() => {
			preloader.classList.remove('preloader-animation');
			preloader.classList.add('preloader-hidden');
		}, 200);

		setTimeout(() => {
			preloader.classList.add('preloader-none');
		}, 220);
	}
}
init();

let browse = document.querySelector('.browse');
let list = document.querySelector('.nav__menu-list');
let navItems = document.querySelectorAll('.nav__menu-list--item')
	browse.addEventListener('click', () => {
	browse.classList.add('nav__menu-item--active');
	list.classList.toggle('nav__menu-list--active');
});

navItems.forEach(el => {
  el.addEventListener('click', (event) => {
	event.stopPropagation();
    browse.classList.remove('nav__menu-item--active');
	list.classList.remove('nav__menu-list--active');
  })
});

let browseNew = document.querySelector('.browse__new');
let navbarItems = document.querySelectorAll('.navbar__menu-list--item');
let navbarList = document.querySelector('.navbar__menu-list')
browseNew.addEventListener('click', () => {
	browseNew.classList.add('navbar__menu-item--active');
	navbarList.classList.add('navbar__menu-list--active');
});

navbarItems.forEach(el => {
  el.addEventListener('click', (event) => {
	event.stopPropagation();
    browseNew.classList.remove('navbar__menu-item--active');
	navbarList.classList.remove('navbar__menu-list--active');
  });
});

let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let body = document.body;
burger.addEventListener('click', () => {
	if (burger.classList.contains('burger--active') ) {
		closeBurger();
	} else {
		showBurger();
	}
})
let navbarThemes = document.querySelectorAll('.navbar__menu-item')
navbarThemes.forEach(el => {
  el.addEventListener('click', () => {
	if (burger.classList.contains('burger--active') ) {
		closeBurger();
	} else {
		showBurger();
	}
});
})

navbarItems.forEach(el => {
  el.addEventListener('click', () => {
	if (burger.classList.contains('burger--active') ) {
		closeBurger();
	} else {
		showBurger();
	}
});
})
function closeBurger() {
	navbar.classList.remove('navbar--active');
	body.classList.remove('no-scroll');
	burger.classList.remove('burger--active');
}
function showBurger() {
	navbar.classList.add('navbar--active');
	body.classList.add('no-scroll');
	burger.classList.add('burger--active');
}


let showList = document.querySelector('.header__left-scroll');
let showItems = document.querySelectorAll('.header__left-scroll--item');
document.querySelector('.header__left-form--input').oninput = function () {
	let val = this.value.trim();
	if (val != '') {
		showItems.forEach(function(elem) {
			if (elem.innerText.toLocaleLowerCase().search(val) == -1) {
				console.log('now');
			} else {
				elem.classList.add('active');
				showList.classList.add('show');
			}
		});
	} else {
		showItems.forEach(function(elem) {
			elem.classList.remove('active');
			showList.classList.remove('show');
		});
	}
}
showItems.forEach(el => {
	let cont = document.querySelector('.header__left-form--input');
  el.addEventListener('click', () => {
    el.classList.remove('active');
	showList.classList.remove('show');
	cont.value = '';
  })
});

$('#slider').slick({
		arrows: false,
        centerMode: true,
        centerPadding: '170px',
        slidesToShow: 2,
		speed: 3000,
		autoplay: true,
		infinite: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        arrows: false,
		centerMode: true,
		centerPadding: '150px',
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 3000,
		autoplay: true,
		infinite: true,
      }
    },
	{
		breakpoint: 580,
		settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
		}
	}
  ]
});

$("#carousel").slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '320px',
	speed: 2000,
	autoplay: true,
	infinite: true,
	responsive: [
	{
		breakpoint: 990,
		settings: {
			centerMode: true,
			centerPadding: '150px',
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 2000,
			autoplay: true,
			infinite: true,
		}
	},
	{
		breakpoint: 580,
		settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
		}
	}
  ]
});