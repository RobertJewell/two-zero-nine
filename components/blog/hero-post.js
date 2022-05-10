import CoverImage from "../blog/cover-image";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function HeroPost({ title, coverImage, slug, excerpt }) {
	return (
		<section className="mt-12 mb-12 ">
			<h2 className="mb-2 text-6xl font-bold ">Blog</h2>
			<div className="container relative flex flex-col justify-center w-full mx-auto mt-16 sm:mt-8 lg:max-w-3xl text-dark">
				<div className="z-10 sm:absolute md:max-w-sm sm:max-w-xs">
					<div className="relative bg-white border-4 border-white bottom-8 rounded-2xl">
						<div className="relative block overflow-hidden sm:hidden">
							<div className="absolute w-full h-full bg-white rounded-t-2xl bottom-2"></div>
							<Image
								className="block rounded-t-2xl sm:hidden"
								src={"https:" + coverImage}
								alt="Blog hero image"
								width={620}
								height={620}
							></Image>
						</div>
						<div className="px-8 py-10">
							<h1 className="text-3xl font-bold text-gray-800">{title}</h1>
							<p className="mt-4 leading-6 text-gray-700">
								{documentToReactComponents(excerpt)}
							</p>

							<Button
								text="Read Article"
								type="secondaryDark"
								width="w-36"
								margin="mt-8"
								link={`/blog/${slug}`}
								extras=" "
							></Button>
						</div>
					</div>
				</div>

				<div className="self-end hidden mb-10 bg-gray-200 border-4 border-gray-200 sm:block sm:h-500 sm:w-500 rounded-2xl">
					<div className="relative">
						<Link as={`/blog/${slug}`} href="/blog/[slug]">
							<a className="hover:underline">
								<Image
									className="rounded-xl"
									src={"https:" + coverImage}
									alt="Blog hero image"
									width={620}
									height={620}
								></Image>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
