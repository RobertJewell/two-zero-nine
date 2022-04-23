import CoverImage from "../blog/cover-image";
import Link from "next/link";

export default function HeroPost({ title, coverImage, excerpt, slug }) {
	return (
		<section className="mt-12 mb-20 md:mb-28">
			<div>
				<CoverImage
					title={title}
					src={"https:" + coverImage}
					slug={slug}
					height={620}
					width={1240}
				/>
			</div>
			<div className="my-8 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
				<div>
					<h3 className="mb-4 text-4xl font-bold leading-tight lg:text-4xl">
						<Link as={`/blog/${slug}`} href="/blog/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
				</div>
				<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
			</div>
		</section>
	);
}
