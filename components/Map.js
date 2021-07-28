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
		</div>
	);
}
