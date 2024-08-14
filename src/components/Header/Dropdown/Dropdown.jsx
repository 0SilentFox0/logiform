/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from './Dropdown.module.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Dropdown({ title, options }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdown}>
            <div onClick={toggleDropdown} className={styles.dropdownButton}>
                <div>{title}</div>
                <span className={styles.arrow}>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
            </div>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {options.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown
