import React from "react";

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
		<div
			className={` ${classes} ${
				flipped && "right-0 rotate-180"
			} ${coloring} ${height} ${opacity} ${translateY} ${other}`}
		></div>
	);
}
