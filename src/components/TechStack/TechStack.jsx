import styles from './TechStack.module.css'

function TechStack() {
    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>Our tech stack</h2>
                <p className={styles.subtitle}>
                    We Master Web3 Technologies with Expertise in Blockchain, Back-End, Front-End, Databases, Cloud Services, and DevOps
                </p>
            </div>

            <div className={styles.content}>
                <div className={styles.tabs}>
                    <button>Blockchain</button>
                    <button>Back-end</button>
                    <button>Front-end</button>
                    <button>Databases</button>
                    <button>Cloud Services</button>
                    <button>DevOps</button>
                </div>
                <div className={styles.cards}>
                    ff
                </div>
            </div>
        </section>
    )
}

export default TechStack