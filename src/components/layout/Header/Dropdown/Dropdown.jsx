import { memo, useRef } from "react";
import styles from "./Dropdown.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = memo(function Dropdown({ title, options, isOpen, onToggle }) {
    const dropdownRef = useRef(null);

    const handleMouseLeave = () => {
        onToggle(); 
    };

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button
                onClick={onToggle}
                className={styles.dropdownButton}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {title}
                <span className={styles.arrow} aria-hidden="true">
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
            </button>
            {isOpen && (
                <ul 
                    className={styles.dropdownMenu} 
                    role="menu"
                    onMouseLeave={handleMouseLeave} 
                >
                    <div className={styles.soonBadge} aria-label="Coming soon">
                        Soon
                        <span></span>
                    </div>
                    {options.map((option, index) => (
                        <li key={index} role="menuitem">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default Dropdown;