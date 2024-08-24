import styles from './HeroSection.module.css'

// import gif from '../../assets/gif.gif'
import GlitchEffect from './GlitchEffect/GlitchEffect';

function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>
                    We provide agile secure <GlitchEffect /> solutions
                </h1>
                <p>No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies.</p>
                <div className={styles.contactButton}>
                    <button >Contact us</button>
                </div>
            </div>
            <div className={styles.image}>
                {/* <img src={gif} alt="Brain Illustration" /> */}
                fff
            </div>
        </section>
    )
}

export default HeroSection