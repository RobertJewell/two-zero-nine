const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};

const fadeInDelayed = {
	initial: {
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.6,
			duration: 1,
		},
	},
};

const fadeInUp = {
	initial: {
		opacity: 0,
		y: 40,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
};

const containerFadeInUp = {
	initial: {
		opacity: 0,
		y: 40,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
};

export { fadeIn, fadeInDelayed, fadeInUp, containerFadeInUp };
