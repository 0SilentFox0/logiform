"use client";

import { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.css';
import ARROW_UP from "@/assets/FAQimages/arrowUp.svg";
import Image from 'next/image';

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1200) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div 
                className={`${styles.backToTopButton} ${backToTopButton ? styles.show : ''}`} 
                onClick={scrollUp}
            >
                <Image  className={styles.arrow} src={ARROW_UP} alt="Back to top" width={25} height={25} />
            </div>
        </>
    );
};

export default BackToTopButton;