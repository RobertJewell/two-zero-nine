import Link from "next/link";
import TwoZeroNineLogo from "../public/assets/images/TwoZeroNineLogo.svg";
import Button from "./Button";
import MobileDropdown from "./MobileDropdown";

const NavBar = () => {
	return (
		<div className="container z-30 flex px-4 mx-auto md:justify-center">
			<div className="absolute z-30 flex flex-row items-center justify-between h-20 mx-auto md:hidden">
				<Link href="/">
					<a className="w-24 pr-6 text-center">
						<TwoZeroNineLogo></TwoZeroNineLogo>
					</a>
				</Link>
				<MobileDropdown></MobileDropdown>
			</div>

			<div className="container z-30 hidden px-4 mx-auto text-white md:absolute md:block">
				<div className="flex flex-row items-center justify-between h-20 mx-auto ">
					<Link href="/">
						<a className="w-24 pr-6 text-center">
							<TwoZeroNineLogo></TwoZeroNineLogo>
						</a>
					</Link>
					<ul className="flex flex-row items-center justify-around w-1/2">
						<li className="flex">
							<Link href="/services">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									Services
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/about">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									About
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/listen">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									Listen
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/faq">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									FAQ
								</a>
							</Link>
						</li>
						<li className="flex">
							<Link href="/blog">
								<a className="w-24 p-2 text-center transition-colors hover:text-accent-main">
									Blog
								</a>
							</Link>
						</li>
					</ul>
					<Button
						text="Contact"
						type="secondary"
						width="w-24"
						link="/contact"
					></Button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
