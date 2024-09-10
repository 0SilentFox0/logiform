import styles from './CoreServicesSection.module.css'

import BLOCKCHAIN from '../../../assets/aboutUsImages/Blockchain.svg'
import CLOUD from '../../../assets/aboutUsImages/Cloud.svg'
import CONTRACTS from '../../../assets/aboutUsImages/Contracts.svg'
import DESIGN from '../../../assets/aboutUsImages/Design.svg'

function CoreServicesSection() {
    return (
        <section className={styles.coreServicesSection}>
            <div className={styles.coreServicesTitle}>
                <h1>Core Services</h1>
                <p>Each service is designed to bring your Web3 vision to life while ensuring high performance, security, and user engagement.</p>
            </div>

            <div className={styles.coreServicesContent}>
                <div className={styles.containerGrid}>
                    <div className={`${styles.item} ${styles.contracts}`}>
                        <img src={CONTRACTS} />
                        <p>Smart Contracts</p>
                    </div>
                    <div className={`${styles.item} ${styles.blockchain}`}>
                        <img src={BLOCKCHAIN} />
                        <p>Web3 & Blockchain Development</p>
                    </div>
                    <div className={`${styles.item} ${styles.design}`}>
                        <img src={DESIGN} />
                        <p>UI/UX Design</p>
                    </div>
                    <div className={`${styles.item} ${styles.cloud}`}>
                        <img src={CLOUD} />
                        <p>SaaS and Web Development</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreServicesSection;