import styles from "./FAQSection.module.css";
import FAQClientComponent from "./FAQClientComponent";

import PICTURE from "@/assets/FAQimages/picture.png";
import Image from "next/image";

function FAQSection() {
	const faqs = [
		{
			question:
				"What is Web3 development, and how does it differ from traditional web development?",
			answer:
				"Web3 development takes web technologies to a new level by embracing decentralized, blockchain-based systems. Unlike traditional web development, Web3 focuses on building apps that leverage blockchain, smart contracts, and decentralized protocols, ensuring trustless, transparent, and secure interactions. In Web3, smart contracts—self-executing code—automate processes, reducing the need for intermediaries and central authorities, thereby increasing trust.",
		},
		{
			question: "How long does it take to launch a Web3 solution?",
			answer:
				"The timeline for launching a Web3 solution varies based on the project’s complexity, technology stack, and required features. Simple projects may be completed in a few weeks, while more complex ones could take several months.",
		},
		{
			question: "What is the cost of launching a Web3 solution?",
			answer:
				"The cost of launching a Web3 solution depends on factors like development complexity, features, technology stack, and ongoing support. Smaller projects might cost a few thousand dollars, while larger, more complex projects can be significantly more expensive. Contact us for a detailed cost estimate for your Web3 project.",
		},
		{
			question: "How is the security of Web3 applications ensured?",
			answer:
				"Web3 apps prioritize security through various measures, including smart contract audits, secure coding practices, and robust encryption protocols. Regular penetration tests identify potential vulnerabilities, while decentralized identity systems enhance user privacy. Blockchain's immutable ledgers safeguard data integrity, and open-source development invites community scrutiny, contributing to overall security. Continuous monitoring and adaptation to evolving standards help maintain strong security in the dynamic Web3 environment.",
		},
		{
			question: "Can existing apps be migrated to a Web3 architecture?",
			answer:
				"Yes, existing apps can be transitioned to a Web3 architecture, though the process depends on the application’s nature. Some apps may need to be redesigned or restructured to align with decentralized models. Migration involves adapting existing functionalities to blockchain or decentralized technologies while maintaining data integrity and security.",
		},
		{
			question: "Do you work exclusively on Web3 projects?",
			answer:
				"While most of our projects are in the Web3 space, we also have extensive experience in Web2 and software development.",
		},
	];

	return (
		<section className={styles.container} aria-labelledby="faq-title">
			<h2 id="faq-title" className={styles.title}>
				FAQ
			</h2>
			<div className={styles.content}>
				<FAQClientComponent faqs={faqs} />
				<div className={styles.pictureContainer}>
					<Image
						className={styles.picture}
						src={PICTURE}
						alt="FAQ illustration"
						width={400}
						height={300}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}

export default FAQSection;
