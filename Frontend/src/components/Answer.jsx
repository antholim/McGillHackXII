import { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer({ userInput, handleInputChange}) {
    const [text, setText] = useState("");

    return (
        <div className={styles.textAreaContainer}>
            {/*<button className={styles.focusButton}>Focus</button>*/}
            <textarea
                className={styles.textArea}
                value={userInput}
                onChange={handleInputChange}
                placeholder="Write your answer here"
            ></textarea>
        </div>
    );
}
