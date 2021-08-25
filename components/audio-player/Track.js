import React from "react";
import Image from "next/image";

export default function Track({
	trackName,
	artist,
	selectTrack,
	explicit,
	artwork,
}) {
	return (
		<li
			className="flex-col py-4 list-none"
			onClick={() => selectTrack(trackName)}
		>
			<div className="flex p-2 px-4 transition-colors rounded-lg cursor-pointer hover:bg-blue-200 group hover:bg-opacity-10">
				<div className="relative w-12 h-12 my-auto mr-4">
					<div className="absolute z-20 w-full h-full transition-opacity rounded bg-accent-shade opacity-30 group-hover:opacity-0"></div>
					<Image
						className="absolute transition-colors rounded saturate-0 group-hover:saturate-100"
						src={artwork}
						alt="Album art"
						width={64}
						height={64}
					></Image>
				</div>

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
