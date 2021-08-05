import React, { useState, useRef, useEffect } from "react";
import PlayButton from "../../public/assets/audio-player/images/svg/play.svg";
import PauseButton from "../../public/assets/audio-player/images/svg/pause.svg";
import Image from "next/image";

export default function AudioPlayer({ src, albumart, artist, trackname }) {
	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference the audio component
	const progressBar = useRef(); // reference the progress bar
	const animationRef = useRef(); // reference the animation

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const play = () => {
		audioPlayer.current.play();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const togglePlayPause = () => {
		const prevValue = isPlaying;
		setIsPlaying(!prevValue);
		if (!prevValue) {
			play();
		} else {
			audioPlayer.current.pause();
			cancelAnimationFrame(animationRef.current);
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			"--seek-before-width",
			`${(progressBar.current.value / duration) * 100}%`
		);
		setCurrentTime(progressBar.current.value);
	};

	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto mt-12 text-dark">
			<div className="relative flex items-center w-full max-w-3xl p-4 mx-auto bg-white rounded-lg sm:py-6 sm:px-8 ">
				<audio
					ref={audioPlayer}
					onLoadedMetadata={() => changePlayerCurrentTime()}
					src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
					preload="metadata"
					className="hidden"
				></audio>

				{/* Play pause */}
				<div className="relative z-10 w-24 h-24 sm:h-36 sm:w-36 sm:m-0">
					<button
						onClick={togglePlayPause}
						className="absolute z-20 flex items-center justify-center w-full h-full"
					>
						{isPlaying ? <PauseButton /> : <PlayButton className="ml-2" />}
					</button>
					<div className="absolute z-10 w-full h-full bg-gray-700 rounded-lg opacity-50"></div>

					<Image
						className="absolute w-full h-full rounded-lg"
						src={albumart}
						alt="Testamonial picture"
						width={256}
						height={256}
					></Image>
				</div>

				<div className="z-10 flex flex-col justify-between flex-1 ml-6 sm:h-36 -bottom">
					<div className="flex flex-col">
						<h3 className="text-2xl font-bold tracking-tight text-dark">
							Sometimes
						</h3>
						<p className="text-sm text-gray-600">
							Dan Goodwright, Mani D-Whyte, Circanineti
						</p>
					</div>

					{/* Timeline */}
					<div className="relative flex flex-col w-full top-[15px] ">
						{/* time */}
						<div className="hidden -mb-1 text-sm text-gray-500 sm:justify-between sm:flex ">
							<div>{calculateTime(currentTime)}</div>
							<div>{duration ? calculateTime(duration) : "0:00"}</div>
						</div>
						{/* progress bar */}
						<div className="relative">
							<div className="absolute hidden w-full h-2 bg-gray-300 rounded-full pointer-events-none top-2 sm:block"></div>

							<input
								type="range"
								className="absolute z-30 progressBar"
								defaultValue="0"
								ref={progressBar}
								onChange={changeRange}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
