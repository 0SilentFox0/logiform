import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

import logoImage from "@/assets/logo.svg";
import INSTAGRAM from "@/assets/contactImages/instagram.svg";
import TWITTER from "@/assets/contactImages/twitter.svg";
import LINKEDIN from "@/assets/contactImages/linkedin.svg";

function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.infoContainer}>
					<div className={styles.logo}>
						<Image src={logoImage} alt="Logiform Logo" width={40} height={40} />
						<span>Logiform</span>
					</div>
					<nav className={styles.info}>
						<div className={styles.actions}>
							<Link href="/blog">Blog</Link>
							{/* <Link href="/resources">Resources</Link> */}
							<Link href="#contact">Partner with us</Link>
						</div>
						<div className={styles.actions}>
							{/* <Link href="/services">Services</Link> */}
							<Link href="/case-studies">Case studies</Link>
							<Link href="/about-us">About us</Link>
						</div>
						<div className={styles.actions}>
							<Link href="/privacy-policy">Privacy Policy</Link>
							<Link href="/terms-conditions">Terms & Conditions</Link>
						</div>
					</nav>
				</div>

				<hr className={styles.line} />

				<div className={styles.socialsContainer}>
					<div className={styles.socials}>
						<Link
							href="https://instagram.com/logiform"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.social}
						>
							<Image
								src={INSTAGRAM}
								alt="Follow us on Instagram"
								width={24}
								height={24}
							/>
						</Link>
						<Link
							href="https://x.com/Logiform_io"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.social}
						>
							<Image
								src={TWITTER}
								alt="Follow us on Twitter"
								width={24}
								height={24}
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/company/logiformio"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.social}
						>
							<Image
								src={LINKEDIN}
								alt="Connect with us on LinkedIn"
								width={24}
								height={24}
							/>
						</Link>
					</div>
					<p className={styles.rights}>
						&copy; {new Date().getFullYear()} Logiform. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
