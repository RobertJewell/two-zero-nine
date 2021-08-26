import Track from "./Track";
import { motion } from "framer-motion";

const fadeIn = {
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			when: "afterChildren",
			staggerChildren: 0.1,
		},
	},
};

export default function Tracklist({ tracksJSON, selectTrack }) {
	return (
		<div className="container justify-center w-full px-4 mx-auto mt-2">
			<motion.div
				className="relative flex flex-col max-w-2xl p-4 mx-auto divide-y-2 divide-gray-600"
				variants={fadeIn}
				initial="hidden"
				animate="visible"
			>
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
			</motion.div>
		</div>
	);
}
