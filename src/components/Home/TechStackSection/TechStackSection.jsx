"use client";
import styles from "./TechStackSection.module.css";

import TON from "@/assets/TechImages/blockchain/TON logo.svg";
import Avalanche from "@/assets/TechImages/blockchain/Avalanche.svg";
import Binance from "@/assets/TechImages/blockchain/Binance.svg";
import Ethereum from "@/assets/TechImages/blockchain/Ethereum.svg";
import Near from "@/assets/TechImages/blockchain/Near.svg";
import Solana from "@/assets/TechImages/blockchain/Solana.svg";
import Polygon from "@/assets/TechImages/blockchain/Polygon.svg";

import EX from "@/assets/TechImages/backend/ex.svg";
import GO from "@/assets/TechImages/backend/go.svg";
import Microservice from "@/assets/TechImages/backend/Microservice.svg";
import Nest from "@/assets/TechImages/backend/Nest js.svg";
import Node from "@/assets/TechImages/backend/node-js.svg";
import Python from "@/assets/TechImages/backend/python.svg";

import Javascript from "@/assets/TechImages/frontend/Javascript logo.svg";
import Next from "@/assets/TechImages/frontend/nextjs.svg";
import React from "@/assets/TechImages/frontend/reactjs logo.svg";
import ReactNative from "@/assets/TechImages/frontend/reactnative.svg";
import Saas from "@/assets/TechImages/frontend/Saas.svg";
import SCSS from "@/assets/TechImages/frontend/SCSS.svg";
import Tailwind from "@/assets/TechImages/frontend/Tailwind CSS.svg";

import MongoDB from "@/assets/TechImages/databases/MongoDB.svg";
import MySQL from "@/assets/TechImages/databases/MySQL.svg";
import PostgreSQL from "@/assets/TechImages/databases/PostgreSQL.svg";

import AWS from "@/assets/TechImages/cloudServices/AWS.svg";
import Azure from "@/assets/TechImages/cloudServices/Azure.svg";
import Cloud from "@/assets/TechImages/cloudServices/google-cloud logo.svg";

import Docker from "@/assets/TechImages/devops/Docker.svg";
import Kubernetes from "@/assets/TechImages/devops/Kubernetes.svg";
import Image from "next/image";

import { useState } from "react";
const techCategories = {
	blockchain: [
		{ name: "Avalanche", image: Avalanche, style: "avalanche" },
		{ name: "TON", image: TON, style: "ton" },
		{ name: "Binance", image: Binance, style: "binance" },
		{ name: "Ethereum", image: Ethereum, style: "ethereum" },
		{ name: "Near", image: Near, style: "near" },
		{ name: "Solana", image: Solana, style: "solana" },
		{ name: "Polygon", image: Polygon, style: "polygon" },
	],
	backend: [
		{ name: "Express", image: EX, style: "express" },
		{ name: "GO", image: GO, style: "go" },
		{ name: "Microservices", image: Microservice, style: "microservices" },
		{ name: "Nest", image: Nest, style: "nest" },
		{ name: "Node", image: Node, style: "node" },
		{ name: "Python", image: Python, style: "python" },
	],
	frontend: [
		{ name: "Javascript", image: Javascript, style: "javaScript" },
		{ name: "Next", image: Next, style: "next" },
		{ name: "React", image: React, style: "react" },
		{ name: "React Native", image: ReactNative, style: "reactNative" },
		{ name: "SaaS", image: Saas, style: "sass" },
		{ name: "SCSS", image: SCSS, style: "scss" },
		{ name: "Tailwind CSS", image: Tailwind, style: "tailwind" },
	],
	databases: [
		{ name: "MongoDB", image: MongoDB, style: "mongoDB" },
		{ name: "MySQL", image: MySQL, style: "mySQL" },
		{ name: "PostgreSQL", image: PostgreSQL, style: "postgreSQL" },
	],
	cloudServices: [
		{ name: "AWS", image: AWS, style: "aws" },
		{ name: "Azure", image: Azure, style: "azure" },
		{ name: "Google Cloud", image: Cloud, style: "cloud" },
	],
	devops: [
		{ name: "Docker", image: Docker, style: "docker" },
		{ name: "Kubernetes", image: Kubernetes, style: "kubernetes" },
	],
};

function TechStackSection() {
	const [activeTab, setActiveTab] = useState("blockchain");

	return (
		<section className={styles.container}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>Our tech stack</h2>
				<p className={styles.subtitle}>
					We Master Web3 Technologies with Expertise in Blockchain, Back-End,
					Front-End, Databases, Cloud Services, and DevOps
				</p>
			</div>

			<div className={styles.tabsContainer}>
				<div className={styles.tabs}>
					{Object.keys(techCategories).map((category) => (
						<button
							key={category}
							className={`${styles.tab} ${
								activeTab === category ? styles.activeTab : ""
							}`}
							onClick={() => setActiveTab(category)}
						>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</button>
					))}
				</div>

				<div className={styles.content}>
					<div
						className={`${styles.containerGrid} ${styles.activeContainerGrid}`}
					>
						{techCategories[activeTab].map((tech) => (
							<div
								key={tech.name}
								className={`${styles.item} ${styles[tech.style] || ""}`}
							>
								<Image
									src={tech.image}
									alt={tech.name}
									width={50}
									height={50}
								/>
								<p>{tech.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default TechStackSection;
