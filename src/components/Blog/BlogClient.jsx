"use client";
import { useState, useCallback, useMemo } from "react";
import styles from "@/components/Blog/Blog.module.css";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard";

function BlogClient({ posts, categories }) {
	const [toggleState, setToggleState] = useState(1);
	const [category, setCategory] = useState("All");

	// Memoize the toggle function to avoid re-creating the function on every render
	const toggleTab = useCallback(
		(index) => {
			setToggleState(index);
			setCategory(categories[index]);
		},
		[categories]
	);

	// Filter posts based on selected category
	const filteredPosts = useMemo(() => {
		return category === "All"
			? posts
			: posts.filter((post) => post.categories.includes(category));
	}, [category, posts]);

	return (
		<>
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

export default BlogClient;
