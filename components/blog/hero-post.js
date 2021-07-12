import Avatar from "../blog/avatar";
import DateFormatter from "../blog/date-formatter";
import CoverImage from "../blog/cover-image";
import Link from "next/link";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section className="mt-12 mb-20 md:mb-28">
			<div>
				<CoverImage
					title={title}
					src={coverImage}
					slug={slug}
					height={620}
					width={1240}
				/>
			</div>
			<div className="my-8 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
				<div>
					<h3 className="mb-4 text-4xl font-bold leading-tight lg:text-4xl">
						<Link as={`/posts/${slug}`} href="/posts/[slug]">
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
					<div className="mb-4 text-lg md:mb-0">
						<DateFormatter dateString={date} />
					</div>
				</div>
				{/* <div>
					<CoverImage
						title={title}
						src={coverImage}
						slug={slug}
						height={620}
						width={1240}
					/>
				</div> */}
				<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
				<Avatar name={author.name} picture={author.picture} />
			</div>
		</section>
	);
}
