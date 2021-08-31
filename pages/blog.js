import Container from "../components/blog/container";
import MoreStories from "../components/blog/more-stories";
import HeroPost from "../components/blog/hero-post";
import Layout from "../components/blog/layout";
import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout>
				<div className="absolute w-screen h-screen -z-10 featureGradient"></div>
				<Container>
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"excerpt",
	]);

	return {
		props: { allPosts },
	};
}
