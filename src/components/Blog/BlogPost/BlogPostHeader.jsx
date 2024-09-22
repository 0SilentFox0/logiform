"use client";

import styles from "@/components/Blog/BlogPost/BlogPost.module.css";
import Link from "next/link";
import Image from "next/image";
import OptimizedImage from "@/components/layout/OptimazedImage";

import ARROW from "@/assets/blogImages/arrow.png";
import DOT from "@/assets/blogImages/dot.svg";

export default function BlogPostContent({ post }) {
	const {
		date_updated,
		post_title,
		post_description,
		author_image,
		author_name,
		category_name,
	} = post;

	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<Link href="/blog" className={styles.arrow}>
					<Image src={ARROW} alt="Back to blog" />
				</Link>

				<button className={styles.tabButton}>{category_name}</button>

				<div className={styles.blogTextContainer}>
					<div className={styles.blogText}>
						<h1 className={styles.blogTitle}>{post_title}</h1>
					</div>
					<p className={styles.blogDescription}>{post_description}</p>
				</div>

				<div className={styles.authorContainer}>
					<OptimizedImage
						src={author_image.id}
						alt={author_name}
						width={40}
						height={40}
						className={styles.authorAvatar}
					/>
					<div className={styles.name}>{author_name}</div>
					<Image className={styles.dot} src={DOT} alt="Dot" />
					<div className={styles.date}>
						{" "}
						{new Date(date_updated).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
