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
            </div>
        </>
    );
}