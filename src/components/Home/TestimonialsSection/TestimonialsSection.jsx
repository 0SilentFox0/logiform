import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './TestimonialsSection.module.css'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function TestimonialsSection() {
    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>What people say about us</h2>
                <p className={styles.subtitle}>
                    No bureaucracy, no excuses – raw talent and relentless
                    execution for startups and mid-sized companies.
                </p>
            </div>

            <div className={styles.swiperContainer}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 0.5,
                        slideShadows: false,
                    }}

                    pagination={{
                        clickable: true, // Make the pagination bullets clickable
                        
                        // bulletActiveClass: styles.bulletActiveClass,
                        // bulletClass: styles.bulletClass,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    slideActiveClass={styles.activeSlide}
                    wrapperClass={styles.sliderWrapper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.testimonial}>
                            <div className={styles.quote}>&ldquo;</div>
                            <div className={styles.testimonialInfo}>
                                <p className={styles.text}>
                                    The team delivered an exceptional Web3 educational platform, meeting deadlines and maintaining top industry standards. The process was seamless, with excellent project management, design, code quality, and testing. Highly recommended.
                                </p>
                                <div className={styles.authorInfo}>
                                    <p className={styles.name}>Ben I.</p>
                                    <p className={styles.company}>NDA project</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.testimonial}>
                            <div className={styles.quote}>&ldquo;</div>
                            <div className={styles.testimonialInfo}>
                                <p className={styles.text}>
                                    Team did a good job. The graphical and dev work was great!
                                </p>
                                <div className={styles.authorInfo}>
                                    <p className={styles.name}>Ben I.</p>
                                    <p className={styles.company}>NDA project</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.testimonial}>
                            <div className={styles.quote}>&ldquo;</div>
                            <div className={styles.testimonialInfo}>
                                <p className={styles.text}>
                                    Team did a good job. The graphical and dev work was great!
                                </p>
                                <div className={styles.authorInfo}>
                                    <p className={styles.name}>Ben I.</p>
                                    <p className={styles.company}>NDA project</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.testimonial}>
                            <div className={styles.quote}>&ldquo;</div>
                            <div className={styles.testimonialInfo}>
                                <p className={styles.text}>
                                    Team did a good job. The graphical and dev work was great!
                                </p>
                                <div className={styles.authorInfo}>
                                    <p className={styles.name}>Ben I.</p>
                                    <p className={styles.company}>NDA project</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.testimonial}>
                            <div className={styles.quote}>&ldquo;</div>
                            <div className={styles.testimonialInfo}>
                                <p className={styles.text}>
                                    I hired LogiForm to assist with developing a new DEX on a tight deadline. Despite our time crunch, their shared mindset led to a successful launch within a month. We continue to collaborate, and I’m grateful for their support.
                                </p>
                                <div className={styles.authorInfo}>
                                    <p className={styles.name}>Ben I.</p>
                                    <p className={styles.company}>NDA project</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default TestimonialsSection