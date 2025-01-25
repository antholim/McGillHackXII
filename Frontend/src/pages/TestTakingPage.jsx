import styles from "./TestTakingPage.module.css"
import Answer from "../components/Answer.jsx";
import Question from "../components/Question.jsx";

export default function testTakingPage() {

    return (
        <div className={styles.mainContainer}>

            <div className={styles.leftContainer}>

                <div className={styles.questionContainer}>
                    <Question/>

                </div>
                <div className={styles.answerContainer}>
                    <Answer/>
                </div>

            </div>

            <div className={styles.rightContainer}>


            </div>


        </div>

    )
}