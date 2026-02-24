import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
	// Background image scale and move
	gsap.utils.toArray('.js-bg-scale-container').forEach((section) => {
		section.addEventListener(
			'mouseover',
			function () {
				var banner = this.querySelectorAll('.js-bg-scale');

				gsap.to(banner, {
					duration: 1,
					scaleX: 1.05,
					scaleY: 1.05,
					onComplete: moveBanner,
				});
			},
			{ once: true }
		);

		function moveBanner() {
			section.addEventListener('mousemove', function (e) {
				var banner = this.querySelectorAll('.js-bg-scale'),
					positionDivision;

				if (this.classList.contains('js-fast')) {
					positionDivision = 25;
				} else {
					positionDivision = 100;
				}

				var x = e.clientX;
				var y = e.clientY;
				var newposX = x / positionDivision;
				var newposY = y / positionDivision;

				gsap.to(banner, {
					duration: 1.25,
					x: newposX,
					y: newposY,
					repeat: 1,
				});
			});
		}
	});

	// hover scale img
	gsap.utils.toArray('.js-hover-scale').forEach((section) => {
		section.addEventListener('mouseover', function () {
			var img = this.querySelectorAll('img');
			gsap.to(img, {
				duration: 0.75,
				scaleX: 1.15,
				scaleY: 1.15,
			});
		});

		section.addEventListener('mouseleave', () => {
			var img = this.querySelectorAll('img');
			gsap.to(img, {
				duration: 0.75,
				scaleX: 1,
				scaleY: 1,
			});
		});
	});

	// Hover full width
	gsap.utils.toArray('.js-hover-full').forEach((section) => {
		var tl = gsap.timeline({ paused: true });

		window.addEventListener('resize load', () => {
			if (window.matchMedia('(min-width: 640px)').matches) {
				section.style.width = '50%';
			}
		});

		tl.to(section, {
			duration: 0.75,
			width: '100%',
			overwrite: true,
		});

		section.addEventListener('mouseenter', () => {
			tl.play();
			gsap.to('.js-bounce', {
				duration: 1,
				x: -50,
				ease: 'bounce.out',
			});
			gsap.to('.js-bounce', { duration: 1, x: 0, delay: 0.75 });
		});
		section.addEventListener('mouseleave', () => {
			tl.reverse();
			gsap.to('.js-bounce', {
				duration: 1,
				x: 50,
				ease: 'bounce.out',
			});
			gsap.to('.js-bounce', { duration: 1, x: 0, delay: 0.75 });
		});
	});

	gsap.utils.toArray('.js-parallax').forEach((panel) => {
		ScrollTrigger.create({
			trigger: panel,
			start: 'top top',
			pin: true,
			pinSpacing: false,
		});
	});

	gsap.utils.toArray('.js-process-item').forEach((panel) => {
		var origin;

		if (panel.classList.contains('left')) {
			origin = 'right top';
		} else {
			origin = 'left top';
		}

		gsap.set(panel, {
			rotationY: 180,
			opacity: 0,
		});
		gsap.to(panel, {
			scrollTrigger: panel,
			transformOrigin: origin,
			rotationY: 0,
			opacity: 1,
			duration: 1,
		});
	});

	gsap.utils.toArray('.js-milestone').forEach((milestone) => {
		var target = { val: 0 },
			section = milestone.closest('.js-counter-container'),
			counter = milestone.querySelector('.js-counter'),
			timeDelay = counter.getAttribute('data-delay') * 3,
			dataNum = counter.getAttribute('data-num');

		gsap.set(milestone, {
			scale: 2,
			opacity: 0,
		});

		gsap.to(milestone, {
			scrollTrigger: section,
			delay: timeDelay,
			scale: 1,
			opacity: 1,
		});

		gsap.to(
			target,
			{
				scrollTrigger: section,
				delay: timeDelay,
				val: dataNum,
				duration: 1,
				onUpdate: function () {
					counter.innerText = target.val.toFixed(0);
				},
			},
			0
		);
	});
});
