import styles from './PostCard.module.css';

// eslint-disable-next-line react/prop-types
function PostCard({ image, date, title, description, authorImg, author, category }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={image} alt={title} />
                <span className={styles.cardCategory}>{category}</span>
            </div>
            <div className={styles.cardContent}>
                <p className={styles.cardDate}>{date}</p>
                <div className={styles.cardText}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
                <div className={styles.cardAuthor}>
                    <img
                        src={authorImg}
                        alt={author}
                        className={styles.authorAvatar}
                    />
                    <p>{author}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard
