const faqs = [
	{
		question: "How Do I use your online mastering services?",
		answer:
			"Just send us an email! Please include any links to your mix and we’ll make a bespoke plan for you and your music. We’ll help you prep your mix for us so if you’re ever unsure, just ask!",
	},
	{
		question: "What’s included in the mastering service?",
		answer:
			"We’ll start with a mix consultation. Here we’ll check your mix, offer feedback and any changes if needed. From then, we’ll discuss where your music is going to be released and we’ll make a bespoke plan how to get the best possible result for your choice of distribution.",
	},
	{
		question: "Can I pre-book my track to be mastered?",
		answer:
			"Of course! In fact, we’d highly recommend you plan ahead and book your session in advanced. We’ll discuss your release with you when you contact us.",
	},
	{
		question: "Do you offer audio editing services?",
		answer:
			"Yes! We offer editing, mixing and mastering for podcasts, voice recordings, audio books, video audio and film/game audio.",
	},
	{
		question: "Where is your studio?",
		answer:
			"Liverpool’s beating creative heart: The Baltic Triangle! We share a building with some famous neighbours covering all bases including digital labels, digital distribution and other PR services. Handy!",
	},
	{
		question: "Do you use analogue mastering or digital mastering?",
		answer: "We are a ‘hybrid’ studio meaning we use a combination of both",
	},
	{
		question: "What analogue equipment do you use?",
		answer:
			"We use a combination of tubes, transformers and other class-A equipment: HCL Thermos Mastering EQ, HCL Varis Tube compressor, Custom Sontec 250 clone, Elysia Xpressor VCA compressor and Kii Three monitors to name a few! We also use Prism converters for excellent monitoring",
	},
	{
		question: "What kind of plugins do you use?",
		answer:
			"We use a variety of high end digital tools, from Fab Filter to DMG to Weiss… whatever is the best tool for the job. We also use Izotope’s RX tools for our audio editing and even mastering – from de-noising to removing mouth clicks and pops.",
	},
	{
		question: "How do I pay for audio editing and mastering services?",
		answer:
			"Once we’ve checked your mix and given the go ahead, we’ll provide you with an invoice containing full details and payment methods.",
	},
	{
		question: "Do I get an invoice or receipt?",
		answer:
			"We’ll send an invoice over once we have discussed your project for your records.",
	},
	{
		question: "How long does it take to master a song?",
		answer:
			"This depends entirely on the project. A mastering slot will cover mix checks, processing, trying hardware, software, audio editing, sorting out the different sets, final checks and later any revisions or tweaks etc that you may need.",
	},
	{
		question: "How long does it take to edit an audio project?",
		answer:
			"This completely depends on the project length and type. We typically work per hour but we can discuss times and prices to suit your needs and deadlines.",
	},
	{
		question: "How much time should I allow for you to master my track",
		answer:
			"Please allow for a MINIMUM of 1-3 days FOR SINGLES. For albums & EP’s we’ll discuss timeframes with you but please allow plenty of time before your release date. Mastering slots are allocated once all payments have been made.",
	},
	{
		question: "Can I have 1 version for Spotify, 1 version for Youtube etc?",
		answer:
			"Normally 1 ‘master copy’ of each track is provided. However, if you require a specific master for a specific platform, please ask. ",
	},
	{
		question: "What format should I send my music/audio?",
		answer:
			"WAV/AIFF. We recommend you keep the original sample rate of the recording/project and a minimum of 24bit. If you are unsure, please ask us first.",
	},
	{
		question: "What if I’m not happy with my master or audio results?",
		answer:
			"We’re more than confident you’ll be happy with the end result. If you aren’t, then we offer a unlimited revisions to ensure we’re both happy with the end result.",
	},
	{
		question: "How many revisions do you offer?",
		answer:
			"Unlimited revisions are offered. We’re happy to tweak the track until we’re both satisfied with the outcome. This usually covers any adjustments that allow for personal and artistic taste. For any major changes/issues, we’d normally refer you back to your mix engineer before we continue.",
	},
	{
		question: "Do you master MP3’s?",
		answer:
			"On almost all occasions, no. If an MP3 is all you have, then just get in touch and we’ll check it out first.",
	},
	{
		question:
			"I’m not happy with my mix. Can you fix this in the mastering stage?",
		answer:
			"We would recommend you getting your mix to a point where you are 100% happy before you consider mastering. If you need to discuss mixing your project we can put you in touch with one of our trusted mix engineers.",
	},
	{
		question: "Can I request a test master?",
		answer:
			"In some instances, test masters are fine to request. However, due to workload, this may not always be possible. Please contact us first with your audio. Test masters will be uploaded to a private link for you to listen to so quality will vary. Please keep this in mind!",
	},
	{
		question: "Do I really need my music to be mastered?",
		answer:
			"Absolutely! Every commercial release you have heard on the radio, Spotify etc has been mastered.",
	},
	{
		question: "Can you send my files in the post?",
		answer:
			"Yes, providing P&P is covered. We can send them either on a CD or USB stick (chargeable). Please be aware, we are not liable for missing/damaged items.",
	},
];

export default function Example() {
	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto text-white sm:items-center">
			<div className="max-w-5xl mx-auto mt-16">
				<dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
					{faqs.map((faq) => (
						<div key={faq.question}>
							<dt className="font-bold text-white">{faq.question}</dt>
							<dd className="mt-4 text-gray-300">{faq.answer}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
