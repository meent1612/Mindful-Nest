import React, { useState } from "react";
import "../styles/ProblemChecker.css";
import axios from "axios";

const ProblemChecker = () => {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/problems/check", {
        text: problem,
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="problem-checker-container">
      <h2 className="problem-checker-title">Describe Your Problem</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Tell us what you're feeling..."
          className="problem-checker-textarea"
          required
        />
        <button type="submit" className="problem-checker-button">
          Analyze
        </button>
      </form>

      {result && (
        <div className="problem-checker-result">
          <h3>Possible Related Issues:</h3>
          <ul>
            {result.categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>

          {result.suggestions.length > 0 && (
            <>
              <h4>Suggested Resources:</h4>
              <ul>
                {result.suggestions.map((res) => (
                  <li key={res._id}>
                    <a href={res.url} target="_blank" rel="noreferrer">
                      {res.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProblemChecker;
