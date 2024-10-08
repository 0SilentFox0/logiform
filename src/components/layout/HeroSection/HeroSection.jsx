"use client";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

function HeroSection({
	title,
	glitchEffect,
	description,
	imageSrc,
	showVideo,
}) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 968);
		};

		checkIsMobile();
		window.addEventListener("resize", checkIsMobile);

		return () => window.removeEventListener("resize", checkIsMobile);
	}, []);

	return (
		<section className={styles.hero}>
			{showVideo && (
				<>
					<video
						key={isMobile ? "mobile" : "desktop"}
						autoPlay
						loop
						muted
						playsInline
						className={styles.backgroundVideo}
					>
						<source
							src={isMobile ? "/videos/mobile.mp4" : "/videos/desktop.mp4"}
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</>
			)}
			<div className={styles.content}>
				<div className={styles.text}>
					<h1>
						{title} <br />
						{glitchEffect && <span>{glitchEffect}</span>}
					</h1>
					<p>{description}</p>
				</div>
				<div className={styles.contactButton}>
					<Link href="#contact" className={styles.anchorContactButton}>
						Contact us
					</Link>
				</div>
			</div>

			{imageSrc && (
				<div className={styles.image}>
					<Image src={imageSrc} alt="Hero Image" priority />
				</div>
			)}
		</section>
	);
}

export default HeroSection;
