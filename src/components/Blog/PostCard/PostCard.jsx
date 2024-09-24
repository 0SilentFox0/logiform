import Link from "next/link"; // Use Next.js' Link component
import styles from "./PostCard.module.css";
import OptimizedImage from "@/components/layout/OptimazedImage";

function PostCard({
	slug,
	image,
	date_created,
	title,
	description,
	author,
	categories,
}) {
	return (
		<Link className={styles.cardWrapperLink} href={`/blog/${slug}`} passHref>
			<div className={styles.cardWrapperLink}>
				<div className={styles.card}>
					<div className={styles.cardImage}>
						<OptimizedImage
							src={image.id || image}
							alt={title}
							width={400}
							height={250}
							className={styles.image}
						/>
						<div className={styles.cardCategories}>
							{categories.map((category, index) => (
								<span className={styles.cardCategory} key={index}>
									{category + " "}
								</span>
							))}
						</div>
					</div>
					<p className={styles.cardDate}>
						{new Date(date_created).toLocaleDateString("en-US", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</p>
					<div className={styles.cardContent}>
						<div className={styles.cardText}>
							<h3 className={styles.cardTitle}>{title}</h3>
							<p className={styles.cardDescription}>{description}</p>
						</div>
						<div className={styles.cardAuthor}>
							<OptimizedImage
								src={author.image}
								alt={author.name}
								width={40}
								height={40}
								className={styles.authorAvatar}
							/>

							<p>{author.name}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PostCard;
