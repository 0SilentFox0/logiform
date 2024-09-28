import styles from '@/components/CaseStudies/CaseStudiesDetails/CaseStudiesDetails.module.css';

import Image from 'next/image';
import PrevButtonImage from '@/assets/caseStudiesDetailsImg/arrow.svg';

import BINANCE from '@/assets/caseStudiesDetailsImg/binance.svg';
import ETHEREUM from '@/assets/caseStudiesDetailsImg/Ethereum.svg';
import PYTHON from '@/assets/caseStudiesDetailsImg/python.svg';
import NEST from '@/assets/caseStudiesDetailsImg/Nest js.svg';

import Link from 'next/link';

const CaseStudiesDetailsHeader = ({ case_ }) => {

    const { categories, title, description, technologies } = case_

    const techImages = {
        Binance: BINANCE,
        Ethereum: ETHEREUM,
        Python: PYTHON,
        Nest: NEST,
    };

    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.navigationButtons}>
                    <Link href="/case-studies" className={styles.prevPageButton}>
                        <Image src={PrevButtonImage} alt="Go back" />
                    </Link>
                    <div className={styles.tabsWrapper}>
                        {categories.map((category) => (
                            <button key={category} className={styles.tabButton}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.projectTitle}>
                    <h1>{title}</h1>
                </div>

                <div className={styles.projectDescription}>
                    <p>{description}</p>
                    <div className={styles.actionButtons}>
                        {technologies.map((tech) => (
                            <button key={tech} className={styles.actionButton}>
                                <Image src={techImages[tech]} alt={tech} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudiesDetailsHeader
