import ThreeStepPlanPoint from "./ThreeStepPlanPoint";
import Button from "./Button";

export default function ThreeStepPlan() {
	return (
		<div className="container flex flex-col items-start w-full px-4 mx-auto mt-20 text-white sm:items-center">
			<h1 className="text-5xl font-bold sm:text-6xl">How it works</h1>
			<p className="max-w-xl mt-6 leading-6 sm:text-center">
				We work with musicians & engineers all over the world, so even if you’re
				not local to our mastering studio in Liverpool, you can still use our
				online mastering services. We’ve made it really easy for you to get your
				music ready for release:
			</p>
			<ThreeStepPlanPoint number="1" title="Send us your music" classes="mt-12">
				<p className="max-w-sm mt-4 leading-6 text-gray-200">
					To get started, just send us your music! We start the mastering
					process the same way for everyone, whether you’re an independent
					artist or from a major label – we will listen to your audio and make
					sure everything is ready for mastering.
				</p>
			</ThreeStepPlanPoint>
			<ThreeStepPlanPoint
				number="2"
				title="We’ll make a plan for you"
				classes="mt-12"
			>
				<p className="max-w-sm mt-4 leading-6 text-gray-200">
					We will make a bespoke plan for your music. We’ll discuss things like
					how you want it to sound, where & when you’re going to release it, and
					if you have any reference tracks or test-masters you’d like us to use.
				</p>
			</ThreeStepPlanPoint>
			<ThreeStepPlanPoint
				number="3"
				title="Approval, check & send"
				classes="mt-12"
			>
				<p className="max-w-sm mt-4 leading-6 text-gray-200">
					We’ll give you the chance to check your master online first, and
					discuss any final options with you. We also offer unlimited revisions
					so we can make sure the master is perfect for you, as well as for your
					fans.
				</p>
			</ThreeStepPlanPoint>
			<Button
				text="Get started"
				type="primary"
				width="w-44"
				link="/contact"
				margin="mt-12"
			></Button>
		</div>
	);
}
