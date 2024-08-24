import styles from './TestimonialsSection.module.css'

function TestimonialsSection() {
    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>What people say about us</h2>
                <p className={styles.subtitle}>
                    No bureaucracy, no excuses – raw talent and relentless
                    execution for startups and mid-sized companies.
                </p>
            </div>

            {/* <div className={styles.testimonials}>
                <div className={styles.testimonialContainer}>
                    <div className={styles.testimonialFirst}>
                        <div className={styles.quote}>&ldquo;</div>
                        <div className={styles.testimonialInfo}>
                            <p className={styles.text}>I hired LogiForm to assist with developing a new DEX on a tight deadline. Despite our time crunch, their shared mindset led to a successful launch within a month. We continue to collaborate, and I’m grateful for their support.&rdquo;</p>
                            <div className={styles.authorInfo}>
                                <p className={styles.name}>Ben I.</p>
                                <p className={styles.company}>NDA project</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.testimonialContainerCenter}>
                    <div className={styles.testimonialCenter}>
                        <div className={styles.quote}>&ldquo;</div>
                        <div className={styles.testimonialInfo}>
                            <p className={styles.text}>The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.</p>
                            <div className={styles.authorInfo}>
                                <p className={styles.name}>Viktor Sanders</p>
                                <p className={styles.company}>SocialSelf</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.testimonialContainer}>
                    <div className={styles.testimonialThird}>
                        <div className={styles.quote}>&ldquo;</div>
                        <div className={styles.testimonialInfoThird}>
                            <p className={styles.textThird}>Team did a good job. The graphical and dev work was great!</p>
                            <div className={styles.authorInfo}>
                                <p className={styles.name}>Anton Thomas</p>
                                <p className={styles.company}>FireFly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default TestimonialsSection