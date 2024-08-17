import styles from './HowItWorksSection.module.css'

function HowItWorksSection() {
    return (
        <section className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>How it works</h2>
                    <p className={styles.subtitle}>
                        The best industry solutions, technical expertise and deep understanding of marketing will help us create a winning product together
                    </p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.firstCard}>
                        <h1>01</h1>
                        <div className={styles.firstCardContent}> 
                            <h3>Clarifying needs & requirements</h3>
                            <p>Created 100+ project our team understand best industry practices and trends. We don’t blindly follow your requirements but help you find the most efficient and budget-friendly solution.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div><h2>02</h2></div>
                        <div><h2>03</h2></div>
                        <div><h2>04</h2></div>
                        <div><h2>05</h2></div>
                    </div>
                </div>
                <button className={styles.contactButton}>Contact us</button>
        </section>
    )
}

export default HowItWorksSection