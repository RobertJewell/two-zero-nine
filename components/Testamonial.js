import Image from "next/image";
import testamonialPhoto from "../public/assets/images/dave-pensado.webp";

export default function Testamonial() {
	return (
		<div className="container flex justify-center px-4 mx-auto mt-32">
			<div className="flex flex-col items-center justify-center w-full max-w-3xl px-8 bg-gray-100 rounded-lg ">
				<div className="w-32 h-32 -mb-16 overflow-visible transform -translate-y-16 rounded-full drop-shadow-xl">
					<Image
						className="w-32 h-32 rounded-full"
						src={testamonialPhoto}
						alt="Testamonial picture"
						width={128}
						height={128}
					></Image>
				</div>
				<p className="max-w-md mt-8 leading-6 text-center text-gray-700">
					“ I used to struggle with terrible sounding music but then I got in
					touch with Graeme, and now everything in my life is better. I’m going
					to get his face as a tattoo next week! “
				</p>
				<p className="mt-8 font-bold text-center text-gray-900">Big Dave</p>
				<p className="mb-8 text-center text-gray-500">@davepensado</p>
			</div>
		</div>
	);
}
