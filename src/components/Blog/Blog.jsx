import styles from './Blog.module.css'

import AUTHOR from '../../assets/blogImages/author.png'
import DOT from '../../assets/blogImages/dot.svg'
import ContactSection from '../layout/ContactSection/ContactSection'
import PostCard from './PostCard/PostCard'
import { useEffect, useState } from 'react'
import { directus } from '../../plugins/axios'

function Blog() {
    const [posts, setPosts] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [category, setCategory] = useState('All');

    const toggleTab = (index) => {
        const categories = ['All', 'Blockchain', 'Web 3', 'Web 2', 'About us', 'Trends'];
        setToggleState(index);
        setCategory(categories[index - 1]); // Set category based on selected tab
    }

    const postPreviewFields = 'post_title,post_image_small,post_description,date_created,author_name,author_image,category_name';

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await getPostsPreview();
                setPosts(data); // Update the state with fetched posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getPosts();
    }, []);

    async function getPostsPreview() {
        try {
            const params = { fields: postPreviewFields };
            const response = await directus.get('blog_post', { params });

            const posts = response.data.data;

            return posts.map((post) => ({
                id: post.id, 
                image: post.post_image_small
                    ? `${import.meta.env.VITE_DIRECTUS_URL}${post.post_image_small}`
                    : '', 
                date: new Date(post.date_created).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }),
                title: post.post_title,
                description: post.post_description,
                authorImg: post.author_image
                    ? `${import.meta.env.VITE_DIRECTUS_URL}${post.author_image}`
                    : AUTHOR, 
                author: post.author_name || 'Unknown Author',
                category: post.category_name || 'Uncategorized',
            }));
            
        } catch (error) {
            console.error('Error in getPostsPreview:', error);
            return [];
        }
    }

    // Filter posts based on selected category
    const filteredPosts = category === 'All' 
        ? posts 
        : posts.filter(post => post.category === category);

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.blogTextContainer}>
                        <div className={styles.blogText}>
                            <h1 className={styles.blogTitle}>Node.js Architecture From A to Z: What Makes It a Top Choice</h1>
                        </div>
                        <p className={styles.blogDescription}>Smart contracts are an integral part of the Ethereum blockchain. This technology provides users with the possibility to create unique digital agreements. These contracts can execute their terms</p>
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
                            <p className={styles.postDescription}>Stay ahead of the curve with our latest insights, trends, and developments in the world of Web3 & blockchain.</p>
                        </div>
                        <div className={styles.tabs}>
                            {['All', 'Blockchain', 'Web 3', 'Web 2', 'About us', 'Trends'].map((tab, index) => (
                                <button
                                    key={index}
                                    className={toggleState === index + 1 ? `${styles.tab} ${styles.activeTab}` : styles.tab}
                                    onClick={() => toggleTab(index + 1)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={toggleState === 1 ? `${styles.cardGrid} ${styles.activeCardGrid}` : styles.cardGrid}>
                        {filteredPosts.map((post) => (
                            <PostCard key={post.id} {...post} />
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </>
    )
}

export default Blog