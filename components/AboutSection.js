import React from "react";
import Button from "./Button";
import Image from "next/image";
import profilePicture from "../public/assets/images/graeme-with-desk.png";
import appleDigitalMasters from "../public/assets/images/apple-digital-masters-button.png";

export default function AboutSection() {
	return (
		<div className="container relative flex flex-col justify-center w-full mx-auto mt-32 lg:max-w-4xl text-dark">
			<div className="z-10 sm:absolute md:max-w-sm sm:max-w-xs">
				<div className="relative px-8 py-10 bg-white bottom-8 rounded-2xl">
					<h1 className="text-3xl font-bold text-gray-800">TwoZeroNine</h1>
					<p className="mt-4 text-sm leading-6 text-gray-700">
						Two Zero Nine Mastering is a dedicated mastering studio based in
						Liverpool’s Baltic Triangle along side leading digital labels &
						distributors, recording studio’s & other multi-media creators, run
						by Mastering Engineer Graeme Lynch.
					</p>
					<Button
						text="Learn more"
						type="secondaryDark"
						width="w-28"
						margin="mt-8"
						link="/"
						extras=" text-sm"
					></Button>
				</div>
			</div>

			<div className="self-end hidden mb-10 border-4 border-gray-200 sm:block lg:w-600 lg:h-600 sm:h-500 sm:w-500 rounded-2xl">
				<div className="relative">
					<Image
						className="rounded-2xl"
						src={profilePicture}
						alt="Photo of Graeme at his desk"
						width={600}
						height={600}
					></Image>

					{/* Apple digital masters button */}
					<div className="absolute hidden sm:block -bottom-8 md:-left-28 right-12">
						<Button
							text={
								<Image
									src={appleDigitalMasters}
									alt="Photo of Graeme at his desk"
									width={300}
									height={120}
								></Image>
							}
							type="image"
							width="w-36"
							margin="mt-8"
							link="/"
							extras="p-0"
						></Button>
					</div>
				</div>
			</div>
		</div>
	);
}
