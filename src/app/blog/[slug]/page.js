import BlogPostContent from "@/components/Blog/BlogPost/BlogPostContent";
import { BlogGateway } from "@/api/blog/blog-gateway";
import { notFound } from "next/navigation";
import Script from "next/script";
import { SITE_URL } from "@/utils/constants";

// Server component to render the blog post
export default async function BlogPost({ params }) {
	const { slug } = params;
	const post = await BlogGateway.getPost({ slug });

	if (!post) {
		notFound();
	}

	const jsonLd = generateJsonLd(post);

	return (
		<>
			<Script
				id="json-ld"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<BlogPostContent post={post} />
		</>
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

	const title = `${post.title} | Logiform | Blog`;
	const description =
		post.description || "Read our latest blog post on Logiform";
	const ogImage = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.image.id}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `${SITE_URL}/blog/${slug}`,
			type: "article",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
	};
}

export async function generateStaticParams() {
	const slugs = await BlogGateway.getAllSlugs();
	return slugs;
}

function generateJsonLd(post) {
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		image: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.image.id}`,
		datePublished: post.date_created,
		dateModified: post.date_updated,
		author: {
			"@type": "Person",
			name: post.author?.name || "Logiform Team",
		},
		publisher: {
			"@type": "Organization",
			name: "Logiform",
			logo: {
				"@type": "ImageObject",
				url: `${SITE_URL}/favicon.ico`,
			},
		},
		description: post.description,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${SITE_URL}/blog/${post.slug}`,
		},
	};
}
