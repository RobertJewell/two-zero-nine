import Link from "next/link";
import TwoZeroNineLogo from "../public/assets/images/TwoZeroNineLogo.svg";
import Button from "./Button";
import MobileDropdown from "./MobileDropdown";

const NavBar = () => {
	return (
		<div className="container flex px-4 mx-auto sm:justify-center">
			<div className="absolute flex flex-row items-center justify-between h-20 mx-auto sm:hidden">
				<Link href="/">
					<a className="w-24 pr-6 text-center">
						<TwoZeroNineLogo></TwoZeroNineLogo>
					</a>
				</Link>
				<MobileDropdown></MobileDropdown>
			</div>

			<div className="container hidden px-4 mx-auto text-white sm:absolute sm:block">
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
