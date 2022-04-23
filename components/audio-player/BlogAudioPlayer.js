import React, { useState, useRef, useEffect } from "react";
import PlayButton from "../../public/assets/audio-player/images/svg/play.svg";
import PauseButton from "../../public/assets/audio-player/images/svg/pause.svg";

export default function AudioPlayer({ src, trackname, description }) {
	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference the audio component

	//reset at end of track
	useEffect(() => {
		audioPlayer?.current?.addEventListener("ended", () => {
			setIsPlaying(false);
			timeTravel(0);
		});
		return () => {
			audioPlayer?.current?.removeEventListener("ended", () => {
				setIsPlaying(false);
				timeTravel(0);
			});
		};
	}, []);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const play = () => {
		audioPlayer.current.play();
		setIsPlaying(true);
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		if (!prevValue) {
			play();
		} else {
			audioPlayer.current.pause();
		}
	};

	const changePlayerCurrentTime = () => {
		setCurrentTime(parseInt(audioPlayer.current.currentTime));
	};

	const changeRange = () => {
		changePlayerCurrentTime();
	};

	const timeTravel = (newTime) => {
		changeRange();
	};

	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto mt-12 text-white">
			<div className="relative flex items-center w-full max-w-3xl p-4 mx-auto overflow-hidden rounded-lg sm:py-6 sm:px-8 ">
				<audio
					ref={audioPlayer}
					onLoadedMetadata={() => changePlayerCurrentTime()}
					src={src}
					preload="metadata"
					className="hidden"
				></audio>

				{/* Play pause */}
				<div className="relative z-10 w-24 h-24 rounded-lg shadow-md sm:h-24 sm:w-24 sm:m-0 ">
					<button
						aria-label="Play Audio"
						onClick={togglePlayPause}
						className="absolute z-20 flex items-center justify-center w-full h-full p-4 sm:p-0"
					>
						{isPlaying ? (
							<PauseButton className="w-6 " />
						) : (
							<PlayButton className="w-8 ml-2 " />
						)}
					</button>
					<div
						className={`absolute z-10 w-full h-full rounded-lg bg-accent-main transition-opacity ${
							isPlaying ? "opacity-50" : "opacity-0 "
						}`}
					></div>
					<div className="absolute w-full h-full bg-gray-800 rounded-lg "></div>
				</div>

				<div className="z-10 flex flex-col justify-between flex-1 ml-6 sm:h-24 ">
					<div className="flex flex-col">
						<h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
							{trackname}
						</h3>
						<p className="text-sm text-gray-300">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
