import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({ title, coverImage, excerpt, slug }) {
	return (
		<div>
			<div className="mb-5">
				<CoverImage
					slug={slug}
					title={title}
					src={"https:" + coverImage}
					height={278}
					width={556}
				/>
			</div>
			<h3 className="mb-3 text-3xl font-bold leading-snug">
				<Link as={`/blog/${slug}`} href="/blog/[slug]">
					<a className="hover:underline">{title}</a>
				</Link>
			</h3>
			<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
		</div>
	);
}
