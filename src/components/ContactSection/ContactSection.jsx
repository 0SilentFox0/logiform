import styles from './ContactSection.module.css'

import INSTAGRAM from '../../assets/contactImages/instagram.svg'
import TWITTER from '../../assets/contactImages/twitter.svg'
import LINKEDIN from '../../assets/contactImages/linkedin.svg'

import UPLOAD from '../../assets/contactImages/Upload.png'

function ContactSection() {
    return (
        <section className={styles.container}>
            <div className={styles.contactCard}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Get Your Product estimation in 48 hours</h2>
                        <p>Share your project details, and we’ll deliver an accurate estimate for your project development</p>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.action}>
                            <img src={INSTAGRAM} alt='instagram' />
                        </div>
                        <div className={styles.action}>
                            <img src={TWITTER} alt='twitter' />
                        </div>
                        <div className={styles.action}>
                            <img src={LINKEDIN} alt='linkedin' />
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                        <input className={styles.name} type='text' placeholder='Your name *' />
                        <input className={styles.email} type='text' placeholder='Your email address *' />
                        <textarea className={styles.tellUs} type='textarea' placeholder='Tell us about your project' />
                    </div>
                    <div className={styles.upload}>
                        <div className={styles.uploadFile}>
                            <img src={UPLOAD} />
                            <p>Drag & Drop a File</p>
                        </div>
                    </div>
                    <div className={styles.contactButton}>
                        <button>Contact us</button>
                        <p>*By clicking the button on the left, you agree to the Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection