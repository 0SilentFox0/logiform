import { useState } from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";

import styles from './HomeSection.module.css'

function HomeSection() {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return (
        <div className={`${styles.home} ${isOverlayOpen ? styles.noPadding : ''}`}>
            <Header setIsOverlayOpen={setIsOverlayOpen} />
            <HeroSection />
        </div>
    );
}

export default HomeSection
