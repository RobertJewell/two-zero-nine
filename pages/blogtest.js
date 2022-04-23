import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: "ju7enasf102u",
		accessToken: "lr3qOzGZ57wGWbaFe1ntkeKb96EKFeqkCJtOpQEQFn8",
	});

	const res = await client.getEntries({ content_type: "post" });

	return { props: { posts: res.items } };
}

export default function blogtest({ posts }) {
	console.log(posts);
	return (
		<div className="container flex flex-col justify-center w-full px-4 mx-auto text-white min-h-96 h-screen-60 sm:min-h-400 sm:h-screen-60 max-h-700 sm:items-center sm:px-0 ">
			<h1>WOOOOOO</h1>
			{posts.map((post) => (
				<div className="">{post.fields.title}</div>
			))}
		</div>
	);
}
