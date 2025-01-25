import { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer() {
    const [text, setText] = useState("");

    return (
        <div className={styles.textAreaContainer}>
            <button className={styles.focusButton}>Focus</button>
            <textarea
                className={styles.textArea}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your answer here"
            ></textarea>
        </div>
    );
}
