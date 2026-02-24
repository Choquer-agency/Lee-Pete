import { disableBodyScroll } from 'body-scroll-lock';

var team = document.querySelectorAll('.js-team-member'),
	teamMobile = document.querySelectorAll('.js-mobile-image'),
	close = document.querySelectorAll('.js-close');

team.forEach(function (teamMember) {
	teamMember.addEventListener('mouseover', function () {
		this.src = this.getAttribute('data-hover');
	});
	teamMember.addEventListener('mouseout', function () {
		this.src = this.getAttribute('data-image');
	});
});

teamMobile.forEach((image) => {
	image.addEventListener('click', function () {
		document.body.style.height = '100vh';
		document.querySelector('html').style.height = '100vh';
		disableBodyScroll(
			image.closest('.js-team-section').querySelector('.js-content')
		);
	});
});

close.forEach((button) => {
	button.addEventListener('click', function () {
		bodyScrollLock.clearAllBodyScrollLocks(teamMobile);
		document.body.style.height = 'auto';
		document.querySelector('html').style.height = 'auto';
	});
});

window.addEventListener('resize', () => {
	if (window.matchMedia('(min-width: 1024px)').matches) {
		bodyScrollLock.clearAllBodyScrollLocks(close);
		bodyScrollLock.clearAllBodyScrollLocks(teamMobile);
		document.querySelectorAll('.js-content').forEach((content) => {
			content.style.height = 'auto';
		});
	} else {
		document.querySelectorAll('.js-content').forEach((content) => {
			content.style.height = window.innerHeight + 'px';
		});
	}
});

function updateHeight() {
	if (!window.matchMedia('(min-width: 1024px)').matches) {
		document.querySelectorAll('.js-content').forEach((content) => {
			if (content.classList.contains('hidden')) {
				document.body.style.height = 'auto';
				document.querySelector('html').style.height = 'auto';
			} else {
				document.body.style.height = '100vh';
				document.querySelector('html').style.height = '100vh';
			}
		});
	} else {
		document.body.style.height = 'auto';
		document.querySelector('html').style.height = 'auto';
	}
}

window.addEventListener('resize', () => {
	updateHeight();
});

window.addEventListener('DOMContentLoaded', () => {
	updateHeight();
});

window.addEventListener('orientationchange', () => {
	updateHeight();
});
