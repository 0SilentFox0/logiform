"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import HeaderUnion from "@/components/layout/Header/HeaderUnion/HeaderUnion";
import Dropdown from "@/components/layout/Header/Dropdown/Dropdown";
import AnchorLink from "react-anchor-link-smooth-scroll";

import logoImage from "@/assets/logo.svg";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleNavbar = () => {
		setIsOpen((prevState) => !prevState);
	};

	const closeNavbar = () => {
		setIsOpen(false);
	};

	const handleDropdownToggle = (dropdownName) => {
		setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
	};

	const handleClick = () => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	};

	useEffect(() => {
		if (isOpen) {
			// Disable body scroll when the overlay is open
			document.body.style.overflow = "hidden";
		} else {
			// Enable body scroll when the overlay is closed
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto"; // Cleanup
		};
	}, [isOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 968 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize(); // Initial check for wide screens

		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen]);

	return (
		<header className={styles.header}>
			<HeaderUnion />

			<div className={styles.headerContainer}>
				<Link href="/" className={styles.logo} onClick={handleClick}>
					<Image src={logoImage} alt="Logiform Logo" />
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
							<AnchorLink href="#contact">Partner with us</AnchorLink>
						</li>
					</ul>
				</nav>
				<div className={styles.contactButton}>
					<AnchorLink href="#contact" className={styles.anchorContactButton}>
						Contact us
					</AnchorLink>
				</div>
				<div
					className={`${isOpen ? styles.burgerMenuOpen : styles.burgerMenu}`}
				>
					<button onClick={toggleNavbar}>
						{isOpen ? <IoMdClose /> : <IoMenuOutline />}
					</button>
				</div>
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
							<AnchorLink href="#contact" onClick={closeNavbar}>
								Partner with us
							</AnchorLink>
						</li>
					</ul>

					<div className={styles.contactButtonMenu}>
						<AnchorLink href="#contact" className={styles.anchor}>
							<button onClick={closeNavbar}>Contact us</button>
						</AnchorLink>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
