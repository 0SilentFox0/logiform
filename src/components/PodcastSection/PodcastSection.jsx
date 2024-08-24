import styles from './PodcastSection.module.css'

import HUMAN from '../../assets/episodeImages/human.png'
import DUCK from '../../assets/episodeImages/duck.png'
import GOD from '../../assets/episodeImages/god.png'

import MUSIC from '../../assets/episodeImages/music.png'

import GIRL from '../../assets/episodeImages/girl.png'

import PLAY from '../../assets/episodeImages/play.svg'



function PodcastSection() {

    const episodes = [
        { id: 1, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: HUMAN },
        { id: 2, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: DUCK },
        { id: 3, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: GOD },
        // Add more episodes as needed
    ];

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Get more insights with Logiform podcast</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.episodeList}>
                    <div className={styles.episodeContainer}>
                        {episodes.map((episode, index) => (
                            <>
                                <div key={episode.id} className={styles.episode}>
                                    <div className={styles.episodeLeft}>
                                        <div className={styles.index}>0{index + 1}/</div>
                                        <img src={episode.img} alt={episode.title} className={styles.episodeImage} />
                                    </div>
                                    <div className={styles.episodeRight}>
                                        <div className={styles.episodeText}>
                                            <h3>{episode.title}</h3>
                                            <p>{episode.description}</p>
                                        </div>
                                        <div className={styles.episodeInfo}>
                                            <h4>Episode 12</h4>
                                            <div className={styles.durationContainer}>
                                                <img src={MUSIC} alt='music' />
                                                <p className={styles.duration}>{episode.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.line} />
                            </>
                        ))}
                    </div>
                    <div className={styles.scrollContainer}>
                        <div className={styles.scroll} />
                    </div>
                </div>
                <div className={styles.podcastImageContainer}>

                    <div className={styles.playContainer}>
                        <div className={styles.playButton}>
                            <button className={styles.playIcon}><img src={PLAY} /></button>
                        </div>
                        <svg className={styles.circle} viewBox="0 2 100 100">
                            <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 78,0 a 38,38 0 1,1 -78,0" />
                            <text className={styles.circularText}>
                                <textPath href="#circlePath">
                                    Discover Discover
                                </textPath>
                            </text>
                        </svg>
                    </div>

                        <img src={GIRL} alt="Podcast" className={styles.podcastImage} />
                </div>
            </div>
        </section>
    )
}

export default PodcastSection