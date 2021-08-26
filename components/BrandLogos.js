import Neve from "../public/assets/images/logos/Neve.svg";
import Sky from "../public/assets/images/logos/Sky.svg";
import BBC from "../public/assets/images/logos/bbc1.svg";
import Kerrang from "../public/assets/images/logos/kerrang.svg";
import RadioX from "../public/assets/images/logos/radioX.svg";
// import Showcase from "../public/assets/images/logos/Showcase.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BrandLogos() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		rootMargin: "100px 0px",
	});
	return (
		<motion.div
			className="flex flex-col items-center justify-center w-full mt-12 sm:flex-row"
			ref={ref}
			animate={{ opacity: inView ? 1 : 0 }}
			transition={{ delay: 1.2, duration: 1 }}
		>
			<div className="flex mt-12">
				<Neve className="w-32 h-16 mx-4"></Neve>
				<RadioX className="relative w-32 h-16 mx-4 top-1"></RadioX>
				{/* <Showcase className="w-32 h-16 mx-4"></Showcase> */}
			</div>
			<div className="flex mt-12">
				<Sky className="hidden w-32 h-16 mx-4 lg:block"></Sky>
				<Kerrang className="w-32 h-16 mx-4"></Kerrang>
				<BBC className="w-32 h-16 py-1 mx-4"></BBC>
			</div>
		</motion.div>
	);
}
