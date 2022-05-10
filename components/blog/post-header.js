import CoverImage from "../blog/cover-image";
import PostTitle from "../blog/post-title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function PostHeader({ title, coverImage, excerpt }) {
	console.log(excerpt);
	return (
		<div className="w-full mx-auto mt-8 mb-8 sm:flex justify-evenly md:mb-16 ">
			<div className="flex flex-col pr-6 sm:w-1/2">
				<PostTitle>{title}</PostTitle>
				<div className="hidden text-gray-400 py-auto sm:block">
					{documentToReactComponents(excerpt)}
				</div>
			</div>
			<div className="block sm:w-1/2 sm:mt-8">
				<CoverImage title={title} src={coverImage} height={620} width={620} />
			</div>
			<div className="block text-gray-400 sm:hidden">
				{documentToReactComponents(excerpt)}
			</div>
		</div>
	);
}
