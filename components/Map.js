import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
	"pk.eyJ1Ijoicm9iZXJ0amV3ZWxsIiwiYSI6ImNrcm42ejFqOTBpd2cybnJxYmV0bWh5eXIifQ.v9_Mw3NPnJQObbLT3isRvg";
// initialize map when component mounts

export default function Map() {
	const mapContainerRef = useRef(null);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			// See style options here: https://docs.mapbox.com/api/maps/#styles
			style: "mapbox://styles/robertjewell/ckrn70nwr2y7r17mol2lkt1tb",
			center: [-2.980306078, 53.394152378],
			zoom: 12.5,
		});

		map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

		map.scrollZoom.disable();

		// clean up on unmount
		return () => map.remove();
	}, []); // eslint-disable-line react-hooks/exhaustive

	return (
		<div className="container relative px-4 pt-8 mx-auto overflow-hidden text-white lg:max-w-5xl rounded-xl">
			<div
				className="w-full border-4 h-400 rounded-xl border-accent-muted opacity-95"
				ref={mapContainerRef}
			></div>
			<div className="flex justify-center">
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center px-6 py-2 mt-12 text-center text-gray-900 align-middle transition-colors bg-white border-2 border-white rounded-lg hover:bg-gray-200 hover:border-gray-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 92.3 132.3"
						className="h-8 mr-3 -ml-1"
					>
						<path
							fill="#1a73e8"
							d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"
						/>
						<path
							fill="#ea4335"
							d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"
						/>
						<path
							fill="#4285f4"
							d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"
						/>
						<path
							fill="#fbbc04"
							d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"
						/>
						<path
							fill="#34a853"
							d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"
						/>
					</svg>
					View on Google Maps
				</a>
			</div>
		</div>
	);
}
