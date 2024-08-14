import styles from './HeroSection.module.css'

// import gif from '../../assets/gif.gif'

function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    We provide agile secure <span className={styles.highlight}>web2</span> solutions
                </h1>
                <p>No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies.</p>
                <button className={styles.contactButton}>Contact us</button>
            </div>
            <div className={styles.image}>
                {/* <img src={gif} alt="Brain Illustration" /> */}
            </div>
        </section>
    )
}

export default HeroSection