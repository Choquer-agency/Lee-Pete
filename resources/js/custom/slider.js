import Splide from '@splidejs/splide';

const sliderContent = document.querySelectorAll('.js-slider');

function initSliders() {
	var sliders = document.getElementsByClassName('js-slider');

	for (var i = 0; i < sliders.length; i++) {
		var slider = new Splide(sliders[i], {
			type: 'fade',
			arrows: 'slider',
			autoplay: true,
			rewind: true,
			pagination: false,
		});

		// Set the max-height to make equal height on every slides
		slider.on('mounted', () => {
			setMaxHeight(sliderContent);
		});

		slider.mount();
	}
}

window.addEventListener('load', () => {
	initSliders();
});

window.addEventListener(
	'resize',
	function () {
		resetMaxHeight(sliderContent);
		setMaxHeight(sliderContent);
	},
	200
);

const setMaxHeight = (array) => {
	array.forEach((slider) => {
		let maxHeight = 0;
		slider.querySelectorAll('.splide__slide').forEach((el) => {
			if (maxHeight < el.offsetHeight) maxHeight = el.offsetHeight;
			slider.style.height = `${maxHeight}px`;
		});
	});
};

const resetMaxHeight = (array) => {
	array.forEach((slider) => {
		slider.style.height = `auto`;
	});
};

