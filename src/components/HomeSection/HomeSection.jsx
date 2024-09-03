import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";

import styles from './HomeSection.module.css'

function HomeSection() {


    return (
        <div className={`${styles.home} `}>
            <div className={styles.headerWrapper}>
                <Header />
            </div>
            <HeroSection />
        </div>
    );
}

export default HomeSection
