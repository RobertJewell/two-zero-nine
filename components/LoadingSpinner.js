import { motion, AnimatePresence } from "framer-motion";

export default function LoadingSpinner({ isVisible }) {
	return (
		<AnimatePresence>
			{isVisible === "loading" && (
				<motion.div
					className="absolute flex items-center justify-center w-full h-full"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					exit={{ opacity: 0 }}
				>
					<div className="w-8 h-8 border-2 rounded-full border-accent-main animate-ping"></div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
