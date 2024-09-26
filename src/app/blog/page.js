import { BlogGateway } from "@/api/blog/blog-gateway";
import BlogClient from "@/components/Blog/BlogClient";
import BlogHero from "@/components/Blog/BlogHero";

export default async function BlogPage() {
	try {
		const posts = await BlogGateway.getPostsPreview("");

		const uniqueCategories = new Set(["All"]);
		posts.forEach((item) => {
			item.categories.forEach((cat) => {
				uniqueCategories.add(cat);
			});
		});

		return (
			<div>
				<BlogHero {...posts[0]} />
				<BlogClient posts={posts} categories={Array.from(uniqueCategories)} />
			</div>
		);
	} catch (error) {
		console.error("Error fetching posts:", error);
		return <div>Error loading posts.</div>;
	}
}
