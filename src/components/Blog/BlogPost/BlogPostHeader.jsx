"use client";

import styles from "@/components/Blog/BlogPost/BlogPost.module.css";
import Link from "next/link";
import Image from "next/image";
import OptimizedImage from "@/components/layout/OptimazedImage";

import ARROW from "@/assets/blogImages/arrow.png";
import DOT from "@/assets/blogImages/dot.svg";

export default function BlogPostContent({ post }) {
	const { date_created, title, description, author, categories } = post;

	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<Link href="/blog" className={styles.arrow}>
					<Image src={ARROW} alt="Back to blog" width={28} height={28} />
				</Link>

				<div className={styles.tabButtons}>
					{categories && categories.length
						? categories.map((category, index) => (
								<button className={styles.tabButton} key={index}>
									{category + " "}
								</button>
						  ))
						: ""}
				</div>

				<div className={styles.blogTextContainer}>
					<div className={styles.blogText}>
						<h1 className={styles.blogTitle}>{title}</h1>
					</div>
					<p className={styles.blogDescription}>{description}</p>
				</div>

				<div className={styles.authorContainer}>
					<OptimizedImage
						src={author.image.id}
						alt={author.name}
						width={40}
						height={40}
						className={styles.authorAvatar}
					/>
					<div className={styles.name}>{author.name}</div>
					<Image
						className={styles.dot}
						src={DOT}
						alt="Dot"
						width={8}
						height={8}
					/>
					<div className={styles.date}>
						{" "}
						{new Date(date_created).toLocaleDateString("en-US", {
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
