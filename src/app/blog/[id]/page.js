import BlogPostContent from "@/components/Blog/BlogPost/BlogPostContent";
import AUTHOR from "@/assets/blogImages/author.png";
import cardImage from "@/assets/blogImages/phone.png";

// Mock data (replace this with actual data fetching logic)
const blogPosts = [
	{
		id: 1,
		image: cardImage,
		date: "12, August 2024",
		title: "How to Calculate the Cost of Smart Contract?",
		description:
			"Smart contracts are an integral part of the Ethereum blockchain...",
		authorImage: AUTHOR,
		author: "Ronald Richards",
		category: "Machine learning",
	},
	{
		id: 2,
		image: cardImage,
		date: "12, August 2024",
		title: "How to Calculate the Cost of Smart Contract?",
		description:
			"Smart contracts are an integral part of the Ethereum blockchain...",
		authorImage: AUTHOR,
		author: "Ronald Richards",
		category: "Machine learning",
	},
	{
		id: 3,
		image: cardImage,
		date: "12, August 2024",
		title: "How to Calculate the Cost of Smart Contract?",
		description:
			"Smart contracts are an integral part of the Ethereum blockchain...",
		authorImage: AUTHOR,
		author: "Ronald Richards",
		category: "Machine learning",
	},
];

// Server component to render the blog post
export default function BlogPost({ params }) {
	const post = blogPosts.find((post) => post.id === parseInt(params.id, 10));

	if (!post) {
		return <div>Blog post not found.</div>;
	}

	return (
		<div>
			<BlogPostContent content={post.content} />
		</div>
	);
}

// Function to generate static parameters (paths)
export async function generateStaticParams() {
	return blogPosts.map((post) => ({
		id: post.id.toString(),
	}));
}
