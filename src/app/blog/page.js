"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "@/components/Blog/Blog.module.css";
import AUTHOR from "@/assets/blogImages/author.png";
import DOT from "@/assets/blogImages/dot.svg";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard"; // Ensure this is the correct import
import Image from "next/image"; // Ensure this is the correct import
import { directus } from "@/plugins/axios";

function Blog() {
	const [posts, setPosts] = useState([]);
	const [toggleState, setToggleState] = useState(1);
	const [category, setCategory] = useState("All");

	// Memoized categories to avoid unnecessary re-creation on re-renders
	const categories = useMemo(
		() => ["All", "Blockchain", "Web 3", "Web 2", "About us", "Trends"],
		[]
	);

	// Memoize the toggle function to avoid re-creating the function on every render
	const toggleTab = useCallback(
		(index) => {
			setToggleState(index);
			setCategory(categories[index - 1]); // Set category based on selected tab
		},
		[categories]
	);

	const postPreviewFields =
		"post_title,post_image_small,post_description,date_created,author_name,author_image,category_name";

	// Fetch posts
	useEffect(() => {
		const getPosts = async () => {
			try {
				const data = await getPostsPreview();
				setPosts(data); // Update the state with fetched posts
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		getPosts();
	}, []);

	// Fetch function to get post data
	async function getPostsPreview() {
		try {
			const params = { fields: postPreviewFields };
			const response = await directus.get("blog_post", { params });

			const posts = response.data.data;

			// Map the posts for rendering
			return posts.map((post) => ({
				id: post.id,
				image: post.post_image_small
					? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}${post.post_image_small}`
					: "",
				date: new Date(post.date_created).toLocaleDateString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric",
				}),
				title: post.post_title,
				description: post.post_description,
				authorImage: post.author_image
					? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}${post.author_image}`
					: AUTHOR,
				author: post.author_name || "Unknown Author",
				category: post.category_name || "Uncategorized",
			}));
		} catch (error) {
			console.error("Error in getPostsPreview:", error);
			return [];
		}
	}

	// Memoize filtered posts to avoid re-computation
	const filteredPosts = useMemo(() => {
		return category === "All"
			? posts
			: posts.filter((post) => post.category === category);
	}, [category, posts]);

	return (
		<>
			<div className={styles.hero}>
				<div className={styles.content}>
					<div className={styles.blogTextContainer}>
						<div className={styles.blogText}>
							<h1 className={styles.blogTitle}>
								Node.js Architecture From A to Z: What Makes It a Top Choice
							</h1>
						</div>
						<p className={styles.blogDescription}>
							Smart contracts are an integral part of the Ethereum blockchain.
							This technology provides users with the possibility to create
							unique digital agreements. These contracts can execute their terms
						</p>
					</div>

					<div className={styles.authorContainer}>
						<Image
							className={styles.authorAvatar}
							src={AUTHOR} // Use the imported image directly
							alt="Author Avatar"
							width={50} // Specify width and height for optimization
							height={50}
						/>
						<div className={styles.name}>Ronald Richards</div>
						<Image
							className={styles.dot}
							src={DOT} // Use the imported image directly
							alt="Dot separator"
							width={10} // Specify width and height for optimization
							height={10}
						/>
						<div className={styles.date}>12, August 2024</div>
					</div>
				</div>
			</div>

			<section className={styles.postsSection}>
				<div className={styles.postsContainer}>
					<div className={styles.postTitleContainer}>
						<div className={styles.postTitleText}>
							<h1 className={styles.postTitle}>Recent blog posts</h1>
							<p className={styles.postDescription}>
								Stay ahead of the curve with our latest insights, trends, and
								developments in the world of Web3 & blockchain.
							</p>
						</div>
						<div className={styles.tabs}>
							{categories.map((tab, index) => (
								<button
									key={index}
									className={
										toggleState === index + 1
											? `${styles.tab} ${styles.activeTab}`
											: styles.tab
									}
									onClick={() => toggleTab(index + 1)}
								>
									{tab}
								</button>
							))}
						</div>
					</div>

					<div
						className={
							toggleState === 1
								? `${styles.cardGrid} ${styles.activeCardGrid}`
								: styles.cardGrid
						}
					>
						{filteredPosts.map((post, index) => (
							<PostCard key={index} {...post} /> // Ensure correct key usage
						))}
					</div>
				</div>
			</section>

			<ContactSection />
		</>
	);
}

export default Blog;
