import { BlogGateway } from "@/api/blog/blog-gateway";
import BlogClient from "@/components/Blog/BlogClient";
import BlogHero from "@/components/Blog/BlogHero";
import { SITE_URL } from "@/utils/constants";
import Script from "next/script";

export const metadata = {
	title: "Logiform | Blog",
	description: "Explore our latest articles and insights on Logiform's blog.",
	openGraph: {
		title: "Logiform | Blog",
		description: "Explore our latest articles and insights on Logiform's blog.",
		url: `${SITE_URL}/blog`,
		type: "website",
		images: [
			{
				url: `/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Logiform Blog",
			},
		],
	},
};

export default async function BlogPage() {
	try {
		const posts = await BlogGateway.getPostsPreview("");

		const uniqueCategories = new Set(["All"]);
		posts.forEach((item) => {
			item.categories.forEach((cat) => {
				uniqueCategories.add(cat);
			});
		});

		const jsonLd = {
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Logiform Blog",
			description:
				"Explore our latest articles and insights on Logiform's blog.",
			url: `${SITE_URL}/blog`,
			mainEntity: {
				"@type": "ItemList",
				itemListElement: posts.map((post, index) => ({
					"@type": "ListItem",
					position: index + 1,
					url: `${SITE_URL}/blog/${post.slug}`,
				})),
			},
		};

		return (
			<>
				<Script
					id="json-ld-blog-index"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<BlogHero {...posts[0]} />
				<BlogClient posts={posts} categories={Array.from(uniqueCategories)} />
			</>
		);
	} catch (error) {
		console.error("Error fetching posts:", error);
		return <div>Error loading posts.</div>;
	}
}
