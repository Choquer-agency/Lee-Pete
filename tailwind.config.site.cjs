//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
	presets: [],
	theme: {
		// Here we define the default colors available. If you want to include
		// all default Tailwind colors you should extend the colors instead.
		colors: {
			black: '#000',
			white: '#fff',
			// Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
			neutral: {
				DEFAULT: '#c4beb6',
				light: '#eee',
				secondary: '#767676',
			},
			// Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
			primary: {
				DEFAULT: '#004d71',
				light: '#eef6f8',
				secondary: '#0082ad',
				dark: '#002739',
			},
			beige: {
				DEFAULT: '#e6e4e1',
			},
			orange: {
				DEFAULT: '#eba900',
			},
		},
		extend: {
			// Set default transition durations and easing when using the transition utilities.
			transitionDuration: {
				DEFAULT: '300ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
		},
		// Remove the font families you don't want to use.
		fontFamily: {
			mono: [
				// Use a custom mono font for this site by changing 'Anonymous' to the
				// font name you want and uncommenting the following line.
				// 'Anonymous',
				// ...defaultTheme.fontFamily.mono,
			],
			sans: [
				// Use a custom sans serif font for this site by changing 'Gaultier' to the
				// font name you want and uncommenting the following line.
				'Muli',
				// ...defaultTheme.fontFamily.sans,
			],
			serif: [
				// Use a custom serif font for this site by changing 'Lavigne' to the
				// font name you want and uncommenting the following line.
				// 'Lavigne',
				...defaultTheme.fontFamily.serif,
			],
		},
		extend: {
			fontSize: {
				xxs: '0.643rem', //9px
				'3xl': '1.7rem',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				// Default color transition on links unless user prefers reduced motion.
				'@media (prefers-reduced-motion: no-preference)': {
					a: {
						textDecoration: 'underline',
						transition: 'color .3s ease-in-out',
						'&:hover': {
							color: theme('colors.primary.secondary'),
							textDecoration: 'none',
						},
					},
				},
				html: {
					color: theme('colors.primary.DEFAULT'),
					//--------------------------------------------------------------------------
					// Set sans, serif or mono stack with optional custom font as default.
					//--------------------------------------------------------------------------
					// fontFamily: theme('fontFamily.mono'),
					fontFamily: theme('fontFamily.sans'),
					// fontFamily: theme('fontFamily.serif'),
				},
				'h1, h2, h3, h4, h5, h6': {
					fontWeight: theme('fontWeight.semibold'),
					letterSpacing: '0.0625rem', // 1px
					marginBottom: theme('spacing.4'), // 16px
				},
				h1: {
					fontSize: theme('fontSize.3xl'), // 24px
					lineHeight: 42 / 32,
				},
				h2: {
					fontSize: theme('fontSize.2xl'), // 21px
					lineHeight: 45 / 24,
				},
				h3: {
					fontSize: theme('fontSize.lg'), // 16px
					lineHeight: 48 / 28,
				},
				h4: {
					fontSize: theme('fontSize.base'), // 14px
					lineHeight: 45 / 26,
				},
				h5: {
					fontSize: theme('fontSize.sm'), // 11px
					lineHeight: 45 / 26,
				},
				h6: {
					fontSize: theme('fontSize.xs'), // 9px
					lineHeight: 45 / 26,
				},
				// Others
				hr: {
					marginBottom: theme('spacing.4'),
				},
				'ul, ol': {
					marginLeft: theme('spacing.4'),
					marginBottom: theme('spacing.4'),
				},
				ul: {
					listStyle: 'disc',
				},
				ol: {
					listStyle: 'decimal',
				},
				[`@media (min-width: ${theme('screens.md')})`]: {
					'h1, h2, h3, h4, h5, h6, p': {
						marginBottom: theme('spacing.4'), // 17px
					},
				},
			});
		}),

		// Custom components for this particular site.
		plugin(function ({ addComponents, theme }) {
			const components = {
				'.button': {
					backgroundColor: theme('colors.primary.DEFAULT'),
					color: theme('colors.white'),
					textTransform: 'uppercase',
					textDecoration: 'none',
					padding: '0.625rem 1.875rem',

					'&:hover': {
						backgroundColor: theme('colors.neutral.DEFAULT'),
						color: theme('colors.white'),
					},
				},

				'.button.button--white': {
					backgroundColor: 'transparent',
					borderColor: theme('colors.white'),
					borderWidth: '2px',
					display: 'block',
					padding: '1.25rem',
					textAlign: 'center',
					fontSize: theme('fontSize.xl'),
					fontWeight: theme('fontWeight.semibold'),

					'&:hover': {
						backgroundColor: theme('colors.primary.dark'),
					},
				},
				'.button.button--orange': {
					backgroundColor: 'transparent',
					color: theme('colors.orange.DEFAULT'),
					borderColor: theme('colors.orange.DEFAULT'),
					borderWidth: '2px',
					fontWeight: theme('fontWeight.semibold'),
					padding: '10px 25px',

					'&:hover': {
						backgroundColor: theme('colors.orange.DEFAULT'),
						color: theme('colors.primary.DEFAULT'),
					},
				},
				'.pagination-button': {
					backgroundColor: '#777',
					border: '1px solid #b2b2b2',
					color: theme('colors.white'),
					textDecoration: 'none',
					textTransform: 'capitalize',
					fontSize: theme('fontSize.xl'),
					padding: '0.357rem 0.714rem',

					'&:hover, &:active, &:focus, &.active': {
						backgroundColor: theme('colors.white'),
						color: theme('colors.black'),
						borderColor: theme('colors.primary.secondary'),
					},
				},
			};
			addComponents(components);
		}),

		// Custom utilities for this particular site.
		plugin(function ({ addUtilities, theme, variants }) {
			const newUtilities = {};
			addUtilities(newUtilities);
		}),
	],
};
