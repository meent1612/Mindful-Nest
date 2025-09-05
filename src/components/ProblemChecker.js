import React, { useState } from "react";
import api from "../api";

const ProblemChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    try {
      const response = await api.post("/api/problems/check", { text });
      setResult(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Authentication required.");
    }
  };

  return (
    <div className="problem-checker-page">
      <h1>Problem Checker</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe your feelings..."
      />
      <button onClick={handleCheck}>Check</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <h3>Categories:</h3>
          <ul>
            {result.categories.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProblemChecker;
