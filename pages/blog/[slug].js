import Container from "../../components/blog/container";
import PostHeader from "../../components/blog/post-header";
import Layout from "../../components/blog/layout";
import Head from "next/head";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import BlogAudioPlayer from "../../components/audio-player/BlogAudioPlayer";

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
			if (node.data.target.fields.file.contentType.startsWith("audio")) {
				return (
					<BlogAudioPlayer
						src={node.data.target.fields.file.url}
						trackname={node.data.target.fields.title}
						description={node.data.target.fields.description}
					></BlogAudioPlayer>
				);
			}
		},
	},
};

const client = createClient({
	space: process.env.CONTENFUL_SPACE,
	accessToken: process.env.CONTENTFUL_API_KEY,
});

export default function Post({ post }) {
	const { title, featureImage, contentBlock } = post.fields;
	console.log(contentBlock);
	return (
		<Layout>
			<Container>
				<article className="mb-12">
					<Head>
						<title>{title} | Mastering, Music, and More</title>
					</Head>
					<PostHeader
						title={title}
						coverImage={"https:" + featureImage.fields.file.url}
					/>
					<div className="mx-auto prose text-gray-200">
						{documentToReactComponents(contentBlock, options)}
					</div>
				</article>
			</Container>
		</Layout>
	);
}

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "post",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: "post",
		"fields.slug": params.slug,
	});

	return { props: { post: items[0] } };
}