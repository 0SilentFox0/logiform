import styles from './Blog.module.css'

import AUTHOR from '../../assets/blogImages/author.png'
import DOT from '../../assets/blogImages/dot.svg'
import ContactSection from '../layout/ContactSection/ContactSection'
import PostCard from './PostCard/PostCard'

import cardImg from '../../assets/blogImages/phone.png'

function Blog() {

    const cards = [
        {
            id: 1,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 2,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 3,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 4,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 5,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 6,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 7,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 8,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
        {
            id: 9,
            image: cardImg,
            date: '12, August 2024',
            title: 'How to Calculate the Cost of Smart Contract?',
            description:
                'Smart contracts are an integral part of the Ethereum blockchain...',
            authorImg: AUTHOR,
            author: 'Ronald Richards',
            category: 'Machine learning',
        },
    ];

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <button className={styles.tabButton}>Blockchain</button>

                    <div className={styles.blogTextContainer}>
                        <div className={styles.blogText}>
                            <h1 className={styles.blogTitle}>Node.js Architecture From A to Z:  What Makes It a Top Choice</h1>
                        </div>
                        <p className={styles.blogDescription}>Smart contracts are an integral part of the Ethereum blockchain. This  technology provides users with the possibility to create unique digital  agreements. These contracts can execute their terms</p>
                    </div>

                    <div className={styles.authorContainer}>
                        <img className={styles.authorAvatar} src={AUTHOR} />
                        <div className={styles.name}>Ronald Richards</div>
                        <img className={styles.dot} src={DOT} />
                        <div className={styles.date}>12, August 2024</div>
                    </div>
                </div>
            </div>

            <section className={styles.postsSection}>
                <div className={styles.postsContainer}>
                    <div className={styles.postTitleContainer}>
                        <div className={styles.postTitleText}>
                            <h1 className={styles.postTitle}>Recent blog posts</h1>
                            <p className={styles.postDescription}>Stay ahead of the curve with our latest insights, trends, and developments in the world of Web3&blockchain.</p>
                        </div>
                        <div className={styles.tabs}>
                            <button className={styles.tab}>All</button>
                            <button className={styles.tab}>Blockchain</button>
                            <button className={styles.tab}>Web 3</button>
                            <button className={styles.tab}>Web 2</button>
                            <button className={styles.tab}>About us</button>
                            <button className={styles.tab}>Trends</button>
                        </div>
                    </div>

                    <div className={styles.cardGrid}>
                        {cards.map((card, index) => (
                            <PostCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </>
    )
}

export default Blog
