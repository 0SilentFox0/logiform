import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({ title, description, image, imageHeight }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper} style={{ height: imageHeight }} >
                <img 
                    src={image} 
                    alt={title} 
                    className={styles.image} 
                    
                />
                <div className={styles.overlayTabs}>
                    <button>Front-end</button>
                    <button>Front-end</button>
                    <button>Front-end</button>
                    <button>Front-end</button>
                </div>
            </div>
            
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
                <button className={styles.viewButton}>View</button>
            </div>
        </div>
    );
}

export default Card
