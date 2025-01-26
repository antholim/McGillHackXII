import { useState } from 'react';
import styles from './Question.module.css'
export default function Question() {

    const [currentOption, setCurrentOption] = useState(0);

    const options = [
        { id: 0, title: "Ai Generated Question", text: "This is the text for Option 1." },
        { id: 1, title: "From our database", text: "This is the text for Option 2." },
    ];

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setCurrentOption(option.id)}
                        className={`${styles.navButton} ${
                            currentOption === option.id ? styles.activeButton : ""
                        }`}
                    >
                        {option.title}
                    </button>
                ))}
            </nav>
            <div className={styles.question}>
                {options[currentOption].text}
            </div>

        </div>
    );
}