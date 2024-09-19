"use client";

import styles from "@/components/Blog/BlogPost/BlogPost.module.css";
import Link from "next/link";
import Image from "next/image";

import ARROW from "@/assets/blogImages/arrow.png";
import AUTHOR from "@/assets/blogImages/author.png";
import DOT from "@/assets/blogImages/dot.svg";
import Phone from "@/assets/caseStudiesDetailsImg/phoneImg.png";
import LINKEDIN from "@/assets/blogImages/linkedin.svg";
import TWITTER from "@/assets/blogImages/twitter.svg";
import INSTAGRAM from "@/assets/blogImages/instagram.svg";

import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard";

export default function BlogPostContent({ content }) {
	return (
		<div className={styles.blogTextContainer}>
			<pre>{content}</pre>
			<div className={styles.hero}>
				<div className={styles.content}>
					<Link href="/blog" className={styles.arrow}>
						<Image src={ARROW} alt="Back to blog" />
					</Link>

					<button className={styles.tabButton}>Blockchain</button>

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
						<Image className={styles.authorAvatar} src={AUTHOR} alt="Author" />
						<div className={styles.name}>Ronald Richards</div>
						<Image className={styles.dot} src={DOT} alt="Dot" />
						<div className={styles.date}>12, August 2024</div>
					</div>
				</div>
			</div>

			{/* Rest of the component remains the same */}

			<section className={styles.postSection}>
				<div className={styles.postContainer}>
					<div className={styles.postContent}>
						<div className={styles.postTableContainer}>
							<div className={styles.postTable}>
								<h3 className={styles.tableName}>Table of Content</h3>
								<div className={styles.line} />
								<div className={styles.tableInfo}>
									<h4 className={styles.tableTitle}>
										Node.js Architecture From A to Z
									</h4>
									<p>Part 1</p>
									<p>Part 1</p>
									<p>Part 1</p>
									<p>Part 1</p>
									<p>Part 1</p>
									<p>Part 1</p>
								</div>
							</div>
						</div>
						<div className={styles.postCases}>
							<div className={styles.casesTitle}>
								<div className={styles.time}>6 min 20 sec</div>
								<h1>
									Node.js Architecture From A to Z: What Makes It a Top Choice
								</h1>
							</div>

							<div className={styles.casesValueSection}>
								<h2 className={styles.casesSubtitle}>
									Node.js Architecture From A to Z: What Makes It a Top Choice
								</h2>
								<p className={styles.casesText}>
									Our solution began with a comprehensive competitor analysis to
									understand market dynamics. Smooth mockups were designed, and
									a detailed interactive prototype was developed, allowing for
									rigorous user testing. The final design optimized job
									discovery and HR communication, ensuring a user-friendly
									interface and a competitive edge. Our solution began with a
									comprehensive competitor analysis to understand market
									dynamics. Smooth mockups were designed, and a detailed
									interactive prototype was developed, allowing for rigorous
									user testing. The final design optimized job discovery and HR
									communication, ensuring a user-friendly interface and a
									competitive edge.Our solution began with a comprehensive
									competitor analysis to understand market dynamics. Smooth
									mockups were designed, and a detailed interactive prototype
									was developed, allowing for rigorous user testing. The final
									design optimized job discovery and HR communication, ensuring
									a user-friendly interface and a competitive edge.
								</p>
							</div>
							<div className={styles.casesValueSection}>
								<h2 className={styles.casesSubtitle}>
									Node.js Architecture From A to Z: What Makes It a Top Choice
								</h2>
								<Image src={Phone} className={styles.casesImage} />
							</div>
							<div className={styles.casesValueSection}>
								<h2 className={styles.casesSubtitle}>
									Node.js Architecture From A to Z: What Makes It a Top Choice
								</h2>
								<p className={styles.casesText}>
									Our solution began with a comprehensive competitor analysis to
									understand market dynamics. Smooth mockups were designed, and
									a detailed interactive prototype was developed, allowing for
									rigorous user testing. The final design optimized job
									discovery and HR communication, ensuring a user-friendly
									interface and a competitive edge. Our solution began with a
									comprehensive competitor analysis to understand market
									dynamics. Smooth mockups were designed, and a detailed
									interactive prototype was developed, allowing for rigorous
									user testing. The final design optimized job discovery and HR
									communication, ensuring a user-friendly interface and a
									competitive edge.Our solution began with a comprehensive
									competitor analysis to understand market dynamics. Smooth
									mockups were designed, and a detailed interactive prototype
									was developed, allowing for rigorous user testing. The final
									design optimized job discovery and HR communication, ensuring
									a user-friendly interface and a competitive edge.
								</p>
							</div>
						</div>
						<div className={styles.postShare}>
							<h3>Share</h3>
							<div className={styles.shareLinks}>
								<Image src={LINKEDIN} />
								<Image src={TWITTER} />
								<Image src={INSTAGRAM} />
							</div>
						</div>
					</div>

					<div className={styles.latestArticle}>
						<div className={styles.articlesTitle}>
							<h1>Latest articles</h1>
						</div>
						<div className={styles.articles}>
							{[content, content, content].map((card, index) => (
								<PostCard key={index} {...card} />
							))}
						</div>
					</div>
				</div>
				<ContactSection />
			</section>
		</div>
	);
}
