import React from "react";

export default function Track({ trackName, artist, location, selectTrack }) {
	return (
		<li
			className="flex-col py-4 list-none"
			onClick={() => selectTrack(trackName)}
		>
			<div className="p-2 px-4 transition-colors rounded-lg cursor-pointer hover:bg-gray-800">
				<p className="text-lg font-bold text-white">{trackName}</p>
				<p className="text-gray-300">{artist}</p>
			</div>
		</li>
	);
}
