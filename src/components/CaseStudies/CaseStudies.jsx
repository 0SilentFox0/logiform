import styles from './CaseStudies.module.css'
import Card from './Card/Card';

import caseStudiesImg from '../../assets/caseStudiesImg/cardImg.png'
import { IoFilterOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import ContactSection from '../ContactSection/ContactSection';

function CaseStudies() {

    const cardsData = [
        { id: 1, title: "TeXifyMath", description: "The client's goal was to create a service that uses machine learning or neural network algorithms to convert a picture of a mathematical", image: caseStudiesImg },
        { id: 2, title: "TeXifyMath", description: "The client’s goal was to create a service that uses machine learning or neural network algorithms to convert a picture of a mathematical", image: caseStudiesImg },
    ];

    const getImageHeightClass = (index) => {
        return index === 0 ? styles.largeImage : styles.smallImage;
    };

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.actions}>
                        <button className={styles.action}>
                            <IoFilterOutline className={styles.actionImg} />
                        </button>
                        <button className={styles.action}>
                            <VscSettings className={styles.actionImg} />
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.block}>
                        <div className={styles.columnLeft}>
                            {cardsData.map((card, index) => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.columnRight}>
                            {cardsData.map((card, index) => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.columnRight}>
                            {cardsData.map((card, index) => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.columnLeft}>
                            {cardsData.map((card, index) => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <ContactSection />

            </div>

        </section>
    )
}

export default CaseStudies;