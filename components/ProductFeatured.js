import Button from "./Button";
import Vinyl from "../components/decoration/Vinyl";
import { motion } from "framer-motion";
import {
	fadeIn,
	fadeInDelayed,
	containerFadeInUp,
	fadeInUp,
} from "./animations";

export default function ProductFeatured({ title, description }) {
	return (
		<div className="container flex flex-col items-start w-full px-4 mx-auto mt-20 text-white">
			<motion.div
				variants={containerFadeInUp}
				initial="initial"
				animate="animate"
				className="relative w-full max-w-4xl px-8 py-10 mx-auto overflow-hidden border-4 sm:px-12 rounded-xl border-accent-muted"
			>
				<Vinyl
					width="w-full"
					scale="sm:scale-100 scale-75"
					translationX="translate-x-2/4 sm:-translate-y-2/4 sm:top-0 translate-y-2/4 bottom-0 right-0"
					other="text-accent-muted stroke-current stroke-12 sm:stroke-6"
					animation={fadeInDelayed}
				></Vinyl>
				<div className="sm:w-1/2">
					<motion.h2
						className="w-1/2 text-4xl font-bold sm:text-5xl"
						variants={fadeInUp}
					>
						{title}
					</motion.h2>
					<motion.p className="w-3/4 mt-6 leading-6" variants={fadeInUp}>
						{description}
					</motion.p>
				</div>
				<motion.div className="flex flex-col sm:flex-row">
					<Button
						text="Get started"
						type="primary"
						width="w-44"
						link="/contact"
						margin="mt-8"
						animation={fadeInUp}
					></Button>
					<Button
						text="Apple mastering"
						type="secondary"
						width="w-44"
						link="#apple_digital-masters"
						margin="mt-4 sm:ml-8 sm:mt-8"
						animation={fadeInUp}
					></Button>
				</motion.div>
			</motion.div>
		</div>
	);
}
