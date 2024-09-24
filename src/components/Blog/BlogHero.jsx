import styles from "@/components/Blog/Blog.module.css";
import DOT from "@/assets/blogImages/dot.svg";
import Image from "next/image";
import OptimizedImage from "@/components/layout/OptimazedImage";

export default function BlogHero({ title, description, author, date_created }) {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.content}>
					<div className={styles.blogTextContainer}>
						<div className={styles.blogText}>
							<h1 className={styles.blogTitle}>{title}</h1>
						</div>
						<p className={styles.blogDescription}>{description}</p>
					</div>

					<div className={styles.authorContainer}>
						<OptimizedImage
							className={styles.authorAvatar}
							src={author?.image}
							alt="Author Avatar"
							width={50}
							height={50}
						/>
						<div className={styles.name}> {author?.name}</div>
						<Image
							className={styles.dot}
							src={DOT}
							alt="Dot separator"
							width={10}
							height={10}
						/>
						<div className={styles.date}>
							{new Date(date_created).toLocaleDateString("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
