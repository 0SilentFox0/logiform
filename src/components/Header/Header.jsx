import styles from './Header.module.css'

import logoImage from '../../assets/logo.svg'
import Dropdown from './Dropdown/Dropdown'
import HeaderUnion from './HeaderUnion/HeaderUnion'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMenuOutline } from 'react-icons/io5'

// eslint-disable-next-line react/prop-types
function Header({ setIsOverlayOpen }) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        setIsOverlayOpen(newState);
    }

    return (
        <header>
            <HeaderUnion />

            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <img src={logoImage} alt="Logiform Logo" />
                    <span>Logiform</span>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Dropdown title="Services" options={['Smart Contracts', 'Web3&BlockChain', 'Web Development', 'UI/UX design']} /></li>
                        <li>Case studies</li>
                        <li>About us</li>
                        <li>Blog</li>
                        <li><Dropdown title="Resources" options={['Option 1', 'Option 2', 'Option 3']} /></li>
                        <li>Partner with us</li>
                    </ul>
                </nav>
                <div className={styles.contactButton}>
                    <button>Contact us</button>
                </div>
                <div className={` ${isOpen ? styles.burgerMenuOpen : styles.burgerMenu}`}>
                    <button onClick={toggleNavbar}>{isOpen ? <IoMdClose/> : <IoMenuOutline  />}</button>
                </div>
            </div>

            {isOpen && (
                <div className={styles.overlay}>
                    <ul className={styles.overlayMenu}>
                        <li><Dropdown title="Services" options={['Smart Contracts', 'Web3&BlockChain', 'Web Development', 'UI/UX design']} /></li>
                        <li>Case studies</li>
                        <li>About us</li>
                        <li>Blog</li>
                        <li><Dropdown title="Resources" options={['Option 1', 'Option 2', 'Option 3']} /></li>
                        <li>Partner with us</li>
                    </ul>
                    <div className={styles.contactButtonMenu}>
                        <button>Contact us</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header