import Button from "./Button";
import { motion } from "framer-motion";

export default function Landing() {
	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto text-white min-h-96 h-screen-60 sm:min-h-400 sm:h-screen-60 max-h-700 sm:items-center sm:px-0 ">
			<motion.h1
				className="pt-12 text-6xl font-bold text-white sm:text-center sm:text-8xl"
				initial={{
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{ delay: 0.4, duration: 0.4 }}
			>
				Your <br className="sm:hidden" /> sound:
				<br />
				<motion.span
					className="text-accent-main"
					initial={{
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{ delay: 0.8, duration: 0.4 }}
				>
					Perfected
				</motion.span>
			</motion.h1>
			<motion.h3
				className="pt-4 sm:text-center"
				initial={{
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{ delay: 1.4, duration: 0.4 }}
			>
				Audio mastering in the heart of Liverpool.
			</motion.h3>
			<motion.div
				className="flex items-center pt-16 sm:justify-center"
				initial={{
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{ delay: 1.4, duration: 0.4 }}
			>
				<Button
					text="Get started"
					type="primary"
					width="w-40"
					margin="sm:mx-4"
					link="/contact"
					extras=""
				></Button>
				<Button
					text="Services"
					type="secondary"
					width="w-40"
					margin="sm:mx-4"
					link="/services"
					extras="hidden sm:flex"
				></Button>
			</motion.div>
		</div>
	);
}
