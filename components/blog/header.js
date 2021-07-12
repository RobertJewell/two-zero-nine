import Link from "next/link";
import TwoZeroNineLogo from "../../public/assets/images/TwoZeroNineLogo.svg";
import Button from "../Button";

export default function Header() {
	return (
		<div className="container mx-auto text-white">
			<div className="flex flex-row items-center justify-between h-20 mx-auto ">
				<Link href="/blog">
					<a className="flex mt-2 text-center">
						<TwoZeroNineLogo className="h-8"></TwoZeroNineLogo>
						<h3 className="ml-3 text-4xl font-bold py-auto"> - Blog</h3>
					</a>
				</Link>

				<Button
					text="Main site"
					type="secondary"
					width="w-32"
					link="/"
				></Button>
			</div>
		</div>
	);
}
