// "use client";

import styles from "@/components/Blog/BlogPost/BlogPost.module.css";
import Image from "next/image";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard";
import BlogPostHeader from "./BlogPostHeader";

import LINKEDIN from "@/assets/blogImages/linkedin.svg";
import TWITTER from "@/assets/blogImages/twitter.svg";
import INSTAGRAM from "@/assets/blogImages/instagram.svg";

export default function BlogPostContent({ post }) {
	const {
		slug,
		image,
		date_created,
		title,
		description,
		content,
		related_posts,
		reading_time,
	} = post;

	return (
		<div className={styles.blogTextContainer}>
			<BlogPostHeader post={post} />

			<section className={styles.postSection}>
				<div className={styles.postContainer}>
					<div className={styles.postContent}>
						<div className={styles.postTableContainer}></div>
						<div className={styles.postCases}>
							<div className={styles.casesTitle}>
								<div className={styles.time}>{reading_time}</div>
								<h1>{title}</h1>
							</div>

							<div
								className={styles.casesValueSection}
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						</div>
						<div className={styles.postShare}>
							<h3>Share</h3>
							<div className={styles.shareLinks}>
								<Image src={LINKEDIN} alt="LinkedIn" />
								<Image src={TWITTER} alt="Twitter" />
								<Image src={INSTAGRAM} alt="Instagram" />
							</div>
						</div>
					</div>

					{related_posts && related_posts.length ? (
						<div className={styles.latestArticle}>
							<div className={styles.articlesTitle}>
								<h1>Latest articles</h1>
							</div>
							<div className={styles.articles}>
								{related_posts.map((relatedPost, index) => (
									<PostCard key={index} {...relatedPost.related_blogs_id} />
								))}
							</div>
						</div>
					) : (
						""
					)}
				</div>
				<ContactSection />
			</section>
		</div>
	);
}
