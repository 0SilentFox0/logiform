import styles from '@/components/NotFound/NotFound.module.css';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

export default function NotFound() {
	return (
		<div className={styles.container}>
            <div className={styles.hero}/>
            <div className={styles.errorContainer}>
                <div className={styles.text}>
                    <h1>404</h1> <span></span> <p>This page could not be found.</p> 
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} href={'/'}>Go to home page </Link> <IoIosArrowForward />
                </div>
            </div>
		</div>
	);
}
