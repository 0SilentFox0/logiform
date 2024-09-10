import styles from './CaseStudies.module.css';
import Card from './Card/Card';

import caseStudiesImg from '../../assets/caseStudiesImg/cardImg.png';
import { IoFilterOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import ContactSection from '../layout/ContactSection/ContactSection';

function CaseStudies() {

    const cardsData = [
        { id: 1, title: "TeXifyMath", description: "The client's goal was to create a service that uses machine learning or neural network algorithms to convert a picture of a mathematical", image: caseStudiesImg },
        { id: 2, title: "DesignHub", description: "The client aimed to create an intuitive and user-friendly design collaboration platform.", image: caseStudiesImg },
        { id: 3, title: "FintechApp", description: "A cutting-edge financial technology application to simplify banking.", image: caseStudiesImg },
        { id: 4, title: "EduPlatform", description: "The client's goal was to create a service that uses machine learning or neural network algorithms to convert a picture of a mathematical", image: caseStudiesImg },
        { id: 5, title: "HealthTracker", description: "A health monitoring app that integrates with wearable devices.", image: caseStudiesImg },
        { id: 6, title: "EcoMarket", description: "A sustainable marketplace for eco-friendly products.", image: caseStudiesImg },
        { id: 7, title: "TravelMate", description: "A comprehensive travel planning application with real-time updates.", image: caseStudiesImg },
        { id: 8, title: "MusicStream", description: "A music streaming service offering curated playlists and recommendations.", image: caseStudiesImg },
    ];

    const getImageHeightClass = (index) => {
        return index % 2 === 0 ? styles.largeImage : styles.smallImage;
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
                            {cardsData.slice(0, 2).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.columnRight}>
                            {cardsData.slice(2, 4).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
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
                            {cardsData.slice(6, 8).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.columnLeft}>
                            {cardsData.slice(4, 6).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
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
    );
}

export default CaseStudies;