import styles from './Header.module.css'

import logoImage from '../../assets/logo.svg'
import Dropdown from './Dropdown/Dropdown'
import HeaderUnion from './HeaderUnion/HeaderUnion'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMenuOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(prevState => !prevState);
    }

    const closeNavbar = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            // Disable body scroll when overlay is open
            document.body.style.overflow = 'hidden';
        } else {
            // Enable body scroll when overlay is closed
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset overflow style when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 968 && isOpen) {
                setIsOpen(false);
            }
        };

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Initial check in case the screen is already wide
        handleResize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <header>
            <HeaderUnion />

            <div className={styles.headerContainer}>
                <Link to={ROUTES.HOME} className={styles.logo}>
                    <img src={logoImage} alt="Logiform Logo" />
                    <span>Logiform</span>
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li><Dropdown title="Services" options={['Smart Contracts', 'Web3&BlockChain', 'Web Development', 'UI/UX design']} /></li>
                        <li><Link to={'/case-studies'} >Case studies</Link></li>
                        <li><Link to={'/about-us'} >About us</Link></li>
                        <li><Link to={'/blog'} >Blog</Link></li>
                        <li><Dropdown title="Resources" options={['Option 1', 'Option 2', 'Option 3']} /></li>
                        <li><AnchorLink href='#contact'>Partner with us</AnchorLink></li>
                    </ul>
                </nav>
                <div className={styles.contactButton}>
                    <AnchorLink href='#contact' className={styles.anchorContactButton}>Contact us</AnchorLink>
                </div>
                <div className={`${isOpen ? styles.burgerMenuOpen : styles.burgerMenu}`}>
                    <button onClick={toggleNavbar}>{isOpen ? <IoMdClose /> : <IoMenuOutline />}</button>
                </div>
            </div>

            {isOpen && (
                <div className={styles.overlay}>
                    <ul className={styles.overlayMenu}>
                        <li><Dropdown title="Services" options={['Smart Contracts', 'Web3&BlockChain', 'Web Development', 'UI/UX design']} /></li>
                        <li><Link to={'/case-studies'} onClick={closeNavbar}>Case studies</Link></li>
                        <li><Link to={'/about-us'} onClick={closeNavbar}>About us</Link></li>
                        <li><Link to={'/blog'} onClick={closeNavbar}>Blog</Link></li>
                        <li><Dropdown title="Resources" options={['Option 1', 'Option 2', 'Option 3']} /></li>
                        <li><AnchorLink href='#contact'>Partner with us</AnchorLink></li>
                    </ul>

                    <div className={styles.contactButtonMenu}>
                        <AnchorLink href='#contact' className={styles.anchor}><button onClick={closeNavbar}>Contact us</button></AnchorLink>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header



