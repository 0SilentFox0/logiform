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
		text: "The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.",
		name: "Ben I.",
		company: "NDA project",
	},
	{
		text: "The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.",
		name: "Ben I.",
		company: "NDA project",
	},
	{
		text: "The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.",
		name: "Ben I.",
		company: "NDA project",
	},
	{
		text: "The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.",
		name: "Ben I.",
		company: "NDA project",
	},
	{
		text: "The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.",
		name: "Ben I.",
		company: "NDA project",
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
					No bureaucracy, no excuses – raw talent and relentless execution for
					startups and mid-sized companies.
				</p>
			</section>
		);
	}

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>What people say about us</h2>
			<p className={styles.subtitle}>
				No bureaucracy, no excuses – raw talent and relentless execution for
				startups and mid-sized companies.
			</p>

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
						depth: 130,
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
