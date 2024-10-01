import styles from "./PodcastSection.module.css";

import HUMAN from "@/assets/episodeImages/human.png";
import DUCK from "@/assets/episodeImages/duck.png";
import GOD from "@/assets/episodeImages/god.png";

import MUSIC from "@/assets/episodeImages/music.png";

import GIRL from "@/assets/episodeImages/girl.png";

import PLAY from "@/assets/episodeImages/play.svg";

import Image from "next/image";
import Link from "next/link";

const episodes = [
	{
		id: 1,
		title: "Crypto",
		description: "Podcast 1",
		duration: "28:01",
		img: DUCK,
		link: "/episode/1",
	},
	{
		id: 2,
		title: "DEX",
		description: "Podcast 2",
		duration: "15:00",
		img: HUMAN,
		link: "/episode/2",
	},
	{
		id: 3,
		title: "NFT",
		description: "Podcast 3",
		duration: "23:15",
		img: GOD,
		link: "/episode/3",
	},
	// ... other episodes
];

function PodcastSection() {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Get more insights with Logiform podcast</h2>
			<div className={styles.content}>
				<div className={styles.episodeList}>
					<div className={styles.episodeContainer}>
						{episodes.map((episode, index) => (
							<div className={styles.episodeLink} key={episode.id}>
								{/* <Link href={episode.link} className={styles.episodeLink}> */}
								<div className={styles.episodeLink}>
									<div className={styles.episode}>
										<div className={styles.episodeLeft}>
											<div className={styles.index}>0{index + 1}/</div>
											<Image
												src={episode.img}
												alt={episode.title}
												className={styles.episodeImage}
												width={100}
												height={100}
											/>
										</div>
										<div className={styles.episodeRight}>
											<div className={styles.episodeText}>
												<h3>{episode.title}</h3>
												<p>{episode.description}</p>
											</div>
											<div className={styles.episodeInfo}>
												<h4>Episode {index + 1}</h4>
												<div className={styles.durationContainer}>
													<Image
														src={MUSIC}
														alt="music"
														width={20}
														height={20}
													/>
													<p className={styles.duration}>{episode.duration}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* </Link> */}
								<div className={styles.line} />
							</div>
						))}
					</div>
				</div>
				<div className={styles.podcastImageContainer}>
					<div className={styles.playContainer}>
						<div className={styles.playButton}>
							<button className={styles.playIcon}>
								<Image src={PLAY} alt="Play" width={30} height={30} />
							</button>
						</div>
						<svg className={styles.circle} viewBox="0 0 100 100">
							<path
								id="circlePath"
								d="M50 12 a37 37 0 1 1 0 77 a37 37 0 1 1 0 -77"
							/>
							<text className={styles.circularText}>
								<textPath href="#circlePath">Discover Discover</textPath>
							</text>
						</svg>
					</div>
					<Image
						src={GIRL}
						alt="Podcast"
						className={styles.podcastImage}
						width={300}
						height={300}
					/>
				</div>
			</div>
		</section>
	);
}

export default PodcastSection;
