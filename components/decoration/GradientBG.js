import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const containerFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export default function GradientBG({
	color,
	height,
	flipped,
	opacity,
	translateY,
	other,
}) {
	const classes = "absolute w-full transform -z-10";
	const coloring = "middleGradient--" + color;
	return (
		<motion.div
			variants={containerFade}
			initial="initial"
			animate="animate"
			className={` ${classes} ${
				flipped && "right-0 rotate-180"
			} ${coloring} ${height} ${opacity} ${translateY} ${other}`}
		></motion.div>
	);
}
