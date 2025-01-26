
export default function LLMResponse({ response, score, loading }) {
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>LLM Response:</h2>
            <p>{response}</p>
            <h3>Score:</h3>
            <p>{score}</p>
        </div>
    );
}