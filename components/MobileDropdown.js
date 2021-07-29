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
		<Menu className="outline-none ">
			{({ open }) => (
				<>
					<Menu.Button className="fixed right-0 z-40 text-right text-white">
						<MobileDropdownButton open={open}></MobileDropdownButton>
					</Menu.Button>
					<AnimatePresence>
						{open && (
							<motion.div
								className="fixed top-0 left-0 z-20 flex items-start justify-end w-full h-screen bg-dark bg-opacity-60 backdrop-filter backdrop-blur-lg"
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
									className="fixed flex flex-col items-end justify-center w-1/2 mt-20 text-xl text-white rounded-lg outline-none -right-0"
								>
									<Menu.Item
										as={motion.div}
										className="flex w-full outline-none"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 py-6 text-right transition-colors hover:text-accent-main`}
												>
													Home
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full outline-none"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/services">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 py-6 text-right transition-colors hover:text-accent-main`}
												>
													Services
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full outline-none"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/about">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 py-6 text-right transition-colors hover:text-accent-main`}
												>
													About
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full outline-none"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 py-6 text-right transition-colors hover:text-accent-main`}
												>
													Portfolio
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full outline-none"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/faq">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 py-6 text-right transition-colors hover:text-accent-main`}
												>
													FAQ
												</a>
											</Link>
										)}
									</Menu.Item>
									<Menu.Item
										as={motion.div}
										className="flex w-full outline-none"
										variants={slideInLeft}
									>
										{({ active }) => (
											<Link href="/contact">
												<a
													className={`${
														active && "text-accent-main"
													} w-full p-8 py-6 text-right transition-colors hover:text-accent-main`}
												>
													Contact
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
