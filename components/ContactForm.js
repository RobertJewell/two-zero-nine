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
				<div className="flex flex-col items-center justify-start w-full p-8 bg-white md:pt-24 rounded-2xl flex-2 md:w-300 lg:w-80">
					<h3 className="mb-6 text-2xl font-bold text-dark ">
						Let's discuss your project:
					</h3>
					<p className="leading-6 text-gray-700">
						Our studio is open from 10am until 6pm. We aim to respond to all
						enquiries within 24 hours. <br /> If you would like a call back,
						either by telephone (UK) or by video call, please leave your details
						when sending the message over.
					</p>
				</div>
				<div className="relative w-full max-w-lg mx-auto md:flex-1">
					<LoadingSpinner isVisible={formVisibility}></LoadingSpinner>
					<FormConfirmation isVisible={formVisibility}></FormConfirmation>

					<form
						className={
							`w-full max-w-lg px-8 py-16 sm:pb-10 mx-auto transition-opacity delay-200 duration-500 md:flex-1` +
							(formVisibility !== "visible" && "pointer-events-none opacity-0")
						}
						onSubmit={handleSubmit(onSubmit)}
					>
						<motion.div
							className="flex flex-wrap mb-6 -mx-3"
							// variants={fadeInUp}
						>
							<div className="w-full px-3 md:mb-0">
								<label className="block mb-2 text-gray-300 " htmlFor="name">
									Name
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
							<div className="w-full px-3">
								<label className="block mb-2 text-gray-300 " htmlFor="email">
									E-mail
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
									Message
								</label>
								<textarea
									className={`block w-full h-48 px-4 py-2 mb-2 leading-tight text-gray-800 bg-white  border-none appearance-none resize-none rounded-xl no-resize focus:outline-none focus:bg-white focus:border-accent-main focus:border-4  ${
										errors.message ? "is-invalid" : ""
									}`}
									id="message"
									name="message"
									{...register("message")}
								></textarea>
								<div className="text-red-600">{errors.message?.message}</div>
							</div>
						</motion.div>
						<input
							type="checkbox"
							name="_honeypot"
							style={{ display: "none" }}
							tabIndex="-1"
							autoComplete="off"
						/>
						<motion.div
							className="flex flex-col justify-end sm:flex-row"
							// variants={fadeInUp}
						>
							{/* <a
								href="https://bit.ly/3wNkrEP"
								target="_blank"
								className="w-full p-2 text-center align-middle transition-colors border-2 border-gray-200 rounded-lg sm:w-48 hover:bg-gray-800"
							>
								Upload your audio
							</a> */}
							<button
								aria-label="Submit form"
								className="w-full p-2 mt-8 text-center text-gray-900 align-middle transition-colors bg-white border-2 border-white rounded-lg sm:mt-0 sm:w-48 hover:bg-gray-200 hover:border-gray-200"
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
