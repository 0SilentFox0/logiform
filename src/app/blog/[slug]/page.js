import BlogPostContent from "@/components/Blog/BlogPost/BlogPostContent";
import { BlogGateway } from "@/api/blog/blog-gateway";
import { notFound } from "next/navigation";

// Server component to render the blog post
export default async function BlogPost({ params }) {
	const { slug } = params;
	const post = await BlogGateway.getPost({ slug });

	if (!post) {
		notFound();
	}

	return (
		<div>
			<BlogPostContent post={post} />
		</div>
	);
}

// Optional: Add metadata for SEO
export async function generateMetadata({ params }) {
	const { slug } = params;
	const post = await BlogGateway.getPost({ slug });

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
		description: post.description,
		// Add other metadata as needed
	};
}

// This function generates the static paths at build time
export async function generateStaticParams() {
	// Fetch all blog post slugs
	const slugs = await BlogGateway.getAllSlugs();

	// Return an array of params to pre-render
	return slugs;
}
