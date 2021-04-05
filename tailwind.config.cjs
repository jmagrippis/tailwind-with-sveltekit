const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {
		container: {
			center: true,
		},
		colors: {
			white: colors.white,
			gray: colors.warmGray,
			rose: colors.rose,
			'svelte-prime': '#ff3e00',
		},
		fontWeight: {
			hairline: 100,
			light: 300,
			normal: 400,
		},
	},
	variants: {
		extend: {inset: ['active']},
	},
	plugins: [],
}
