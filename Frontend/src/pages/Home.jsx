import Header from "../components/Header.jsx";
import "./Home.css"; // Import the CSS file

export default function Home() {
    return (
        <>
            <Header />
            <div className="home-container">
                <div className="animated-background"></div>
                <h1 className="middle-heading">
                    meet <br />
                    casper.ai
                </h1>
                <section className="problematic-section">
                    <div className="problematic-content">
                        <h2>The Problem</h2>
                        <p>
                            Test-taking is often stressful and inefficient, leaving students struggling
                            with preparation and unclear results.
                        </p>
                    </div>
                    <div className="solution-content">
                        <h2>The Solution</h2>
                        <p>
                            Casper.ai streamlines test preparation with AI-powered tools that
                            analyze performance, suggest improvements, and optimize study habits.
                        </p>
                        <button
                            className="redirect-button"
                            onClick={() => window.location.href = "http://localhost:5173/testtaking"}
                        >
                            Learn More
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}