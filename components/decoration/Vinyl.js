import VinylSVG from "../../public/assets/images/Vinyl.svg";

export default function Vinyl({
	scale,
	rotation,
	width,
	translationX,
	translationY,
	stroke,
	other,
}) {
	const baseClasses = "absolute transform -z-10 ";
	return (
		<VinylSVG
			className={`${baseClasses} ${scale} ${rotation} ${width} ${translationX} ${translationY} ${stroke} ${other}`}
		></VinylSVG>
	);
}
