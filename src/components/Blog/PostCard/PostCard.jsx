import Link from "next/link"; // Use Next.js' Link component
import styles from "./PostCard.module.css";
import OptimizedImage from "@/components/layout/OptimazedImage";

function PostCard({
	slug,
	post_image_small,
	date_updated,
	post_title,
	post_description,
	author_image,
	author_name,
	category_name,
}) {
	const handleClick = () => {
		window.scrollTo(0, 0); // Scroll to the top on navigation
	};

	return (
		<Link href={`/blog/${slug}`} passHref>
			<div className={styles.cardWrapperLink} onClick={handleClick}>
				<div className={styles.card}>
					<div className={styles.cardImage}>
						<OptimizedImage
							src={post_image_small}
							alt={post_title}
							width={400}
							height={250}
							className={styles.image}
						/>
						<span className={styles.cardCategory}>{category_name}</span>
					</div>
					<p className={styles.cardDate}>
						{new Date(date_updated).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</p>
					<div className={styles.cardContent}>
						<div className={styles.cardText}>
							<h3 className={styles.cardTitle}>{post_title}</h3>
							<p className={styles.cardDescription}>{post_description}</p>
						</div>
						<div className={styles.cardAuthor}>
							<OptimizedImage
								src={author_image}
								alt={author_name}
								width={40}
								height={40}
								className={styles.authorAvatar}
							/>

							<p>{author_name}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PostCard;
