import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useFormspark } from "@formspark/use-formspark";
import Botpoison from "@botpoison/browser";
import LoadingSpinner from "./LoadingSpinner";
import FormConfirmation from "./FormConfirmation";

// Framer motion animation variants
const fadeInUp = {
	initial: { y: 60, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
};

export default function ContactForm() {
	const [formVisibility, setFormVisibility] = useState("visible");

	// form validation rules
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string().required("Email is required").email("Email is invalid"),
		address: Yup.string().required("This is required for the invoice"),
		message: Yup.string().required("Message is required"),
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	const FORMSPARK_FORM_ID = "ouwYE24C";

	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});

	const botpoison = new Botpoison({
		publicKey: "pk_3aa5d554-b0f3-4b43-ad98-31f1b2b8ee86",
	});

	// get functions to build form with useForm() hook
	const { register, handleSubmit, formState, reset } = useForm(formOptions);
	const { errors } = formState;

	async function onSubmit(data) {
		//update state to loading
		setFormVisibility("loading");

		//run botpoison check
		const { solution } = await botpoison.challenge();

		//Replace new line characters with HTML for email
		const messageWithBreaks = data.message.replace(/\n/g, "<br>");

		await submit({ ...data, message: messageWithBreaks, _botpoison: solution });

		//update state to confirmed
		let makeConfirmationVisible = setTimeout(() => {
			setFormVisibility("confirmation");
		}, 600);

		//reset form
		reset();

		//update state to visible after 6 seconds removing the confirmation message after 5 seconds
		let makeNothingVisible = setTimeout(() => {
			setFormVisibility("none");
		}, 5000);
		let makeFormVisible = setTimeout(() => {
			setFormVisibility("visible");
		}, 6500);
	}

	return (
		<div className="container px-4 pb-12 mx-auto mt-20 text-white lg:max-w-5xl sm:pb-8">
			<div className="relative flex flex-col bg-white md:flex-row rounded-2xl backdrop-blur backdrop-filter bg-opacity-10">
				<div className="relative w-full max-w-4xl mx-auto md:flex-1">
					<LoadingSpinner isVisible={formVisibility}></LoadingSpinner>
					<FormConfirmation isVisible={formVisibility}></FormConfirmation>

					<form
						className={
							`w-full max-w-4xl px-8 py-16 mx-auto transition-opacity delay-200 duration-500 md:flex-1` +
							(formVisibility !== "visible" && "pointer-events-none opacity-0")
						}
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="flex flex-col md:flex-row">
							<div className="flex flex-col md:mr-6 flex-1">
								<h2 className="text-3xl mb-4 font-bold">About me</h2>
								<p className="text-gray-300 mb-6">
									Just the basics, so I can contact you back!
								</p>
							</div>
							<div className="flex flex-col mb-4 flex-[2_2_0%]">
								<motion.div
									className="flex flex1 flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3 md:mb-0">
										<label className="block mb-2 text-gray-300 " htmlFor="name">
											Full Name*
										</label>
										<input
											className={`block w-full px-4 py-3 mb-2 leading-tight text-gray-800 bg-white  appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-accent-main  ${
												errors.name ? "is-invalid" : ""
											}`}
											id="name"
											type="name"
											name="name"
											placeholder=""
											{...register("name")}
										/>
										<div className="text-red-600 ">{errors.name?.message}</div>
									</div>
								</motion.div>
								<motion.div
									className="flex flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3 md:mb-0">
										<label className="block mb-2 text-gray-300 " htmlFor="name">
											Artist Name
										</label>
										<input
											className={`block w-full px-4 py-3 mb-2 leading-tight text-gray-800 bg-white  appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-accent-main  ${
												errors.name ? "is-invalid" : ""
											}`}
											id="artistname"
											type="text"
											name="artistname"
											placeholder=""
											{...register("artistname")}
										/>
										<div className="text-red-600 ">
											{errors.artistname?.message}
										</div>
									</div>
								</motion.div>
								<motion.div
									className="flex flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3">
										<label
											className="block mb-2 text-gray-300 "
											htmlFor="email"
										>
											E-mail*
										</label>
										<input
											className={`block w-full px-4 py-3 mb-2 leading-tight text-gray-800 bg-white appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-accent-main ${
												errors.email ? "is-invalid" : ""
											}`}
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											{...register("email")}
										/>
										<div className="text-red-600">{errors.email?.message}</div>
									</div>
								</motion.div>
								<motion.div
									className="flex flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3">
										<label
											className="block mb-2 text-gray-300 "
											htmlFor="grid-password"
										>
											Home or Business Address*
										</label>
										<textarea
											className={`block w-full h-24 px-4 py-2 mb-2 leading-tight text-gray-800 bg-white  border-none appearance-none resize-none rounded-xl no-resize focus:outline-none focus:bg-white focus:border-accent-main focus:border-4  ${
												errors.message ? "is-invalid" : ""
											}`}
											id="address"
											name="address"
											{...register("address")}
										></textarea>
										<div className="text-red-600">
											{errors.address?.message}
										</div>
									</div>
								</motion.div>
							</div>
						</div>
						<div className="w-full bg-gray-600 h-0.5 mb-10" />
						<div className="flex flex-col md:flex-row">
							<div className="flex flex-col md:mr-6 flex-1">
								<h2 className="text-3xl mb-4 font-bold">About the music</h2>
								<p className="text-gray-300 mb-6">
									The important bits! The more info you can give me, the quicker
									we can get started.
								</p>
							</div>
							<div className="flex flex-col flex-[2_2_0%]">
								<motion.div
									className="flex flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3">
										<label
											className="block mb-2 text-gray-300 "
											htmlFor="grid-password"
										>
											How many tracks?
										</label>
										<input
											className={`block w-24 px-4 py-3 mb-2 leading-tight text-gray-800 bg-white appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-accent-main ${
												errors.email ? "is-invalid" : ""
											}`}
											type="number"
											name="trackcount"
											id="trackcount"
											min="1"
											max="24"
											{...register("trackcount")}
										/>
										<div className="text-red-600">
											{errors.trackcount?.message}
										</div>
									</div>
								</motion.div>
								<motion.div
									className="flex flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3">
										<label
											className="block mb-2 text-gray-300 "
											htmlFor="grid-password"
										>
											Do you have a deadline?
										</label>
										<input
											className={`block w-full max-w-200 px-4 py-3 mb-2 leading-tight text-gray-800 bg-white appearance-none rounded-xl focus:outline-none focus:bg-white focus:border-accent-main ${
												errors.email ? "is-invalid" : ""
											}`}
											type="date"
											name="trackcount"
											id="trackcount"
											{...register("trackcount")}
										/>
										<div className="text-red-600">
											{errors.trackcount?.message}
										</div>
									</div>
								</motion.div>
								<motion.div
									className="flex flex-wrap mb-6 -mx-3"
									// variants={fadeInUp}
								>
									<div className="w-full px-3">
										<label
											className="block mb-2 text-gray-300 "
											htmlFor="grid-password"
										>
											Message (preferences, reference tracks, etc)
										</label>
										<textarea
											className={`block w-full h-48 px-4 py-2 mb-2 leading-tight text-gray-800 bg-white  border-none appearance-none resize-none rounded-xl no-resize focus:outline-none focus:bg-white focus:border-accent-main focus:border-4  ${
												errors.message ? "is-invalid" : ""
											}`}
											id="message"
											name="message"
											{...register("message")}
										></textarea>
										<div className="text-red-600">
											{errors.message?.message}
										</div>
									</div>
								</motion.div>
							</div>
						</div>
						<input
							type="checkbox"
							name="_honeypot"
							style={{ display: "none" }}
							tabIndex="-1"
							autoComplete="off"
						/>
						<motion.div
							className="flex flex-col justify-between sm:flex-row"
							// variants={fadeInUp}
						>
							<a
								href="https://bit.ly/3wNkrEP"
								target="_blank"
								className="w-full p-2 text-center align-middle transition-colors border-2 border-gray-200 rounded-lg sm:w-48 hover:bg-gray-800"
							>
								Upload your audio
							</a>
							<button
								aria-label="Submit form"
								className="w-full p-2 mt-8 text-center text-gray-900 align-middle transition-colors bg-white border-2 border-white rounded-lg sm:mt-0 sm:w-36 hover:bg-gray-200 hover:border-gray-200"
								type="submit"
							>
								Send
							</button>
						</motion.div>
					</form>
				</div>
			</div>
		</div>
	);
}
