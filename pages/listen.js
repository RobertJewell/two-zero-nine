import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GradientBG from "../components/decoration/GradientBG";
import PageTitle from "../components/PageTitle";
import AudioPlayer from "../components/audio-player/AudioPlayer";
import tracksJSON from "../components/audio-player/tracklist.json";
import Tracklist from "../components/audio-player/Tracklist";

export default function listen() {
	const [currentTrack, setCurrentTrack] = useState(0);

	const selectTrack = (trackTitle) => {
		setCurrentTrack(
			tracksJSON.findIndex((track) => track.title === trackTitle)
		);
	};

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

				<AudioPlayer
					albumart="/assets/images/dave-pensado.png"
					src={tracksJSON[currentTrack].source}
					trackname={tracksJSON[currentTrack].title}
					artist={tracksJSON[currentTrack].artist}
					trackDuration={tracksJSON[currentTrack].duration}
				></AudioPlayer>

				<GradientBG
					color="purple"
					height="h-800"
					flipped={false}
					opacity="opacity-60"
					translateY="translate-y-1/4"
				></GradientBG>

				<Tracklist
					tracksJSON={tracksJSON}
					selectTrack={selectTrack}
				></Tracklist>

				<Footer></Footer>
			</div>
		</div>
	);
}
