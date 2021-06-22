import React from "react";
import Link from "next/link";
import TwoZeroNineLogo from "../public/assets/images/TwoZeroNineLogo.svg";
import Button from "./button";

const NavBar = () => {
	return (
		<div className="absolute top-0 hidden sm:relative sm:block ">
			<div className="absolute hidden p-4 bg-white rounded-full">
				<div className="w-6 h-1 mb-1.5 bg-pink-500 rounded-full "></div>
				<div className="w-6 h-1 mb-1.5 bg-pink-500 rounded-full "></div>
				<div className="w-6 h-1 bg-pink-500 rounded-full "></div>
			</div>
			<div className="container mx-auto text-white">
				<div className="flex flex-row items-center justify-between h-20 mx-auto text-sm ">
					<Link href="/">
						<a className="w-24 p-4 text-center">
							<TwoZeroNineLogo></TwoZeroNineLogo>
						</a>
					</Link>
					<ul className="flex flex-row items-center justify-around w-1/2">
						<li className="flex">
							<Link href="/">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									Services
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									About
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									Portfolio
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									FAQ
								</a>
							</Link>
						</li>
					</ul>
					<Button
						text="Contact"
						type="secondary"
						width="w-24"
						link="/"
					></Button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
