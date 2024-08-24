import styles from './FAQSection.module.css'

import ARROW_UP from '../../assets/FAQimages/arrowUp.svg'
import ARROW_DOWN from '../../assets/FAQimages/arrowDown.svg'

import PICTURE from '../../assets/FAQimages/picture.png'

function FAQSection() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>FAQ</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <div className={styles.firstCard}>
                        <div className={styles.firstCardContent}>
                            <div className={styles.cardText}>
                                <h2>What is Web3 development, and how does it differ from traditional web development?</h2>
                                <p>Web3 development takes web technologies to a new level by embracing decentralized, blockchain-based systems. Unlike traditional web development, Web3 focuses on building apps that leverage blockchain, smart contracts, and decentralized protocols, ensuring trustless, transparent, and secure interactions. In Web3, smart contracts—self-executing code—automate processes, reducing the need for intermediaries and central authorities, thereby increasing trust.</p>
                            </div>
                            <div className={styles.firstCardImage}>
                                <img src={ARROW_UP} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h2>How long does it take to launch a Web3 solution?</h2>
                            </div>
                            <div className={styles.cardImage}>
                                <img src={ARROW_DOWN} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h2>What is the cost of launching a Web3 solution?</h2>
                            </div>
                            <div className={styles.cardImage}>
                                <img src={ARROW_DOWN} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h2>How is the security of Web3 applications ensured?</h2>
                            </div>
                            <div className={styles.cardImage}>
                                <img src={ARROW_DOWN} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h2>Can existing apps be migrated to a Web3 architecture?</h2>
                            </div>
                            <div className={styles.cardImage}>
                                <img src={ARROW_DOWN} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardText}>
                                <h2>Do you work exclusively on Web3 projects?</h2>
                            </div>
                            <div className={styles.cardImage}>
                                    <img src={ARROW_DOWN} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.pictureContainer}>
                    <img className={styles.picture} src={PICTURE} alt='FAQ picture'/>
                </div>
            </div>
        </section>
    )
}

export default FAQSection