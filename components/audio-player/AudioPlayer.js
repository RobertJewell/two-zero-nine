import React, { useState, useRef, useEffect } from "react";
import PlayButton from "../../public/assets/audio-player/images/svg/play.svg";
import PauseButton from "../../public/assets/audio-player/images/svg/pause.svg";
import Image from "next/image";

export default function AudioPlayer({
	src,
	albumart,
	artist,
	trackname,
	trackDuration,
}) {
	// state
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [currentProgress, setCurrentProgress] = useState(0);

	// references
	const audioPlayer = useRef(); // reference the audio component
	const progressBar = useRef(); // reference the progress bar
	const progressBarMobile = useRef(); // reference the mobile progress bar
	const animationRef = useRef(); // reference the animation
	const initialRender = useRef(true); //check if it's the inital render

	//reset on src change
	useEffect(() => {
		if (initialRender.current) {
			progressBar.current.max = trackDuration;
			initialRender.current = false;
		} else {
			progressBar.current.max = trackDuration;
			cancelAnimationFrame(animationRef.current);
			setIsPlaying(false);
			timeTravel(0);
		}
	}, [trackname]);

	//reset at end of track
	useEffect(() => {
		audioPlayer?.current?.addEventListener("ended", () => {
			setIsPlaying(false);
			timeTravel(0);
			cancelAnimationFrame(animationRef.current);
		});
		return () => {
			audioPlayer?.current?.removeEventListener("ended", () => {
				cancelAnimationFrame(animationRef.current);
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
		progressBar.current.value = parseInt(audioPlayer.current.currentTime);
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changePlayerCurrentTime = () => {
		// progressBar.current.style.setProperty(
		// 	"--seek-before-width",
		// 	`${(progressBar.current.value / trackDuration) * 100}%`
		// );
		// progressBarMobile.current.style.setProperty(
		// 	"--seek-before-width",
		// 	`${(progressBar.current.value / trackDuration) * 100}%`
		// );
		setCurrentTime(parseInt(audioPlayer.current.currentTime));
		setCurrentProgress(currentTime / trackDuration);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		setCurrentProgress(progressBar.current.value / trackDuration);
		changePlayerCurrentTime();
	};

	const timeTravel = (newTime) => {
		progressBar.current.value = newTime;
		changeRange();
	};

	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto mt-12 text-dark">
			<div className="relative flex items-center w-full max-w-3xl p-4 mx-auto bg-white rounded-lg sm:py-6 sm:px-8 ">
				<div
					className={`absolute left-0 h-full rounded-lg bg-accent-main opacity-20 sm:hidden width-[${Math.floor(
						currentProgress * 1000
					)}px]`}
					ref={progressBarMobile}
				></div>
				<audio
					ref={audioPlayer}
					onLoadedMetadata={() => changePlayerCurrentTime()}
					src={src}
					preload="metadata"
					className="hidden"
				></audio>

				{/* Play pause */}
				<div className="relative z-10 w-24 h-24 sm:h-36 sm:w-36 sm:m-0">
					<button
						onClick={togglePlayPause}
						className="absolute z-20 flex items-center justify-center w-full h-full p-4 sm:p-0"
					>
						{isPlaying ? (
							<PauseButton className="w-6 sm:w-8" />
						) : (
							<PlayButton className="w-8 ml-2 sm:w-10" />
						)}
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
						<h3 className="text-xl font-bold tracking-tight sm:text-2xl text-dark">
							{trackname}
						</h3>
						<p className="text-sm text-gray-600">{artist}</p>
					</div>

					{/* Timeline */}
					<div className="relative sm:flex flex-col w-full top-[15px] hidden ">
						{/* time */}
						<div className="flex -mb-1 text-sm text-gray-500 sm:justify-between">
							<div>{calculateTime(currentTime)}</div>
							<div>{calculateTime(trackDuration)}</div>
						</div>
						{/* progress bar */}
						<div className="relative">
							<div className="absolute w-full h-2 bg-gray-300 rounded-full pointer-events-none top-2 "></div>
							<div className="absolute w-full h-2 bg-gray-300 rounded-full pointer-events-none top-2 "></div>

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
