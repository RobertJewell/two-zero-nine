import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProductSecondary({
	title,
	description,
	children,
	classes,
}) {
	const [divRef, divInView] = useInView({
		triggerOnce: true,
		rootMargin: "-100px 0px",
	});

	return (
		<div className="container flex flex-col items-start w-full px-4 mx-auto text-white">
			<motion.div
				className={`relative w-full px-8 py-10 mx-auto bg-clip-padding backdrop-filter bg-gray-700 backdrop-blur-md bg-opacity-30 border-4 border-gray-300 max-w-400 min-h-300 sm:px-12 rounded-xl ${classes}`}
				ref={divRef}
				animate={{ y: divInView ? 0 : 40, opacity: divInView ? 1 : 0 }}
				transition={{ duration: 0.4 }}
			>
				<h2 className="text-2xl font-bold ">{title}</h2>
				<p className="mt-6 leading-6">{description}</p>
				{children}
				<Button
					text="Get started"
					type="secondary"
					width="w-36"
					link="/contact"
					margin="mt-8"
				></Button>
			</motion.div>
		</div>
	);
}
