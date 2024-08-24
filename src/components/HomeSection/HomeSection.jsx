//import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";

import styles from './HomeSection.module.css'

function HomeSection() {
    return (
        <div className={styles.home}>
            {/* <Header /> */}
            <HeroSection />
        </div>
    );
}

export default HomeSection
