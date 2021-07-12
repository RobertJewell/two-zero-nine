import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GradientBG from "../components/decoration/GradientBG";
import PageTitle from "../components/PageTitle";
import graemeWithDesk from "../public/assets/images/graeme_cutout.png";

export default function services() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<NavBar></NavBar>

				<GradientBG
					color="green"
					height="h-800"
					flipped={true}
					opacity="opacity-60"
					translateY="-translate-y-2/4 top-0"
				></GradientBG>

				<PageTitle
					title="Two Zero Nine Mastering"
					classes="max-w-4xl px-4"
				></PageTitle>

				<div className="container relative flex flex-col justify-center w-full px-4 mx-auto mt-16 text-white lg:max-w-4xl ">
					<div className="z-10 leading-6 text-white">
						<div className="-mx-12 -mt-12 lg:-mt-0 md:-mt-12 sm:mr-0 sm:-ml-12 sm:w-3/5 sm:float-right">
							<Image
								className="-z-20"
								src={graemeWithDesk}
								width="600"
								height="600"
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
							“People always ask me why I got into mastering. For me, it’s such
							an important process. After I hand the music back, it goes
							straight online, in stores and to the fans. There’s no room for
							error and it is a big responsibility. I love working with bands
							and artists because I am able to help them deliver the perfect
							master to their fans. There’s no better feeling than handing back
							a track to an artist or band and them being so happy that their
							creation, their art, is finally ready for their fans. Having my
							own studio is the icing on the cake as it gives me a listening
							space that I know so well. I’m looking forward to helping you
							finish your next project!”
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

				<Footer></Footer>
			</div>
		</div>
	);
}
