import { motion } from "framer-motion";

const top = {
	open: { y: 10, rotate: -45 },
	closed: { y: 0 },
};
const middle = {
	open: { opacity: 0 },
	closed: { opacity: 1 },
};
const bottom = {
	open: { y: -10, rotate: 45 },
	closed: { y: 0 },
};

export default function MobileDropdownButton({ open }) {
	return (
		<div className="block p-4 m-4 bg-white rounded-full outline-none  focus:outline-none bg-opacity-20 backdrop-filter backdrop-blur-sm sm:hidden">
			<motion.div
				animate={open ? "open" : "closed"}
				variants={top}
				className="w-6 h-1 mb-1.5 bg-accent-muted rounded-full "
			></motion.div>
			<motion.div
				animate={open ? "open" : "closed"}
				transition={{ duration: 0.1 }}
				variants={middle}
				className="w-6 h-1 mb-1.5 bg-accent-muted rounded-full "
			></motion.div>
			<motion.div
				animate={open ? "open" : "closed"}
				variants={bottom}
				className="w-6 h-1 rounded-full bg-accent-muted "
			></motion.div>
		</div>
	);
}
