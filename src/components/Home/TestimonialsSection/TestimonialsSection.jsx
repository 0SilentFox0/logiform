"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import styles from "@/components/Home/TestimonialsSection/TestimonialsSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
	{
		text: "Team did a good job. The graphical and dev work was great!",
		name: "Anton Thomas",
		company: "FireFly",
	},
	{
		text: "Team did a good job. The graphical and dev work was great!",
		name: "Anton Thomas",
		company: "FireFly",
	},
	{
		text: "I hired LogiForm to assist my core development team with a DEX project on a tight deadline. From the start, we clicked, and thanks to their support, we launched on time and continue collaborating. Big thanks to the team!",
		name: "Ben Irwin",
		company: "NDA project",
	},
	{
		text: "The team built an exceptional web3 platform for my community, impressing me with their speed and high standards. The process—from management to design and testing—was seamless. Highly recommend them!",
		name: "Viktor Sanders ",
		company: "SocialSelf",
	},
	{
		text: "Team did a good job. The graphical and dev work was great!",
		name: "Anton Thomas",
		company: "FireFly",
	},
];

function TestimonialsSection() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return (
			<section className={styles.container}>
				<h2 className={styles.title}>What people say about us</h2>
				<p className={styles.subtitle}>
					Reviews are one of the most important sections, right?
				</p>
			</section>
		);
	}

	return (
		<section className={styles.container}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>What people say about us</h2>
				<p className={styles.subtitle}>
					Reviews are one of the most important sections, right?
				</p>
			</div>

			<div className={styles.swiperContainer}>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					spaceBetween={60}
					initialSlide={3}
					loop={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 140,
						modifier: 0.5,
						slideShadows: false,
					}}
					modules={[EffectCoverflow, Pagination]}
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index} className={styles.swiperSlide}>
							<div className={styles.testimonial}>
								<div className={styles.quote}>&ldquo;</div>
								<div className={styles.testimonialInfo}>
									<p className={styles.text}>{testimonial.text}</p>
									<div className={styles.authorInfo}>
										<p className={styles.name}>{testimonial.name}</p>
										<p className={styles.company}>{testimonial.company}</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default TestimonialsSection;
