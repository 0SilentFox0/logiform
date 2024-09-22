import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";

// eslint-disable-next-line react/prop-types
function Card({ slug, title, description, image, category, imageHeight }) {
	const handleClick = () => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	};

	return (
		<div className={styles.card}>
			<div className={`${styles.imageWrapper} ${imageHeight}`}>
				<Image
					src={image}
					width={200}
					height={200} // Provide height to prevent layout shifts
					alt={title}
					className={styles.image}
					priority // Optional, loads the image faster (for key components)
				/>
				<div className={styles.overlayTabs}>
					{/* Assuming these buttons will be used for filtering or navigation */}
					<button>{category}</button>
					<button>{category}</button>
					<button>{category}</button>
					<button>{category}</button>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.text}>
					<h3>{title}</h3>
					<p className={styles.description}>{description}</p>
				</div>
				{/* Use Next.js Link instead of react-router-dom */}
				<Link href={`/case-studies/${slug}`} passHref onClick={handleClick}>
					<span className={styles.viewButton}>View</span>
				</Link>
			</div>
		</div>
	);
}

export default Card;
