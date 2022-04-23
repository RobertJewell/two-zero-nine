import CoverImage from "../blog/cover-image";
import PostTitle from "../blog/post-title";

export default function PostHeader({ title, coverImage }) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="mt-8 mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} src={coverImage} height={620} width={1240} />
			</div>
		</>
	);
}
