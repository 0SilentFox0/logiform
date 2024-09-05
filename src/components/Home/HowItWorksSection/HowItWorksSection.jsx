import AnchorLink from 'react-anchor-link-smooth-scroll'
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
            <div className={styles.cardWrapper}>
                <div className={styles.cardContainer}>
                    <input type='radio' name='slide' id='c1' defaultChecked/>
                    <label htmlFor='c1' className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}>01</div>
                            <div className={styles.description}>
                                <h4>Clarifying needs & requirements</h4>
                                <p>Created 100+ project our team understand best industry practices and trends. We don’t blindly follow your requirements but help you find the most efficient and budget-friendly solution.</p>
                            </div>
                        </div>
                    </label>

                    <input type='radio' name='slide' id='c2' />
                    <label htmlFor='c2' className={styles.card}>
                        <div className={styles.row}>
                            <h1 className={styles.icon}>02</h1>
                            <div className={styles.description}>
                                <h4>Clarifying needs & requirements</h4>
                                <p>Created 100+ project our team understand best industry practices and trends. We don’t blindly follow your requirements but help you find the most efficient and budget-friendly solution.</p>
                            </div>
                        </div>
                    </label>

                    <input type='radio' name='slide' id='c3' />
                    <label htmlFor='c3' className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}>03</div>
                            <div className={styles.description}>
                                <h4>Clarifying needs & requirements</h4>
                                <p>Created 100+ project our team understand best industry practices and trends. We don’t blindly follow your requirements but help you find the most efficient and budget-friendly solution.</p>
                            </div>
                        </div>
                    </label>

                    <input type='radio' name='slide' id='c4' />
                    <label htmlFor='c4' className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}>04</div>
                            <div className={styles.description}>
                                <h4>Clarifying needs & requirements</h4>
                                <p>Created 100+ project our team understand best industry practices and trends. We don’t blindly follow your requirements but help you find the most efficient and budget-friendly solution.</p>
                            </div>
                        </div>
                    </label>

                    <input type='radio' name='slide' id='c5' />
                    <label htmlFor='c5' className={styles.card}>
                        <div className={styles.row}>
                            <div className={styles.icon}>05</div>
                            <div className={styles.description}>
                                <h4>Clarifying needs & requirements</h4>
                                <p>Created 100+ project our team understand best industry practices and trends. We don’t blindly follow your requirements but help you find the most efficient and budget-friendly solution.</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <button className={styles.contactButton}><AnchorLink href='#contact' className={styles.anchor}>Contact us</AnchorLink></button>
        </section>
    )
}

export default HowItWorksSection