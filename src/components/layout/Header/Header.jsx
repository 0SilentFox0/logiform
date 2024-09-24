"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import HeaderUnion from "@/components/layout/Header/HeaderUnion/HeaderUnion";
import Dropdown from "@/components/layout/Header/Dropdown/Dropdown";

import logoImage from "@/assets/logo.svg";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleNavbar = useCallback(() => {
		setIsOpen((prevState) => !prevState);
	}, []);

	const closeNavbar = useCallback(() => {
		setIsOpen(false);
	}, []);

	const handleDropdownToggle = useCallback((dropdownName) => {
		setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
	}, []);

	const handleClick = useCallback(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 968 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	return (
		<header className={styles.header}>
			<HeaderUnion />

			<div className={styles.headerContainer}>
				<Link href="/" className={styles.logo} onClick={handleClick}>
					<Image src={logoImage} alt="Logiform Logo" width={40} height={40} />
					<span>Logiform</span>
				</Link>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Dropdown
								title="Services"
								options={[
									"Smart Contracts",
									"Web3 & Blockchain",
									"Web Development",
									"UI/UX Design",
								]}
								isOpen={openDropdown === "services"}
								onToggle={() => handleDropdownToggle("services")}
							/>
						</li>
						<li>
							<Link href="/case-studies" onClick={handleClick}>
								Case studies
							</Link>
						</li>
						<li>
							<Link href="/about-us" onClick={handleClick}>
								About us
							</Link>
						</li>
						<li>
							<Link href="/blog" onClick={handleClick}>
								Blog
							</Link>
						</li>
						<li>
							<Dropdown
								title="Resources"
								options={["Option 1", "Option 2", "Option 3"]}
								isOpen={openDropdown === "resources"}
								onToggle={() => handleDropdownToggle("resources")}
							/>
						</li>
						<li>
							<Link href="#contact" className={styles.anchor}>
								Partner with us
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.contactButton}>
					<Link href="#contact" className={styles.anchorContactButton}>
						Contact us
					</Link>
				</div>
				<button
					className={`${isOpen ? styles.burgerMenuOpen : styles.burgerMenu}`}
					onClick={toggleNavbar}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					{isOpen ? (
						<IoMdClose aria-hidden="true" />
					) : (
						<IoMenuOutline aria-hidden="true" />
					)}
				</button>
			</div>

			{isOpen && (
				<div className={styles.overlay}>
					<ul className={styles.overlayMenu}>
						<li>
							<Dropdown
								title="Services"
								options={[
									"Smart Contracts",
									"Web3 & Blockchain",
									"Web Development",
									"UI/UX Design",
								]}
							/>
						</li>
						<li>
							<Link href="/case-studies" onClick={closeNavbar}>
								Case studies
							</Link>
						</li>
						<li>
							<Link href="/about-us" onClick={closeNavbar}>
								About us
							</Link>
						</li>
						<li>
							<Link href="/blog" onClick={closeNavbar}>
								Blog
							</Link>
						</li>
						<li>
							<Dropdown
								title="Resources"
								options={["Option 1", "Option 2", "Option 3"]}
							/>
						</li>
						<li>
							<Link
								href="#contact"
								className={styles.anchor}
								onClick={closeNavbar}
							>
								Partner with us
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}

export default Header;
