import Link from "next/link"; // Use Next.js' Link component
import Image from "next/image";
import styles from "./PostCard.module.css";

function PostCard({
	id,
	image,
	date,
	title,
	description,
	authorImage,
	author,
	category,
}) {
	const handleClick = () => {
		window.scrollTo(0, 0); // Scroll to the top on navigation
	};

	return (
		<Link href={`/blog/${id}`} passHref>
			<div className={styles.cardWrapperLink} onClick={handleClick}>
				<div className={styles.card}>
					<div className={styles.cardImage}>
						<Image
							src={image}
							alt={title}
							width={400} // Specify the appropriate width
							height={250} // Specify the appropriate height
							className={styles.image}
						/>
						<span className={styles.cardCategory}>{category}</span>
					</div>
					<p className={styles.cardDate}>{date}</p>
					<div className={styles.cardContent}>
						<div className={styles.cardText}>
							<h3 className={styles.cardTitle}>{title}</h3>
							<p className={styles.cardDescription}>{description}</p>
						</div>
						<div className={styles.cardAuthor}>
							<Image
								src={authorImage}
								alt={author}
								width={40} // Specify the appropriate width for the avatar
								height={40} // Specify the appropriate height for the avatar
								className={styles.authorAvatar}
							/>
							<p>{author}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PostCard;
