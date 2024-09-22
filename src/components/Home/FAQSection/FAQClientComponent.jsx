"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FAQSection.module.css";
import ARROW_UP from "@/assets/FAQimages/arrowUp.svg";
import ARROW_DOWN from "@/assets/FAQimages/arrowDown.svg";

function FAQClientComponent({ faqs }) {
	const [openFaqs, setOpenFaqs] = useState(null);

	const toggleFaq = (index) => {
		setOpenFaqs(openFaqs === index ? null : index);
	};

	return (
		<div className={styles.cards}>
			{faqs.map((faq, index) => (
				<div
					key={index}
					className={`${styles.card} ${openFaqs === index ? styles.open : ""}`}
					onClick={() => toggleFaq(index)}
				>
					<div
						className={`${styles.cardContent} ${
							openFaqs === index ? styles.open : ""
						}`}
					>
						<h3 className={styles.cardQuestion}>{faq.question}</h3>
						{openFaqs === index && (
							<p className={styles.cardAnswer}>{faq.answer}</p>
						)}
					</div>
					<span
						className={`${styles.cardImage} ${
							openFaqs === index ? styles.arrowUp : styles.arrowDown
						}`}
					>
						<Image
							src={openFaqs === index ? ARROW_UP : ARROW_DOWN}
							alt={openFaqs === index ? "Collapse answer" : "Expand answer"}
							width={20}
							height={20}
						/>
					</span>
				</div>
			))}
		</div>
	);
}

export default FAQClientComponent;
