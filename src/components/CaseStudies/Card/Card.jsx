import { Link } from 'react-router-dom';
import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({ id, title, description, image, imageHeight }) {

    const handleClick = () => {
        window.scrollTo(0, 0);  // Прокрутка к началу страницы
    };

    return (
        <div className={styles.card}>
            <div className={`${styles.imageWrapper} ${imageHeight}`} >
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
                <Link to={`/case-studies/${id}`}><button className={styles.viewButton} onClick={handleClick}>View</button></Link>
            </div>
        </div>
    );
}

export default Card;