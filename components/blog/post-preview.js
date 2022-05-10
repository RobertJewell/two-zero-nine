import CoverImage from "./cover-image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "../Button";

export default function PostPreview({ title, coverImage, excerpt, slug }) {
	return (
		<div className="flex flex-col items-center mx-auto sm:flex-row max-w-400 sm:max-w-screen-2xl sm:w-auto">
			<div className="w-full sm:mr-8 sm:w-1/2 sm:max-w-300">
				<CoverImage
					slug={slug}
					title={title}
					src={"https:" + coverImage}
					height={280}
					width={280}
				/>
			</div>
			<div className="flex flex-col mt-8 sm:mt-0 sm:w-1/2">
				<h3 className="mb-3 text-3xl font-bold leading-snug sm:text-2xl md:text-3xl">
					<Link as={`/blog/${slug}`} href="/blog/[slug]">
						<a className="hover:underline">{title}</a>
					</Link>
				</h3>
				<p className="mb-4 text-lg leading-relaxed text-gray-300 sm:text-base md:text-lg">
					{documentToReactComponents(excerpt)}
				</p>
				<Button
					text="Read Article"
					type="secondary"
					width="w-36"
					margin="mt-8"
					link={`/blog/${slug}`}
					extras=" "
				></Button>
			</div>
		</div>
	);
}
