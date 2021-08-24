import React from "react";

export default function Track({ trackName, artist, selectTrack, explicit }) {
	return (
		<li
			className="flex-col py-4 list-none"
			onClick={() => selectTrack(trackName)}
		>
			<div className="flex p-2 px-4 transition-colors rounded-lg cursor-pointer hover:bg-blue-200 hover:bg-opacity-10">
				<div className="flex-col flex-1">
					<p className="text-lg font-bold text-white">{trackName}</p>
					<p className="text-gray-300">{artist}</p>
				</div>
				{explicit && (
					<div className="flex items-center">
						<p className="text-sm font-bold text-yellow-500 rounded-lg">
							Explicit
						</p>
					</div>
				)}
			</div>
		</li>
	);
}
