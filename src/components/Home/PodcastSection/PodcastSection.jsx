import styles from './PodcastSection.module.css'

import HUMAN from '../../../assets/episodeImages/human.png'
import DUCK from '../../../assets/episodeImages/duck.png'
import GOD from '../../../assets/episodeImages/god.png'

import MUSIC from '../../../assets/episodeImages/music.png'

import GIRL from '../../../assets/episodeImages/girl.png'

import PLAY from '../../../assets/episodeImages/play.svg'
import { Fragment } from 'react'



function PodcastSection() {

    const episodes = [
        { id: 1, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: HUMAN, link: '/episode/1' },
        { id: 2, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: DUCK, link: '/episode/1' },
        { id: 3, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: GOD, link: '/episode/1' },
        { id: 4, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: DUCK, link: '/episode/1' },
        { id: 5, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: GOD, link: '/episode/1' },
        { id: 6, title: 'No bureaucracy', description: 'Lorem ipsum', duration: '28:01', img: GOD, link: '/episode/1' },
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
                            <Fragment key={episode.id}>
                                <a href={episode.link} className={styles.episodeLink}>
                                    <div key={episode.index} className={styles.episode}>
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
                                </a>
                                <div className={styles.line} />
                            </Fragment>
                        ))}
                    </div>
                    <div className={styles.scrollContainer} />
                </div>
                <div className={styles.podcastImageContainer}>

                    <div className={styles.playContainer}>
                        <div className={styles.playButton}>
                            <button className={styles.playIcon}><img src={PLAY} /></button>
                        </div>
                        <svg className={styles.circle} viewBox="0 0 100 100">
                            <path id="circlePath" d="M50 12 a37 37 0 1 1 0 77 a37 37 0 1 1 0 -77" />
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