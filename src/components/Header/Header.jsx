import styles from './Header.module.css'

import logoImage from '../../assets/logo.svg'
import Dropdown from './Dropdown/Dropdown'

function Header() {
    return (
        <header className={styles.header}>
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
        </header>
    )
}

export default Header