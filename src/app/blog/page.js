"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "@/components/Blog/Blog.module.css";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard";
import BlogHero from "@/components/Blog/BlogHero";
import { BlogGateway } from "@/api/blog/blog-gateway";

function Blog() {
	const [posts, setPosts] = useState([]);
	const [toggleState, setToggleState] = useState(1);
	const [category, setCategory] = useState("All");
	const [categories, setCategories] = useState(["All"]);

	// Memoize the toggle function to avoid re-creating the function on every render
	const toggleTab = useCallback(
		(index) => {
			setToggleState(index);
			setCategory(categories[index]); // Set category based on selected tab
		},
		[categories]
	);

	// Fetch posts and categories
	useEffect(() => {
		const getPosts = async () => {
			try {
				const data = await BlogGateway.getPostsPreview("");

				// Extract unique categories from posts and update the state
				const uniqueCategories = new Set(["All"]); // Initialize with "All"
				data.forEach((item) => {
					item.categories.forEach((cat) => {
						uniqueCategories.add(cat); // Add each category to the Set
					});
				});

				setPosts(data); // Update posts state
				setCategories([...uniqueCategories]); // Convert Set to an array and update categories
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		getPosts();
	}, []);

	const filteredPosts = useMemo(() => {
		return category === "All"
			? posts
			: posts.filter((post) => post.categories.includes(category));
	}, [category, posts]);

	return (
		<>
			<BlogHero {...posts[0]} />

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
										toggleState === index
											? `${styles.tab} ${styles.activeTab}`
											: styles.tab
									}
									onClick={() => toggleTab(index)}
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
							<PostCard key={index} {...post} />
						))}
					</div>
				</div>
			</section>

			<ContactSection />
		</>
	);
}

export default Blog;
