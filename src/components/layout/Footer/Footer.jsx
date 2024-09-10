import styles from './Footer.module.css'

import logoImage from '../../../assets/logo.svg'

import INSTAGRAM from '../../../assets/contactImages/instagram.svg'
import TWITTER from '../../../assets/contactImages/twitter.svg'
import LINKEDIN from '../../../assets/contactImages/linkedin.svg'

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.infoContainer}>
                    <div className={styles.logo}>
                        <img src={logoImage} alt="Logiform Logo" />
                        <span>Logiform</span>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.actions}>
                            <button>Blog</button>
                            <button>Resources</button>
                            <button>Partner with us</button>
                        </div>
                        <div className={styles.actions}>
                            <button>Services</button>
                            <button>Case studies</button>
                            <button>About us</button>
                        </div>
                        <div className={styles.actions}>
                            <button>Privacy Policy</button>
                            <button>Tem Condition </button>
                        </div>
                    </div>

                </div>

                <div className={styles.line} />

                <div className={styles.socialsContainer}>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <img src={INSTAGRAM} alt='instagram' />
                        </div>
                        <div className={styles.social}>
                            <img src={TWITTER} alt='twitter' />
                        </div>
                        <div className={styles.social}>
                            <img src={LINKEDIN} alt='linkedin' />
                        </div>
                    </div>
                    <p className={styles.rights}>@Logyform. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer