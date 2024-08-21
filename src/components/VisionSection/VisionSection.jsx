import styles from './VisionSection.module.css'

import NimiqLogo from '../../assets/companyLogos/nimiq.png'
import MythicalLogo from '../../assets/companyLogos/mythical.png'
import NexoLogo from '../../assets/companyLogos/nexo.png'
import CoinboundLogo from '../../assets/companyLogos/coinbound.png'
import HalbornLogo from '../../assets/companyLogos/halborn.svg'
import EdmundoLogo from '../../assets/companyLogos/edmundo.png'
import DeedyLogo from '../../assets/companyLogos/deedy.png'
import TronLogo from '../../assets/companyLogos/tron.png'
import OKXLogo from '../../assets/companyLogos/okx.png'
import EtoroLogo from '../../assets/companyLogos/etoro.png'
import KionlyLogo from '../../assets/companyLogos/kionly.png'

import MEDAL from '../../assets/cardsImages/medal.svg'
import LAMP from '../../assets/cardsImages/lamp.svg'
import GRAPH from '../../assets/cardsImages/graph.svg'
import LOCK from '../../assets/cardsImages/lock.svg'
import TARGET from '../../assets/cardsImages/target.svg'

import AVA1 from '../../assets/avatars/ava1.png'
import AVA2 from '../../assets/avatars/ava2.png'
import AVA3 from '../../assets/avatars/ava3.png'
import STARS from '../../assets/avatars/Star.png'


function VisionSection() {
    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.logos}>
                    <div className={styles.logosSlide}>

                        <img src={NimiqLogo} alt="nimiq logo" />
                        <img src={NexoLogo} alt="nexo logo" />
                        <img src={MythicalLogo} alt="mythical logo" />
                        <img src={CoinboundLogo} alt="coinbound logo" />
                        <img src={HalbornLogo} alt="halborn logo" />
                        <img src={EdmundoLogo} alt="edmundo logo" />
                        <img src={DeedyLogo} alt="deedy logo" />
                        <img src={TronLogo} alt="tron logo" />
                        <img src={OKXLogo} alt="okx logo" />
                        <img src={EtoroLogo} alt="etoro logo" />
                        <img src={KionlyLogo} alt="kionly logo" />

                    </div>
                    <div className={styles.logosSlide}>

                        <img src={NimiqLogo} alt="nimiq logo" />
                        <img src={NexoLogo} alt="nexo logo" />
                        <img src={MythicalLogo} alt="mythical logo" />
                        <img src={CoinboundLogo} alt="coinbound logo" />
                        <img src={HalbornLogo} alt="halborn logo" />
                        <img src={EdmundoLogo} alt="edmundo logo" />
                        <img src={DeedyLogo} alt="deedy logo" />
                        <img src={TronLogo} alt="tron logo" />
                        <img src={OKXLogo} alt="okx logo" />
                        <img src={EtoroLogo} alt="etoro logo" />
                        <img src={KionlyLogo} alt="kionly logo" />

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
                                <img src={MEDAL} alt="medal" />
                            </div>
                            <div className={styles.featureInfo}>
                                <h3>Web3 Experts</h3>
                                <p>A skilled team of blockchain developers, smart contract engineers, and UI/UX designers dedicated to Web3.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureImage}>
                                <img src={LAMP} alt="lamp" />
                            </div>
                            <div className={styles.featureInfo}>
                                <h3>End-to-End Solutions</h3>
                                <p>From concept to deployment, we handle every aspect of your Web3 development journey.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureImage}>
                                <img src={GRAPH} alt="graph" />
                            </div>
                            <div className={styles.featureInfo}>
                                <h3>Growth Focused</h3>
                                <p>We’re not just builders; we’re your strategic partners, helping you navigate the Web3 landscape and achieve your goals.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureImage}>
                                <img src={LOCK} alt="lock" />
                            </div>
                            <div className={styles.featureInfo}>
                                <h3>Security First</h3>
                                <p>We prioritize the security and integrity of your decentralized applications, ensuring robust protection and reliability.</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureImage}>
                                <img src={TARGET} alt="target" />
                            </div>
                            <div className={styles.featureInfo}>
                                <h3>Proven Results</h3>
                                <p>We’ve successfully delivered a wide range of Web3 projects, from DeFi platforms to NFT marketplaces and beyond.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.statisticBackground}>
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
                                <img src={AVA1} /><img src={AVA2} /><img src={AVA3} />
                            </div>
                            we cut through red tape and move quickly.
                        </p>
                        <p> We are dedicated, transparent, communicate clearly and honestly.</p>
                        <p>Proudly reliable, we tackle challenges with strong technical skills</p>
                        <p>and market expertise, delivering effective results
                            <div className={styles.doubleStars}>
                                <img src={STARS} />
                            </div>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default VisionSection