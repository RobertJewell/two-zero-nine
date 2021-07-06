import Button from "./Button";
import Image from "next/image";
import AppleAlbumArt from "../public/assets/images/album-art-apple.png";

export default function AppleDigitalMasters() {
	return (
		<div className="container flex flex-col items-start w-full pt-20 mx-auto sm:px-4">
			<div className="relative flex flex-col w-full max-w-4xl px-8 py-16 mx-auto overflow-hidden bg-white md:flex-row text-dark sm:px-12 sm:rounded-xl">
				<div className="md:w-1/2">
					<h2 className="text-3xl font-bold text-center md:text-left">
						Apple Digital <br />
						Masters Certified
					</h2>
					<div className="relative pt-8 sm:px-8 md:px-0 md:pr-16 image-overflow">
						<Image
							className="shadow-lg"
							src={AppleAlbumArt}
							alt="album artwork"
						></Image>
					</div>
				</div>
				<div className="flex flex-col items-center md:w-1/2 md:items-start">
					<p className="mt-12 text-center md:mt-0 md:text-left">
						Digital distribution is no longer an afterthought. It is today’s
						dominant medium for consuming music and as such needs to be treated
						with utmost care and attention. We are an official Apple certified
						mastering studio. We guarantee your music will be digitally
						distributed to the highest possible standards.{" "}
						<a
							className="text-accent-shade"
							href="https://www.apple.com/itunes/docs/apple-digital-masters.pdf"
						>
							Read more here
						</a>
					</p>
					<Button
						text="Learn more"
						type="secondaryDark"
						width="w-28"
						margin="mt-8 mx-auto md:mx-1"
						link="/"
						extras=""
					></Button>
				</div>
			</div>
		</div>
	);
}
