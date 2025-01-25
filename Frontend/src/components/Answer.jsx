import { useState } from 'react';
import styles from './Answer.module.css'



export default function Answer() {
    const [text, setText] = useState('');


    return (

        <textarea className={styles.textArea} onChange={(e) => setText(e.target.value)} placeholder='Write youre answer here'>

        </textarea>
    )

}