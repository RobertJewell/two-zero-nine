module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: [
				"DM Sans",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
		extend: {
			colors: {
				accent: {
					main: "#2AEDDD",
					muted: "#81E6D9",
					shade: "#2C7A7B",
				},
			},
			zIndex: {
				"-10": "-10",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
