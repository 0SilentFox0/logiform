import Link from "next/link";
import styles from "./Card.module.css";
import OptimizedImage from "@/components/layout/OptimazedImage";

// eslint-disable-next-line react/prop-types
function Card({ slug, title, description, image, categories, imageHeight }) {
	const handleClick = () => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	};

	return (
		<div className={styles.card}>
			<div className={`${styles.imageWrapper} ${imageHeight}`}>
				<OptimizedImage
					src={image.id || image}
					width={580}
					height={680} // Provide height to prevent layout shifts
					alt={title}
					className={styles.image}
				/>
				<div className={styles.overlayTabs}>
					{categories.map((category, index) => (
						<button className={styles.cardCategory} key={index}>
							{category + " "}
						</button>
					))}
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
