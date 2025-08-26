import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Treatment.css";

const Treatment = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("plan");
  const [entries, setEntries] = useState([]);

  // Fetch entries from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/treatment")
      .then((res) => setEntries(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/treatment", {
        user: "DemoUser", // later replace with actual logged-in user
        type,
        text,
      });
      setText("");
      const res = await axios.get("http://localhost:5000/api/treatment");
      setEntries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container treatment-page">
      <h2 className="text-center mb-4">Treatment Plans & Coping Strategies</h2>

      {/* Form */}
      <form className="card p-4 shadow-sm mb-5" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="plan">Treatment Plan</option>
              <option value="coping">Coping Strategy</option>
            </select>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Write your note here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          <div className="col-md-3 d-grid">
            <button type="submit" className="btn btn-primary">
              Add Entry
            </button>
          </div>
        </div>
      </form>

      {/* List */}
      <div className="row">
        {entries.map((entry) => (
          <div key={entry._id} className="col-md-6 mb-4">
            <div className={`card shadow-sm border-${entry.type}`}>
              <div className="card-body">
                <h5
                  className={`card-title text-capitalize text-${entry.type}`}
                >
                  {entry.type === "plan" ? "📝 Treatment Plan" : "🌱 Coping Strategy"}
                </h5>
                <p className="card-text">{entry.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
