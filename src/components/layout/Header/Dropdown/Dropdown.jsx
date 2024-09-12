/* eslint-disable react/prop-types */
import styles from './Dropdown.module.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Dropdown({ title, options, isOpen, onToggle }) {
    return (
        <div className={styles.dropdown}>
            <div onClick={onToggle} className={styles.dropdownButton}>
                <div>{title}</div>
                <span className={styles.arrow}>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
            </div>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    <div className={styles.soonBadge}>
                        Soon
                        <span></span>
                    </div>
                    {options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;