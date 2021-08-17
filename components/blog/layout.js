import Meta from "../blog/meta";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<div className="min-h-screen text-white">
				<main>{children}</main>
			</div>
		</>
	);
}
