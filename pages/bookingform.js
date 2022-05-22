import Head from "next/head";
import PageTitle from "../components/PageTitle";
import GradientBG from "../components/decoration/GradientBG";
import LongContactForm from "../components/LongContactForm";
import Vinyl from "../components/decoration/Vinyl";
import Map from "../components/Map";
import "mapbox-gl/dist/mapbox-gl.css";
import { AnimatePresence, motion } from "framer-motion";

const containerFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

export default function contact() {
	return (
		<motion.div exit={{ opacity: 0 }} className="pt-20 overflow-hidden">
			<motion.div
				variants={containerFade}
				initial="initial"
				animate="animate"
				className="relative"
			>
				<Vinyl
					width="w-600 md:w-800"
					scale="scale-150 sm:scale-100"
					rotation="rotate-90"
					translationX="translate-x-3/4 sm:translate-x-2/4  right-0"
					translationY="sm:-translate-y-1/4 translate-y-1/4"
					other=""
				></Vinyl>

				<PageTitle title="Booking Form" classes="max-w-5xl px-4"></PageTitle>

				<LongContactForm></LongContactForm>
			</motion.div>
		</motion.div>
	);
}
