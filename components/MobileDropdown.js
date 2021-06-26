import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import MobileDropdownButton from "./MobileDropdownButton";

const fadeIn = {
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			when: "beforeChildren",
			staggerChildren: 0.06,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			when: "afterChildren",
			staggerChildren: 0.06,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
			delay: 0.2,
			staggerChildren: 0.04,
			staggerDirection: -1,
		},
	},
};

const slideInLeft = {
	visible: { x: 0, opacity: 1 },
	hidden: { x: 40, opacity: 0 },
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

export default function MyDropdown() {
	return (
		<Menu className="outline-none">
			{({ open }) => (
				<>
					<Menu.Button className="relative z-10 text-right text-white outline-none">
						<MobileDropdownButton open={open}></MobileDropdownButton>
					</Menu.Button>
					<AnimatePresence>
						{open && (
							<motion.div
								className="absolute top-0 left-0 flex items-center justify-end w-full h-screen bg-dark bg-opacity-40 backdrop-filter backdrop-blur-lg"
								variants={fadeIn}
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								<Menu.Items
									as={motion.div}
									variants={fadeIn}
									initial="hidden"
									animate="visible"
									exit="exit"
									static
									className="top-0 flex flex-col items-end justify-center w-1/2 text-xl text-white rounded-lg outline-none -right-0"
								>
									<Menu.Item
										as={motion.div}
										className="flex w-full"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 text-right transition-colors hover:text-accent-main`}
												>
													Services
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 text-right transition-colors hover:text-accent-main`}
												>
													About
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 text-right transition-colors hover:text-accent-main`}
												>
													Portfolio
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 text-right transition-colors hover:text-accent-main`}
												>
													FAQ
												</a>
											</Link>
										)}
									</Menu.Item>
								</Menu.Items>
							</motion.div>
						)}
					</AnimatePresence>
				</>
			)}
		</Menu>
	);
}
