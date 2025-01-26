import Header from "../components/Header.jsx";
import "./Home.css"; // Import the CSS file
import { FaLinkedin } from "react-icons/fa"; // For LinkedIn logo
import Footer from "../components/Footer.jsx";

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
                <section className="founders-section">
                    <h2>Meet the Founders</h2>
                    <div className="founders-grid">
                        <div className="founder-card">
                            <h3>Anthony Lim</h3>
                            <p>Fullstack web deb </p>
                            <a href="https://www.linkedin.com/in/antho-lim/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} className="linkedin-icon" />
                            </a>
                        </div>
                        <div className="founder-card">
                            <h3>Andrew Ungureanu</h3>
                            <p>Experienced software engineer specializing in scalable web applications.</p>
                            <a href="https://www.linkedin.com/in/andrew-razvan-ungureanu-22b7402aa/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} className="linkedin-icon" />
                            </a>
                        </div>
                        <div className="founder-card">
                            <h3>François Martinez</h3>
                            <p>Marketing expert with a passion for connecting people through technology.</p>
                            <a href="https://www.linkedin.com/in/francois-j-martinez/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} className="linkedin-icon" />
                            </a>
                        </div>
                        <div className="founder-card">
                            <h3>Anthony Mousaoubaa</h3>
                            <p>Data scientist focused on leveraging AI to solve real-world problems.</p>
                            <a href="https://www.linkedin.com/in/anthony-mousaoubaa-0b08092b1/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} className="linkedin-icon" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}