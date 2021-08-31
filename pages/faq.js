import FaqAccordion from "../components/FaqAccordion";
import PageTitle from "../components/PageTitle";
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

export default function faq() {
	return (
		<motion.div exit={{ opacity: 0 }} className="pt-20 overflow-hidden">
			<motion.div
				variants={containerFade}
				initial="initial"
				animate="animate"
				className="relative"
			>
				<PageTitle
					title="Frequently Asked Questions"
					classes="max-w-5xl px-4"
				></PageTitle>

				<FaqAccordion></FaqAccordion>
			</motion.div>
		</motion.div>
	);
}
