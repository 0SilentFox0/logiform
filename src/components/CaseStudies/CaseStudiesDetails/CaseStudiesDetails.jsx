import styles from './CaseStudiesDetails.module.css'

import ContactSection from '../../layout/ContactSection/ContactSection';

import PrevButtonImg from '../../../assets/caseStudiesDetailsImg/arrow.svg'
import Binance from '../../../assets/caseStudiesDetailsImg/binance.svg'
import Ethereum from '../../../assets/caseStudiesDetailsImg/Ethereum.svg'
import Python from '../../../assets/caseStudiesDetailsImg/python.svg'
import Nest from '../../../assets/caseStudiesDetailsImg/Nest js.svg'

import Phone from '../../../assets/caseStudiesDetailsImg/phoneImg.png'

import { Link, useParams } from 'react-router-dom';

function CaseStudiesDetails() {
    const { id } = useParams();

    const caseStudies = {
        1: {
            title: "TeXifyMath",
            description: "Computer vision virtual basketball assistant for tracking and analyzing professional basketball games.",
            details: "Detailed information about TeXifyMath...",
        },
        2: {
            title: "Blockify",
            description: "This is the description for Blockify.",
            details: "Detailed information about Blockify...",
        },
        3: {
            title: "TeXifyMath",
            description: "This is the description for TeXifyMath.",
            details: "Detailed information about TeXifyMath...",
        },
        4: {
            title: "Blockify",
            description: "This is the description for Blockify.",
            details: "Detailed information about Blockify...",
        },
        5: {
            title: "TeXifyMath",
            description: "This is the description for TeXifyMath.",
            details: "Detailed information about TeXifyMath...",
        },
        6: {
            title: "Blockify",
            description: "This is the description for Blockify.",
            details: "Detailed information about Blockify...",
        },
        7: {
            title: "TeXifyMath",
            description: "This is the description for TeXifyMath.",
            details: "Detailed information about TeXifyMath...",
        },
        8: {
            title: "Blockify",
            description: "This is the description for Blockify.",
            details: "Detailed information about Blockify...",
        },
    };

    const caseStudy = caseStudies[id];

    if (!caseStudy) {
        return <div>Case study not found.</div>;
    }

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.navigationButtons}>
                        <Link to={'/case-studies'} className={styles.prevPageButton}><img src={PrevButtonImg} /></Link>
                        <div className={styles.tabsWrapper}>
                            <button className={styles.tabButton}>Blockchain</button>
                            <button className={styles.tabButton}>Blockchain</button>
                        </div>
                    </div>

                    <div className={styles.projectTitle}>
                        <h1>{caseStudy.title}</h1>
                    </div>

                    <div className={styles.projectDescription}>
                        <p>{caseStudy.description}</p>
                        <div className={styles.actionButtons}>
                            <button className={styles.actionButton}><img src={Binance} /></button>
                            <button className={styles.actionButton}><img src={Ethereum} /></button>
                            <button className={styles.actionButton}><img src={Python} /></button>
                            <button className={styles.actionButton}><img src={Nest} /></button>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.detailsSection}>
                <div className={styles.detailsContainer}>
                    <div className={styles.mainText}>
                        <p>Hiroo, an innovative recruiting app, aimed to revolutionize job discovery and HR communication. Our task was to conduct a thorough competitor analysis and optimize the user flow through smooth mockups and an interactive prototype for testing.</p>
                    </div>

                    <div className={styles.aboutProject}>
                        <img className={styles.aboutProjectImage} src={Phone} />

                        <div className={styles.textContent}>
                            <div className={styles.titleAndText}>
                                <h2>Challenges</h2>
                                <p>
                                    The challenge involved improving job discovery and HR communication in a competitive market.
                                    Crafting a user-friendly interface required addressing complexities in the recruitment process and providing a seamless experience.
                                    Thorough competitor analysis was crucial to identify key areas for enhancement.
                                </p>
                            </div>

                            <div className={styles.titleAndText}>
                                <h2>Solutions</h2>
                                <p>
                                    Our solution began with a comprehensive competitor analysis to understand market dynamics.
                                    Smooth mockups were designed, and a detailed interactive prototype was developed, allowing for rigorous user testing.
                                    The final design optimized job discovery and HR communication, ensuring a user-friendly interface and a competitive edge.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imagesWrapper}>
                        <div className={styles.largeImg}><img src={Phone} /></div>

                        <div className={styles.images}>
                            <div className={styles.smallImg}><img src={Phone} /></div>
                            <div className={styles.smallImg}><img src={Phone} /></div>
                        </div>
                    </div>

                    <ContactSection />
                </div>

            </section>

        </>
    );
}

export default CaseStudiesDetails;