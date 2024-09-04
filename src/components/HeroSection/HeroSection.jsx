import styles from './HeroSection.module.css'

// import gif from '../../assets/gif.gif'
import AnchorLink from 'react-anchor-link-smooth-scroll';

// eslint-disable-next-line react/prop-types
function HeroSection({ title, description, imageSrc }) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={styles.contactButton}>
                    <AnchorLink href='#contact' className={styles.anchor}><button>Contact us</button></AnchorLink>
                </div>
            </div>
            <div className={styles.image}>
                <img src={imageSrc} alt='Hero Image' />
            </div>
        </section>
    )
}

export default HeroSection