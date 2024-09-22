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
		post_image_small,
		date_updated,
		post_title,
		post_description,
		author_image,
		author_name,
		category_name,
		content,
		relatedPosts,
		readingTime,
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
								<div className={styles.time}>{readingTime}</div>
								<h1>{post_title}</h1>
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

					{relatedPosts && relatedPosts.length ? (
						<div className={styles.latestArticle}>
							<div className={styles.articlesTitle}>
								<h1>Latest articles</h1>
							</div>
							<div className={styles.articles}>
								{relatedPosts.map((relatedPost, index) => (
									<PostCard key={index} {...relatedPost} />
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
