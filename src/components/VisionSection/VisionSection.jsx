import styles from './VisionSection.module.css'

function VisionSection() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logos}>
                    <span className={styles.nimiqLogo}>
                        <img src="/src/assets/companyLogos/nimiq.png" alt="nimiq logo" />
                    </span>
                    <img src="/src/assets/companyLogos/mythical.png" alt="mythical logo" />

                    <img src="/src/assets/companyLogos/nexo.png" alt="nexo logo" />
                    <img src="/src/assets/companyLogos/coinbound.png" alt="coinbound logo" />
                    <img src="/src/assets/companyLogos/halborn.svg" alt="halborn logo" />
                    <img src="/src/assets/companyLogos/edmundo.png" alt="edmundo logo" />
                    <img src="/src/assets/companyLogos/deedy.png" alt="deedy logo" />
                    <img src="/src/assets/companyLogos/tron.png" alt="tron logo" />
                    <img src="/src/assets/companyLogos/okx.png" alt="okx logo" />

                    <img src="/src/assets/companyLogos/etoro.png" alt="etoro logo" />
                    <span className={styles.kionlyLogo}>
                        <img src="/src/assets/companyLogos/kionly.png" alt="kionly logo" />
                    </span>

                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>Your Vision, Our Code</h2>
                    <p>
                        Focus on growing your business and community while we handle every aspect of your product, from industry best practices to coding.
                    </p>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <div className={styles.featureImage}>
                            <img src="/src/assets/cardsImages/medal.svg" alt="okx logo" />
                        </div>
                        <div className={styles.featureInfo}>
                            <h3>Web3 Experts</h3>
                            <p>A skilled team of blockchain developers, smart contract engineers, and UI/UX designers dedicated to Web3.</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureImage}>
                            <img src="/src/assets/cardsImages/lamp.svg" alt="okx logo" />
                        </div>
                        <div className={styles.featureInfo}>
                            <h3>End-to-End Solutions</h3>
                            <p>From concept to deployment, we handle every aspect of your Web3 development journey.</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureImage}>
                            <img src="/src/assets/cardsImages/graph.svg" alt="okx logo" />
                        </div>
                        <div className={styles.featureInfo}>
                            <h3>Growth Focused</h3>
                            <p>We’re not just builders; we’re your strategic partners, helping you navigate the Web3 landscape and achieve your goals.</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureImage}>
                            <img src="/src/assets/cardsImages/lock.svg" alt="okx logo" />
                        </div>
                        <div className={styles.featureInfo}>
                            <h3>Security First</h3>
                            <p>We prioritize the security and integrity of your decentralized applications, ensuring robust protection and reliability.</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureImage}>
                            <img src="/src/assets/cardsImages/target.svg" alt="okx logo" />
                        </div>
                        <div className={styles.featureInfo}>
                            <h3>Proven Results</h3>
                            <p>We’ve successfully delivered a wide range of Web3 projects, from DeFi platforms to NFT marketplaces and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.statisticsContainer}>
                    <div className={styles.statistics}>
                        <div className={styles.statistic}>
                            <div className={styles.numbersOfPeople}>
                                <h2>20+</h2>
                                <p>People Onboard</p>
                            </div>
                        </div>
                        <div className={styles.statistic}>
                            <div className={styles.numbersOfProjects}>
                                <h2>50+</h2>
                                <p>Successfully Delivered Projects</p>
                            </div>
                        </div>
                        <div className={styles.statistic}>
                            <div className={styles.numbersOfClients}>
                                <h2>60%</h2>
                                <p>Clients Who Came To Us By Referrals</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statisticsInfo}>
                        <p>Logiform streamlines the development process, delivering clean, secure, and scalable code that brings your vision to life. Our expertise tackles projects of any complexity.</p>

                        <div className={styles.rating}>
                            <div className={styles.stars}>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>

                            <button className={styles.contactButton}>Contact us</button>
                        </div>
                    </div>
                </div>
                <div className={styles.line} />

            </div>

            <div className={styles.footerContainer}>
                <div className={styles.footer}>
                    <p>As an agile team
                        <div className={styles.avatars}>
                            <img src='/src/assets/avatars/ava1.png' /><img src='/src/assets/avatars/ava2.png' /><img src='/src/assets/avatars/ava3.png' />
                        </div>
                        we cut through red tape and move quickly.
                    </p>
                    <p> We are dedicated, transparent, communicate clearly and honestly.</p>
                    <p>Proudly reliable, we tackle challenges with strong technical skills</p>
                    <p>and market expertise, delivering effective results
                        <div className={styles.doubleStars}>
                            <img src='/src/assets/avatars/Star.png' />
                        </div>
                    </p>
                </div>
            </div>

        </section>
    )
}

export default VisionSection