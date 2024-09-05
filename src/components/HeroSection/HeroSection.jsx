import styles from './HeroSection.module.css'
import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// eslint-disable-next-line react/prop-types
function HeroSection({ title, description, imageSrc, videoSrc, mobileVideoSrc }) {
    const [currentVideo, setCurrentVideo] = useState(videoSrc);

    useEffect(() => {
        const updateVideoSource = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 968) {
                setCurrentVideo(mobileVideoSrc);
            } else {
                setCurrentVideo(videoSrc);
            }
        };

        updateVideoSource(); // Run on component mount
        window.addEventListener('resize', updateVideoSource);

        return () => {
            window.removeEventListener('resize', updateVideoSource);
        };
    }, [videoSrc, mobileVideoSrc]);

    return (
        <section className={styles.hero}>
            {currentVideo && (
                <video key={currentVideo} autoPlay loop muted className={styles.backgroundVideo}>
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={styles.contactButton}>
                    <AnchorLink href='#contact' className={styles.anchorContactButton}>
                            Contact us
                    </AnchorLink>
                </div>
            </div>

            {imageSrc && (
                <div className={styles.image}>
                    <img src={imageSrc} alt='Hero Image' />
                </div>
            )}
        </section>
    )
}

export default HeroSection;