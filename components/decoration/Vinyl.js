import VinylSVG from "../../public/assets/images/Vinyl.svg";
import { motion } from "framer-motion";

export default function Vinyl({
	scale,
	rotation,
	width,
	translationX,
	translationY,
	stroke,
	other,
	animation,
}) {
	const baseClasses = "absolute transform -z-10 ";
	return (
		<motion.div variants={animation} initial="initial" animate="animate">
			<VinylSVG
				className={`${baseClasses} ${scale} ${rotation} ${width} ${translationX} ${translationY} ${stroke} ${other}`}
			></VinylSVG>
		</motion.div>
	);
}
