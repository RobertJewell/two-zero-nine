import Track from "./Track";

export default function Tracklist({ tracksJSON, selectTrack }) {
	return (
		<div className="container justify-center w-full px-4 mx-auto mt-2">
			<div className="relative flex flex-col max-w-2xl p-4 mx-auto divide-y-2 divide-gray-600">
				{tracksJSON.map((trackItem) => (
					<Track
						key={trackItem.title}
						trackName={trackItem.title}
						artist={trackItem.artist}
						artwork={trackItem.artwork}
						explicit={trackItem.explicit}
						selectTrack={selectTrack}
					></Track>
				))}
			</div>
		</div>
	);
}
