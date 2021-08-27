import TidalSVG from "../../public/assets/audio-player/images/svg/tidal.svg";
import SpotifySVG from "../../public/assets/audio-player/images/svg/spotify.svg";

export default function Playlists() {
	return (
		<div className="container flex justify-center w-full mx-auto mt-8">
			<div className="flex flex-col">
				<h3 className="text-2xl font-bold text-center text-white">
					View playlist in:
				</h3>
				<a
					href="https://open.spotify.com/playlist/2iEkcxoCmFF8KS8AsjVWr5?si=bf16dde8e04345d1"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center w-48 py-2 mt-8 text-gray-900 align-middle group"
				>
					<SpotifySVG className="w-32 text-white transition-colors fill-current group-hover:text-accent-main"></SpotifySVG>
				</a>
				<a
					href="https://tidal.com/browse/playlist/6bf7e9f1-de25-46e2-a77c-a5bf3ceee861"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center w-48 py-2 mt-8 text-gray-900 align-middle group"
				>
					<TidalSVG className="w-40 text-white transition-colors fill-current group-hover:text-accent-main"></TidalSVG>
				</a>
			</div>
		</div>
	);
}
