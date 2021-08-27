import React, { useState, useRef } from "react";
import GradientBG from "../components/decoration/GradientBG";
import PageTitle from "../components/PageTitle";
import AudioPlayer from "../components/audio-player/AudioPlayer";
import tracksJSON from "../components/audio-player/tracklist.json";
import Tracklist from "../components/audio-player/Tracklist";
import Playlists from "../components/audio-player/Playlists";
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

export default function listen() {
	const [currentTrack, setCurrentTrack] = useState(0);

	const selectTrack = (trackTitle) => {
		setCurrentTrack(
			tracksJSON.findIndex((track) => track.title === trackTitle)
		);
	};

	return (
		<motion.div exit={{ opacity: 0 }} className="pt-20 overflow-hidden">
			<motion.div
				variants={containerFade}
				initial="initial"
				animate="animate"
				className="relative"
			>
				<PageTitle title="Listen" classes="max-w-4xl px-4 lg:px-0"></PageTitle>

				<AudioPlayer
					albumart={
						tracksJSON[currentTrack].artwork ||
						"/assets/images/graeme-with-desk.png"
					}
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

				<Playlists></Playlists>
			</motion.div>
		</motion.div>
	);
}
