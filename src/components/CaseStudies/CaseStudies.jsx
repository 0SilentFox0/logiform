import styles from './CaseStudies.module.css';
import Card from './Card/Card';

//import caseStudiesImg from '../../assets/caseStudiesImg/cardImg.png';
//import { IoFilterOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import ContactSection from '../layout/ContactSection/ContactSection';
import { useEffect, useState } from 'react';
import { directus } from '../../plugins/axios';

function CaseStudies() {

    const [cards, setCards] = useState([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((cat) => cat !== category)
                : [...prevCategories, category]
        );
    };

    const filteredCards = cards.filter((card) =>
        selectedCategories.length === 0 || selectedCategories.includes(card.category)
    );

    const getImageHeightClass = (index) => {
        return index % 2 === 0 ? styles.largeImage : styles.smallImage;
    };

    const cardsPreviewFields = 'card_image,category_name,card_title,card_description';

    useEffect(() => {
        const getCards = async () => {
            try {
                const data = await getCardsPreview();
                setCards(data); // Update the state with fetched posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getCards();
    }, []);

    async function getCardsPreview() {
        try {
            const params = { fields: cardsPreviewFields };
            const response = await directus.get('case_studies_card', { params });

            const cards = response.data.data;

            return cards.map((card) => ({
                id: card.id,
                image: card.card_image
                    ? `${import.meta.env.VITE_DIRECTUS_URL}${card.card_image}`
                    : '',
                category: card.category_name || 'Uncategorized',
                title: card.card_title,
                description: card.card_description,
            }));

        } catch (error) {
            console.error('Error in getCardsPreview:', error);
            return [];
        }
    }

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.actions}>
                        {/* <button className={styles.action}>
                            <IoFilterOutline className={styles.actionImg} />
                        </button> */}
                        <button className={styles.action} onClick={toggleFilterVisibility}>
                            <VscSettings className={styles.actionImg} />
                        </button>

                        {isFilterVisible && (
                            <div className={styles.filterWindow}>
                                {['Blockchain', 'Back-end', 'Front-end', 'Databases', 'Cloud Services', 'DevOps'].map((category) => (
                                    <label key={category} className={styles.filterLabel}>
                                        <input
                                            type="checkbox"
                                            value={category}
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                        />
                                        {category}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.block}>
                        <div className={styles.columnLeft}>
                            {filteredCards.slice(0, 2).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    category={card.category}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.columnRight}>
                            {filteredCards.slice(2, 4).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    category={card.category}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.block}>

                        <div className={styles.columnRight}>
                            {filteredCards.slice(6, 8).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    category={card.category}
                                    imageHeight={getImageHeightClass(index)}
                                />
                            ))}
                        </div>

                        <div className={styles.columnLeft}>
                            {filteredCards.slice(4, 6).map((card, index) => (
                                <Card
                                    key={card.id}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    category={card.category}
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