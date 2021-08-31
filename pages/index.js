import Landing from "../components/Landing";
import BrandLogos from "../components/BrandLogos";
import AboutSection from "../components/AboutSection";
import ThreeStepPlan from "../components/ThreeStepPlan";
import Testamonial from "../components/Testamonial";
import Vinyl from "../components/decoration/Vinyl";
import GradientBG from "../components/decoration/GradientBG";
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

const fadeInUp = {
	initial: { y: 60, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
};

const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.8 },
};

export default function Home() {
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
					scale="scale-150"
					rotation="rotate-90 sm:-rotate-90"
					translationX="translate-x-2/4  sm:-translate-x-2/4  "
					translationY="sm:-translate-y-2/4"
				></Vinyl>

				<Landing></Landing>

				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-80"
					translateY="-translate-y-40"
				></GradientBG>

				<BrandLogos></BrandLogos>

				<AboutSection></AboutSection>

				<GradientBG
					color="purple"
					height="h-800"
					flipped={false}
					opacity="opacity-60"
					translateY="-translate-y-60"
				></GradientBG>

				<Vinyl
					width="w-800"
					scale="sm:scale-100 md:scale-125"
					rotation="rotate-90"
					translationX="translate-x-2/4 right-0"
					other="hidden sm:block opacity-50 "
				></Vinyl>

				<ThreeStepPlan></ThreeStepPlan>

				<Testamonial></Testamonial>
			</motion.div>
		</motion.div>
	);
}
