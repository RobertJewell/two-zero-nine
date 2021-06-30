import Link from "next/link";
import Button from "./Button";
import FacebookLogo from "../public/assets/images/social-icons/facebook.svg";
import InstagramLogo from "../public/assets/images/social-icons/instagram.svg";
import TwitterLogo from "../public/assets/images/social-icons/twitter.svg";

export default function Footer() {
	return (
		<div className="container px-8 pb-12 mx-auto mt-20 text-white sm:pb-8 ">
			<div className="w-full h-1 mb-4 bg-gray-600 rounded-full"></div>
			<div className="flex flex-col justify-between sm:flex-row">
				<div className="flex flex-col text-center sm:text-left">
					<h3 className="mt-4 text-2xl font-bold ">Your sound: Perfected</h3>
					<address className="mt-6 text-sm leading-8 text-gray-400 sm:mt-8">
						{" "}
						<span className="font-bold">Two Zero Nine Mastering</span>
						<br />
						25-31 Parliament St,
						<br />
						Liverpool - L8 5RN
					</address>
				</div>
				<div className="flex flex-col-reverse items-center sm:justify-between sm:flex-col">
					<Button
						text="Get started"
						type="secondary"
						width="w-36"
						link="/"
						margin="sm:mt-4 mt-8"
						extras="sm:self-end"
					></Button>
					<div className="flex mt-8 mb-2">
						<Link href="https://twitter.com/Twozeronineuk">
							<a>
								<TwitterLogo className="h-8 mx-3 text-white transition-colors fill-current sm:ml-6 sm:mr-0 hover:text-accent-muted"></TwitterLogo>
							</a>
						</Link>
						<Link href="https://www.facebook.com/twozeroninemastering/">
							<a>
								<FacebookLogo className="h-8 mx-3 text-white transition-colors fill-current sm:ml-6 sm:mr-0 hover:text-accent-muted"></FacebookLogo>
							</a>
						</Link>
						<Link href="https://www.instagram.com/twozeroninemastering/">
							<a>
								<InstagramLogo className="h-8 mx-3 text-white transition-colors fill-current sm:ml-6 sm:mr-0 hover:text-accent-muted"></InstagramLogo>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
