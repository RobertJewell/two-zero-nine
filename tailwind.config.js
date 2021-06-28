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
				dark: "#0a0e15",
			},
			// screens: {
			// 	xsm: "360px",
			// },
			zIndex: {
				"-10": "-10",
			},
			strokeWidth: {
				3: "3",
				4: "4",
				5: "5",
				6: "6",
				7: "7",
				8: "8",
			},
			width: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
				800: "800px",
			},
			maxWidth: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
				800: "800px",
			},
			height: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
				800: "800px",
				"screen-50": "50vh",
				"screen-60": "60vh",
				"screen-70": "70vh",
				"screen-80": "80vh",
			},
			minHeight: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
				800: "800px",
				"screen-50": "50vh",
				"screen-60": "60vh",
				"screen-70": "70vh",
				"screen-80": "80vh",
			},
			maxHeight: {
				200: "200px",
				300: "300px",
				400: "400px",
				500: "500px",
				600: "600px",
				700: "700px",
				800: "800px",
				"screen-50": "50vh",
				"screen-60": "60vh",
				"screen-70": "70vh",
				"screen-80": "80vh",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
