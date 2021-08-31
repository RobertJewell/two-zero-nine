import Image from "next/image";
import GradientBG from "../components/decoration/GradientBG";
import PageTitle from "../components/PageTitle";
import graemeWithDesk from "../public/assets/images/graeme_cutout.webp";
import { AnimatePresence, motion } from "framer-motion";

const containerFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

export default function services() {
	return (
		<motion.div exit={{ opacity: 0 }} className="pt-20 overflow-hidden">
			<motion.div
				variants={containerFade}
				initial="initial"
				animate="animate"
				className="relative"
			>
				<PageTitle
					title="Two Zero Nine Mastering"
					classes="max-w-4xl px-4"
				></PageTitle>

				<div className="container relative flex flex-col justify-center w-full px-4 mx-auto mt-16 text-white lg:max-w-4xl ">
					<div className="z-10 leading-6 text-white">
						<div className="flex justify-center mb-8 -mx-20 -mt-24 sm:-mt-16 sm:-mr-4 sm:w-3/5 sm:float-right ">
							<Image
								className="-z-20"
								src={graemeWithDesk}
								width="600"
								height="600"
								placeholder="blur"
							></Image>
						</div>
						<p className="z-20">
							Two Zero Nine Mastering is a dedicated mastering studio based in
							Liverpool’s Baltic Triangle alongside leading digital labels and
							distributors, recording studios and other multimedia creators, run
							by Mastering Engineer Graeme Lynch.
						</p>
						<p className="z-20 pt-6">
							The studio offers a neutral listening environment, powered by Kii
							Three monitoring. The space has been redefined and treated to
							ensure that every decision made is an essential move to help craft
							and create the perfect master for you.
						</p>
						<p className="z-20 pt-6">
							Graeme has been working with labels, management teams and
							independent musicians since 2017, covering all genres including
							Rock, Metal, Pop, Hip-hop, Jazz, Blues, Orchestral/Classical,
							Soundtrack work for Film & TV and everything in between.
						</p>
						<p className="z-20 pt-6">
							Artists come from around the world to work with Graeme at his
							central Liverpool based mastering studio via the studio's online
							mastering services.
						</p>
						<p className="z-20 pt-6">
							"People ask me why I chose a career in mastering. For me, it’s
							simple. I love music. You can’t do this job otherwise. You need to
							have a great understanding of music, and musicians. I used to be a
							musician, so I understand the importance of getting this right!
							The mastering process is so important. Once I’ve finished with a
							track, it usually goes straight online or to the distribution
							plant. There is no room for error, and I love the challenge of
							making everything sound as good as it possibly can be. It’s always
							such an honour to be serving musicians and helping them deliver
							their vision, art and creations to their fans. I’m looking forward
							to helping you finish your next project!"
						</p>
						<p className="pt-6">
							As well as working as a mastering engineer, Graeme also finds time
							to work in other areas of the professional audio world: from
							composing music to working at AMS Neve. Graeme helped to beta test
							the Genesys Black controller plugin as well as offer product
							knowledge and online media support which you can find on their
							youtube channel:
						</p>
					</div>
					<div className="lg:px-16">
						<div className="relative w-full mx-auto mt-12 lg:px-16 pb-16/9">
							<iframe
								className="absolute top-0 left-0 w-full h-full"
								src="https://www.youtube-nocookie.com/embed/Wywxc_1aPPc"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
