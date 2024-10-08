import styles from "@/components/CaseStudies/CaseStudiesDetails/CaseStudiesDetails.module.css";

import Image from "next/image";
import PrevButtonImage from "@/assets/caseStudiesDetailsImg/arrow.svg";

import BINANCE from "@/assets/caseStudiesDetailsImg/binance.svg";
import ETHEREUM from "@/assets/caseStudiesDetailsImg/Ethereum.svg";
import PYTHON from "@/assets/caseStudiesDetailsImg/python.svg";
import NEST from "@/assets/caseStudiesDetailsImg/Nest js.svg";
import TYPESCRIPT from "@/assets/caseStudiesDetailsImg/typescript.svg";
import WEB3JS from "@/assets/caseStudiesDetailsImg/web3js.svg";
import SOLIDITY from "@/assets/caseStudiesDetailsImg/solidity.svg";
import DAPP from "@/assets/caseStudiesDetailsImg/Dapp.svg";
import REACT from "@/assets/caseStudiesDetailsImg/react.svg";
import SMARTCONTRACT from "@/assets/caseStudiesDetailsImg/smart-contract.svg";
import MERNSTACK from "@/assets/caseStudiesDetailsImg/MERNSTACK.svg";
import AWS from "@/assets/caseStudiesDetailsImg/aws.svg";
import BITCOIN from "@/assets/caseStudiesDetailsImg/bitcoin.svg";

import Link from "next/link";

const CaseStudiesDetailsHeader = ({ case_ }) => {
	const { categories, title, description, technologies } = case_;

	const techImages = {
		Binance: BINANCE,
		Ethereum: ETHEREUM,
		Python: PYTHON,
		Nest: NEST,
		TypeScript: TYPESCRIPT,
		web3js: WEB3JS,
		Solidity: SOLIDITY,
		DApp: DAPP,
		React: REACT,
		smartcontracts: SMARTCONTRACT,
		MERNStack: MERNSTACK,
		Bitcoinjs: BITCOIN,
		AWS: AWS,
		Solidity: SOLIDITY,
	};

	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<div className={styles.navigationButtons}>
					<Link href="/case-studies" className={styles.prevPageButton}>
						<Image src={PrevButtonImage} alt="Go back" />
					</Link>
					{categories && categories.length ? (
						<div className={styles.tabsWrapper}>
							{categories.map((category) => (
								<button key={category} className={styles.tabButton}>
									{category}
								</button>
							))}
						</div>
					) : null}
				</div>

				<div className={styles.projectTitle}>
					<h1>{title}</h1>
				</div>

				<div className={styles.projectDescription}>
					<p>{description}</p>
					{technologies && technologies.length ? (
						<div className={styles.actionButtons}>
							{technologies.map((tech) => {
								const normalizedTech = tech.replace(/\s|\./g, "");

								return (
									techImages[normalizedTech] && ( // Проверка, существует ли изображение для нормализованного названия технологии
										<button key={tech} className={styles.actionButton}>
											<Image
												src={techImages[normalizedTech]}
												alt={tech}
												width={20}
												height={20}
											/>
										</button>
									)
								);
							})}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default CaseStudiesDetailsHeader;
