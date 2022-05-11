import PostPreview from "../blog/post-preview";

export default function MoreStories({ posts }) {
	return (
		<section className="container mx-auto overflow-visable">
			<h2 className="mb-8 text-6xl font-bold ">Other posts</h2>

			<div className="mx-auto ">
				<div className="grid grid-cols-1 pb-8 2xl:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
					{posts.map((post) => (
						<PostPreview
							key={post.fields.slug}
							title={post.fields.title}
							coverImage={post.fields.featureImage.fields.file.url}
							slug={post.fields.slug}
							excerpt={post.fields.excerpt}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
