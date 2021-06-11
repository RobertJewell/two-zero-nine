import Meta from "../blog/meta";
import Footer from "../blog/footer";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<div className="min-h-screen text-white">
				<main>{children}</main>
			</div>
			<Footer></Footer>
		</>
	);
}
