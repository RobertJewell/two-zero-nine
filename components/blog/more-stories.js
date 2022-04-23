import PostPreview from "../blog/post-preview";
import GradientBG from "../../components/decoration/GradientBG";

export default function MoreStories({ posts }) {
	return (
		<section>
			<h2 className="mb-8 text-6xl font-bold ">Other posts</h2>
			<GradientBG
				color="purple"
				height="h-800"
				flipped={false}
				opacity="opacity-60"
				translateY="-translate-y-2/4 absolute -mx-36"
			></GradientBG>

			<div className="grid grid-cols-1 pb-8 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
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
		</section>
	);
}
