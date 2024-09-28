/* eslint-disable react/prop-types */
"use client";
import styles from "@/components/Blog/BlogPost/BlogPost.module.css";
import Image from "next/image";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PostCard from "@/components/Blog/PostCard/PostCard";
import BlogPostHeader from "./BlogPostHeader";

import LINKEDIN from "@/assets/blogImages/linkedin.svg";
import TWITTER from "@/assets/blogImages/twitter.svg";
import INSTAGRAM from "@/assets/blogImages/instagram.svg";

import parse from 'html-react-parser';
import Link from "next/link";
import React from 'react';

export default function BlogPostContent({ post }) {
	const { title, content, related_posts, reading_time } = post;

	const headers = [];
	const parsedContent = parse(content);
	const contentArray = Array.isArray(parsedContent) ? parsedContent : [parsedContent]; 

	const modifiedContent = contentArray.map((element, index) => {
		if (React.isValidElement(element) && (element.type === 'h1' || element.type === 'h2' || element.type === 'h3')) {
			const headerId = `header-${headers.length}`;
			headers.push({ title: element.props.children, id: headerId });
			return React.cloneElement(element, { id: headerId, key: index });
		}
		return element;
	});

	return (
		<div className={styles.blogTextContainer}>
			<BlogPostHeader post={post} />

			<section className={styles.postSection}>
				<div className={styles.postContainer}>
					<div className={styles.postContent}>
						<div className={styles.postTableContainer}>
							<div className={styles.postTable}>
								<h3 className={styles.tableName}>Table of Content</h3>
								<div className={styles.line} />
								<div className={styles.tableInfo}>
									<h4 className={styles.tableTitle}>{title}</h4>
									{headers.map((header) => (
										<Link className={styles.tablePart} key={header.id} href={`#${header.id}`}>
											<p>{header.title}</p>
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className={styles.postCases}>
							<div className={styles.casesTitle}>
								<div className={styles.time}>{reading_time}</div>
								<h1>{title}</h1>
							</div>

							<div className={styles.casesValueSection}>
								{modifiedContent} 
							</div>
						</div>
						<div className={styles.postShare}>
							<h3>Share</h3>
							<div className={styles.shareLinks}>
								<Link href='https://instagram.com/logiform'><Image src={LINKEDIN} alt="LinkedIn" /></Link>
								<Link href='https://x.com/Logiform_io'><Image src={TWITTER} alt="Twitter" /></Link>
								<Link href='https://www.linkedin.com/company/logiformio'><Image src={INSTAGRAM} alt="Instagram" /></Link>
							</div>
						</div>
					</div>

					{related_posts?.length > 0 && (
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
					)}
				</div>
				
				<ContactSection />
			</section>
		</div>
	);
}