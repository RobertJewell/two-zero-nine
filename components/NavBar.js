import React from "react";
import Image from "next/image";
import Link from "next/link";
import TwoZeroNineLogo from "../public/assets/images/TwoZeroNineLogo.svg";

const NavBar = () => {
	return (
		<div className="absolute top-0 hidden sm:relative sm:block ">
			<div className="absolute hidden p-4 bg-white rounded-full">
				<div className="w-6 h-1 mb-1.5 bg-pink-500 rounded-full "></div>
				<div className="w-6 h-1 mb-1.5 bg-pink-500 rounded-full "></div>
				<div className="w-6 h-1 bg-pink-500 rounded-full "></div>
			</div>
			<div className="container mx-auto text-white">
				<div className="flex flex-row items-center justify-between h-16 mx-auto text-sm ">
					<Link href="/">
						<a className="w-24 p-2 text-center">
							<TwoZeroNineLogo></TwoZeroNineLogo>
						</a>
					</Link>
					<ul className="flex flex-row items-center justify-around w-1/2">
						<li className="w-24 p-2 text-center">
							<Link href="/">
								<a className="w-24 p-2 text-center">Services</a>
							</Link>
						</li>
						<li className="w-24 p-2 text-center">
							<Link href="/">
								<a className="w-24 p-2 text-center">About</a>
							</Link>
						</li>
						<li className="w-24 p-2 text-center">
							<Link href="/">
								<a className="w-24 p-2 text-center">Portfolio</a>
							</Link>
						</li>
						<li className="w-24 p-2 text-center">
							<Link href="/">
								<a className="w-24 p-2 text-center">FAQ</a>
							</Link>
						</li>
					</ul>
					<div className="flex flex-row justify-between w-24 p-2 text-center">
						<p>Contact</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
