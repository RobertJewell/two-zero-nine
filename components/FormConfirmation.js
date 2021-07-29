import { motion, AnimatePresence } from "framer-motion";

export default function FormConfirmation({ isVisible }) {
	return (
		<AnimatePresence>
			{isVisible === "confirmation" && (
				<motion.div
					className="absolute flex flex-col items-center justify-center w-full h-full mx-8 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					exit={{ opacity: 0 }}
				>
					<p className="mb-8 text-xl font-bold">Thanks for getting in touch!</p>
					<p className="">Graeme will get back to you soon</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
