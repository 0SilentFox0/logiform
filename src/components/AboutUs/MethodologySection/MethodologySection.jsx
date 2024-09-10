import styles from './MethodologySection.module.css'

import MethodologyImg from '../../../assets/aboutUsImages/methodologyImg.png'
import { useState } from 'react';

export default function MethodologySection() {

    const [openMethodology, setOpenMethodology] = useState(0); // Track open/close state for each FAQ item

    const toggleMethodology = (index) => {
        setOpenMethodology(openMethodology === index ? null : index); // Toggle the clicked FAQ
    };

    const methodologies = [
        {
            question: "Clarifying Needs & Requirements",
            answer: "We leverage our 100+ project experience to ensure we understand the market and your specific needs. We help you find the most efficient and budget-friendly solution."
        },
        {
            question: "Concept & Strategy",
            answer: "We leverage our 100+ project experience to ensure we understand the market and your specific needs. We help you find the most efficient and budget-friendly solution."
        },
        {
            question: "Design & Development",
            answer: "We leverage our 100+ project experience to ensure we understand the market and your specific needs. We help you find the most efficient and budget-friendly solution."
        },
        {
            question: "Final Review & Fixes",
            answer: "We leverage our 100+ project experience to ensure we understand the market and your specific needs. We help you find the most efficient and budget-friendly solution."
        },
        {
            question: "Product Launch & Ongoing Support",
            answer: "We leverage our 100+ project experience to ensure we understand the market and your specific needs. We help you find the most efficient and budget-friendly solution."
        },
    ];

    return (
        <section className={styles.methodologySection}>
            <div className={styles.methodologyTitle}>
                <h1>Our Methodology</h1>
                <p>Tailored Solutions from Needs Assessment to Launch and Ongoing Support.</p>
            </div>

            <div className={styles.methodologyContent}>
                <div className={styles.methodologyCards}>
                    {methodologies.map((met, index) => (
                        <div key={index} className={`${styles.methodologyCard} ${openMethodology === index ? styles.open : ''}`} onClick={() => toggleMethodology(index)}>
                            <div className={`${styles.cardContent} ${openMethodology === index ? styles.open : ''}`}>
                                <div className={styles.cardQuestion}>
                                    <span className={styles.question}>{met.question}</span>
                                </div>
                                {openMethodology === index && (
                                    <div className={styles.cardAnswer}>
                                        <p>{met.answer}</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.pictureContainer}>
                    <img className={styles.picture} src={MethodologyImg} alt='Methodology picture' />
                </div>
            </div>
        </section>
    )
}
