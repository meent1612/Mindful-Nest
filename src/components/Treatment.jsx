import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Treatment.css";

const Treatment = () => {
  const [content, setContent] = useState("");
  const [type, setType] = useState("plan");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  // Fetch entries from backend
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await api.get("/api/treatment");
      setEntries(res.data.treatments || []);
    } catch (err) {
      console.error("Error fetching treatments:", err);
      setError(err.response?.data?.message || "Failed to load entries. Please try again.");
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError("");
    try {
      await api.post("/api/treatment", { type, content });
      setContent("");
      fetchEntries(); // Refresh entries
    } catch (err) {
      console.error("Error adding treatment:", err);
      setError(err.response?.data?.message || "Failed to save entry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete entry
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) {
      return;
    }

    setDeletingId(id);
    try {
      await api.delete(`/api/treatment/${id}`);
      fetchEntries(); // Refresh entries
    } catch (err) {
      console.error("Error deleting treatment:", err);
      setError(err.response?.data?.message || "Failed to delete entry. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container treatment-page">
      <h2 className="text-center mb-4 fw-bold text-primary">
        Treatment Plans & Coping Strategies
      </h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Form */}
      <form className="card p-4 shadow-sm mb-5" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              disabled={loading}
            >
              <option value="plan">📝 Treatment Plan</option>
              <option value="coping">🌱 Coping Strategy</option>
            </select>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="col-md-3 d-grid">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary fw-semibold"
            >
              {loading ? "Saving..." : "Add Entry"}
            </button>
          </div>
        </div>
      </form>

      {/* List */}
      <div className="row">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry._id} className="col-md-6 mb-4">
              <div
                className={`card shadow-sm border-0 entry-card ${
                  entry.type === "plan" ? "plan-card" : "coping-card"
                }`}
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title fw-bold mb-2">
                      {entry.type === "plan"
                        ? "📝 Treatment Plan"
                        : "🌱 Coping Strategy"}
                    </h5>
                    <button
                      onClick={() => handleDelete(entry._id)}
                      disabled={deletingId === entry._id}
                      className="btn btn-sm btn-outline-danger"
                      title="Delete entry"
                    >
                      {deletingId === entry._id ? (
                        <span className="spinner-border spinner-border-sm" />
                      ) : (
                        "✕"
                      )}
                    </button>
                  </div>
                  <p className="card-text">{entry.content}</p>
                  <small className="text-muted">
                    {new Date(entry.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No entries yet. Add one above!</p>
        )}
      </div>
    </div>
  );
};

export default Treatment;