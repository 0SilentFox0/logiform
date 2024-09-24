"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "@/components/Blog/Blog.module.css";
import AUTHOR from "@/assets/blogImages/author.png";
import DOT from "@/assets/blogImages/dot.svg";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard"; // Ensure this is the correct import
import Image from "next/image"; // Ensure this is the correct import
import { BlogGateway } from "@/api/blog/blog-gateway";
import OptimizedImage from "@/components/layout/OptimazedImage";

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
			<div className={styles.hero}>
				<div className={styles.content}>
					<div className={styles.blogTextContainer}>
						<div className={styles.blogText}>
							<h1 className={styles.blogTitle}>{posts[0]?.title}</h1>
						</div>
						<p className={styles.blogDescription}>{posts[0]?.description}</p>
					</div>

					<div className={styles.authorContainer}>
						<OptimizedImage
							className={styles.authorAvatar}
							src={posts[0]?.author.image} // Use the imported image directly
							alt="Author Avatar"
							width={50} // Specify width and height for optimization
							height={50}
						/>
						<div className={styles.name}> {posts[0]?.author.name}</div>
						<Image
							className={styles.dot}
							src={DOT} // Use the imported image directly
							alt="Dot separator"
							width={10} // Specify width and height for optimization
							height={10}
						/>
						<div className={styles.date}>
							{" "}
							{new Date(posts[0]?.date_created).toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</div>
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
