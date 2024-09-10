import styles from './AboutUsHeroSection.module.css'

import { useEffect, useState } from 'react';

import desktopVideo from '../../../assets/fullVersion.MOV'
import mobileVideo from '../../../assets/mobile.MOV'

function AboutUsHeroSection() {

    const [currentVideo, setCurrentVideo] = useState(desktopVideo);

    useEffect(() => {
        const updateVideoSource = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 968) {
                setCurrentVideo(mobileVideo);
            } else {
                setCurrentVideo(desktopVideo);
            }
        };

        updateVideoSource(); // Run on component mount
        window.addEventListener('resize', updateVideoSource);

        return () => {
            window.removeEventListener('resize', updateVideoSource);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [desktopVideo, mobileVideo]);

    return (
        <section className={styles.hero}>
            {currentVideo && (
                <video key={currentVideo} autoPlay loop muted playsInline className={styles.backgroundVideo}>
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>About Us</h1>
                    <p>Get to know our team and the values we follow</p>
                </div>
            </div>
        </section>
    );
}

export default AboutUsHeroSection;