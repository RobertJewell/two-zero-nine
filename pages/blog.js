import Container from "../components/blog/container";
import MoreStories from "../components/blog/more-stories";
import HeroPost from "../components/blog/hero-post";
import Layout from "../components/blog/layout";
import { createClient } from "contentful";
import Head from "next/head";
import GradientBG from "../components/decoration/GradientBG";
import { AnimatePresence, motion } from "framer-motion";

const containerFade = {
	initial: {
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

export default function Index({ posts }) {
	const heroPost = posts[0];
	const morePosts = posts.slice(1);
	return (
		<motion.div exit={{ opacity: 0 }} className="overflow-hidden">
			<motion.div
				variants={containerFade}
				initial="initial"
				animate="animate"
				className="relative"
			>
				<Layout>
					<Head>
						<title>TwoZeroNine Mastering - Blog</title>
					</Head>
					<div className="absolute w-screen h-screen -z-10 featureGradient"></div>
					<Container>
						{heroPost && (
							<HeroPost
								title={heroPost.fields.title}
								coverImage={heroPost.fields.featureImage.fields.file.url}
								slug={heroPost.fields.slug}
								excerpt={heroPost.fields.excerpt}
							/>
						)}
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</Container>
				</Layout>
			</motion.div>
		</motion.div>
	);
}

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENFUL_SPACE,
		accessToken: process.env.CONTENTFUL_API_KEY,
	});

	const res = await client.getEntries({ content_type: "post" });

	return { props: { posts: res.items } };
}
