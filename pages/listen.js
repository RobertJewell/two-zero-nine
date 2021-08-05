import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GradientBG from "../components/decoration/GradientBG";
import PageTitle from "../components/PageTitle";
import AudioPlayer from "../components/audio-player/AudioPlayer";

export default function listen() {
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

				<PageTitle title="Listen" classes="max-w-4xl px-4 lg:px-0"></PageTitle>

				<AudioPlayer albumart="/assets/images/dave-pensado.png"></AudioPlayer>

				<Footer></Footer>
			</div>
		</div>
	);
}
