import { useState } from "react";
import axios from "axios";

function App() {
    const [url, setUrl] = useState("");
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        const res = await axios.post("https://your-backend-url/ask", { 
            leetcode_url: url, 
            question 
        });
        setResponse(res.data.response);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">DSA Chat Assistant</h1>
            <input type="text" placeholder="LeetCode URL" value={url} onChange={e => setUrl(e.target.value)} />
            <textarea placeholder="Your Question" value={question} onChange={e => setQuestion(e.target.value)}></textarea>
            <button onClick={handleSubmit}>Ask</button>
            <p>{response}</p>
        </div>
    );
}

export default App;
