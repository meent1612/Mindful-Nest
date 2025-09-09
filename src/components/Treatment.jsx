import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Treatment.css";

const Treatment = () => {
  const [activeTab, setActiveTab] = useState("assessment");
  const [problemArea, setProblemArea] = useState("");
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingPlanId, setDeletingPlanId] = useState(null);
  const [copingStrategies, setCopingStrategies] = useState([]);
  const [filteredStrategies, setFilteredStrategies] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Predefined coping strategies
  const predefinedStrategies = [
    {
      id: 1,
      title: "Deep Breathing",
      description: "Focus on taking slow, deep breaths to calm your nervous system.",
      category: "relaxation",
      duration: "5-10 minutes",
      difficulty: "easy"
    },
    {
      id: 2,
      title: "Mindful Walking",
      description: "Pay attention to each step and your surroundings as you walk.",
      category: "mindfulness",
      duration: "10-15 minutes",
      difficulty: "easy"
    },
    {
      id: 3,
      title: "Progressive Muscle Relaxation",
      description: "Tense and relax each muscle group in your body progressively.",
      category: "relaxation",
      duration: "10-15 minutes",
      difficulty: "medium"
    },
    {
      id: 4,
      title: "Gratitude Journaling",
      description: "Write down three things you're grateful for today.",
      category: "cognitive",
      duration: "5-10 minutes",
      difficulty: "easy"
    },
    {
      id: 5,
      title: "5-4-3-2-1 Grounding",
      description: "Name 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.",
      category: "mindfulness",
      duration: "3-5 minutes",
      difficulty: "easy"
    },
    {
      id: 6,
      title: "Art Therapy",
      description: "Express your feelings through drawing, painting, or coloring.",
      category: "creative",
      duration: "15-30 minutes",
      difficulty: "medium"
    },
    {
      id: 7,
      title: "Call a Friend",
      description: "Reach out to someone you trust for a conversation.",
      category: "social",
      duration: "10-30 minutes",
      difficulty: "easy"
    },
    {
      id: 8,
      title: "Yoga Stretches",
      description: "Perform gentle yoga poses to release tension.",
      category: "physical",
      duration: "10-15 minutes",
      difficulty: "medium"
    },
    {
      id: 9,
      title: "Thought Challenging",
      description: "Identify and challenge negative or irrational thoughts.",
      category: "cognitive",
      duration: "10-15 minutes",
      difficulty: "hard"
    },
    {
      id: 10,
      title: "Nature Immersion",
      description: "Spend time in nature, noticing the sights and sounds around you.",
      category: "mindfulness",
      duration: "15-30 minutes",
      difficulty: "easy"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Strategies" },
    { id: "relaxation", name: "Relaxation" },
    { id: "mindfulness", name: "Mindfulness" },
    { id: "physical", name: "Physical" },
    { id: "social", name: "Social" },
    { id: "cognitive", name: "Cognitive" },
    { id: "creative", name: "Creative" }
  ];

  // Fetch user's treatment plans on component mount
  useEffect(() => {
    fetchTreatmentPlans();
    setCopingStrategies(predefinedStrategies);
    setFilteredStrategies(predefinedStrategies);
    
    // In a real app, you would fetch favorites from the backend
    const userFavorites = [1, 3, 7]; // Example favorite IDs
    setFavorites(userFavorites);
  }, []);

  // Filter strategies when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredStrategies(copingStrategies);
    } else {
      const filtered = copingStrategies.filter(
        strategy => strategy.category === activeCategory
      );
      setFilteredStrategies(filtered);
    }
  }, [activeCategory, copingStrategies]);

  // Filter strategies when favorites toggle changes
  useEffect(() => {
    if (showFavorites) {
      const favoriteStrategies = copingStrategies.filter(
        strategy => favorites.includes(strategy.id)
      );
      setFilteredStrategies(favoriteStrategies);
    } else if (activeCategory !== "all") {
      const filtered = copingStrategies.filter(
        strategy => strategy.category === activeCategory
      );
      setFilteredStrategies(filtered);
    } else {
      setFilteredStrategies(copingStrategies);
    }
  }, [showFavorites, favorites, copingStrategies, activeCategory]);

  const fetchTreatmentPlans = async () => {
    try {
      const res = await api.get("/api/treatment/plans");
      setTreatmentPlans(res.data.treatmentPlans || []);
    } catch (err) {
      console.error("Error fetching treatment plans:", err);
      setError(err.response?.data?.message || "Failed to load treatment plans.");
    }
  };

  const handleAssessmentSubmit = async (e) => {
    e.preventDefault();
    if (!problemArea) return;

    setLoading(true);
    setError("");
    try {
      const res = await api.post("/api/treatment/plan", { problemArea });
      setCurrentPlan(res.data.treatmentPlan);
      setActiveTab("plan");
      fetchTreatmentPlans(); // Refresh the list of plans
    } catch (err) {
      console.error("Error creating treatment plan:", err);
      setError(err.response?.data?.message || "Failed to create treatment plan.");
    } finally {
      setLoading(false);
    }
  };

  const handleMilestoneToggle = async (planId, milestoneIndex, completed) => {
    try {
      await api.put(`/api/treatment/plan/${planId}/milestone/${milestoneIndex}`, { completed });
      fetchTreatmentPlans(); // Refresh to get updated data
      
      // If we're currently viewing this plan, update it
      if (currentPlan && currentPlan._id === planId) {
        const updatedPlan = { ...currentPlan };
        updatedPlan.milestones[milestoneIndex].completed = completed;
        updatedPlan.milestones[milestoneIndex].dateCompleted = completed ? new Date() : null;
        setCurrentPlan(updatedPlan);
      }
    } catch (err) {
      console.error("Error updating milestone:", err);
      setError(err.response?.data?.message || "Failed to update milestone.");
    }
  };

  const handleDeletePlan = async (planId) => {
    if (!window.confirm("Are you sure you want to delete this treatment plan? This action cannot be undone.")) {
      return;
    }

    setDeletingPlanId(planId);
    try {
      await api.delete(`/api/treatment/plan/${planId}`);
      
      // If we're currently viewing the deleted plan, clear it
      if (currentPlan && currentPlan._id === planId) {
        setCurrentPlan(null);
      }
      
      // Refresh the list of plans
      fetchTreatmentPlans();
    } catch (err) {
      console.error("Error deleting treatment plan:", err);
      setError(err.response?.data?.message || "Failed to delete treatment plan.");
    } finally {
      setDeletingPlanId(null);
    }
  };

  const calculateProgress = (plan) => {
    if (!plan || !plan.milestones.length) return 0;
    const completed = plan.milestones.filter(m => m.completed).length;
    return (completed / plan.milestones.length) * 100;
  };

  const viewPlan = (plan) => {
    setCurrentPlan(plan);
    setActiveTab("plan");
  };

  const toggleFavorite = (strategyId) => {
    if (favorites.includes(strategyId)) {
      setFavorites(favorites.filter(id => id !== strategyId));
    } else {
      setFavorites([...favorites, strategyId]);
    }
  };

  return (
    <div className="container treatment-page">
      <h2 className="text-center mb-4 fw-bold" style={{ color: '#3E4D34' }}>
        Mental Wellness Toolkit
      </h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "assessment" ? "active" : ""}`}
            onClick={() => setActiveTab("assessment")}
          >
            Assessment
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "plan" ? "active" : ""}`}
            onClick={() => setActiveTab("plan")}
            disabled={!treatmentPlans.length}
          >
            My Plan
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === "coping" ? "active" : ""}`}
            onClick={() => setActiveTab("coping")}
          >
            Coping Strategies
          </button>
        </li>
      </ul>

      {/* Assessment Tab - Redesigned */}
      {activeTab === "assessment" && (
        <div className="assessment-card">
          <h3 className="assessment-title">Create Your Personalized Treatment Plan</h3>
          <p className="assessment-subtitle">
            Tell us what you're struggling with, and we'll create a personalized plan with milestones to help you.
          </p>
          
          <form onSubmit={handleAssessmentSubmit} className="assessment-form">
            <div className="form-group">
              <label className="form-label">What are you primarily struggling with?</label>
              <select 
                className="form-select"
                value={problemArea}
                onChange={(e) => setProblemArea(e.target.value)}
                required
                disabled={loading}
              >
                <option value="">Select an option</option>
                <option value="anxiety">Anxiety</option>
                <option value="depression">Depression</option>
                <option value="stress">Stress</option>
                <option value="sleep">Sleep Problems</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="assessment-submit-btn"
              disabled={loading || !problemArea}
            >
              {loading ? "Creating Your Plan..." : "Create My Plan"}
            </button>
          </form>
        </div>
      )}

      {/* Treatment Plan Tab - Unchanged */}
      {activeTab === "plan" && (
        <div>
          {currentPlan ? (
            <div className="card p-4 shadow-sm mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>{currentPlan.title}</h3>
                <div>
                  <button 
                    className="btn btn-outline-secondary btn-sm me-2"
                    onClick={() => setCurrentPlan(null)}
                  >
                    View All Plans
                  </button>
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDeletePlan(currentPlan._id)}
                    disabled={deletingPlanId === currentPlan._id}
                  >
                    {deletingPlanId === currentPlan._id ? (
                      <span className="spinner-border spinner-border-sm" />
                    ) : (
                      "Delete Plan"
                    )}
                  </button>
                </div>
              </div>
              
              <p className="text-muted mb-4">{currentPlan.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-muted">Progress</span>
                  <span className="fw-bold">
                    {Math.round(calculateProgress(currentPlan))}% Complete
                  </span>
                </div>
                <div className="progress" style={{ height: "20px" }}>
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: `${calculateProgress(currentPlan)}%` }}
                    aria-valuenow={calculateProgress(currentPlan)} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                    {Math.round(calculateProgress(currentPlan))}%
                  </div>
                </div>
              </div>
              
              {/* Milestones List */}
              <h5 className="mb-3">Milestones</h5>
              <div className="list-group">
                {currentPlan.milestones.map((milestone, index) => (
                  <div key={index} className="list-group-item">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-3"
                        type="checkbox"
                        checked={milestone.completed}
                        onChange={(e) => handleMilestoneToggle(currentPlan._id, index, e.target.checked)}
                        id={`milestone-${index}`}
                      />
                      <label 
                        className={`form-check-label flex-grow-1 ${milestone.completed ? "text-decoration-line-through text-muted" : ""}`}
                        htmlFor={`milestone-${index}`}
                      >
                        {milestone.text}
                      </label>
                      {milestone.completed && milestone.dateCompleted && (
                        <small className="text-muted ms-2">
                          Completed on {new Date(milestone.dateCompleted).toLocaleDateString()}
                        </small>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Your Treatment Plans</h3>
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => setActiveTab("assessment")}
                >
                  Create New Plan
                </button>
              </div>
              
              {treatmentPlans.length > 0 ? (
                <div className="row">
                  {treatmentPlans.map(plan => (
                    <div key={plan._id} className="col-md-6 mb-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="card-title">{plan.title}</h5>
                            <button 
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDeletePlan(plan._id)}
                              disabled={deletingPlanId === plan._id}
                              title="Delete plan"
                            >
                              {deletingPlanId === plan._id ? (
                                <span className="spinner-border spinner-border-sm" />
                              ) : (
                                "✕"
                              )}
                            </button>
                          </div>
                          <p className="card-text">{plan.description}</p>
                          
                          <div className="mb-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <small className="text-muted">Progress</small>
                              <small className="fw-bold">{Math.round(calculateProgress(plan))}%</small>
                            </div>
                            <div className="progress" style={{ height: "8px" }}>
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: `${calculateProgress(plan)}%` }}
                                aria-valuenow={calculateProgress(plan)} 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          
                          <button 
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => viewPlan(plan)}
                          >
                            {plan.completed ? "View Completed Plan" : "Continue Plan"}
                          </button>
                        </div>
                        <div className="card-footer text-muted">
                          Created on {new Date(plan.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">You don't have any treatment plans yet.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setActiveTab("assessment")}
                  >
                    Create Your First Plan
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Coping Strategies Tab - Unchanged */}
      {activeTab === "coping" && (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Coping Strategies Library</h3>
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="favoritesToggle"
                checked={showFavorites}
                onChange={() => setShowFavorites(!showFavorites)}
              />
              <label className="form-check-label" htmlFor="favoritesToggle">
                Show Favorites Only
              </label>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowFavorites(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Strategies Grid */}
          <div className="row">
            {filteredStrategies.length > 0 ? (
              filteredStrategies.map(strategy => (
                <div key={strategy.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 coping-card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title">{strategy.title}</h5>
                        <button 
                          className={`btn btn-sm ${favorites.includes(strategy.id) ? 'btn-warning' : 'btn-outline-warning'}`}
                          onClick={() => toggleFavorite(strategy.id)}
                          title={favorites.includes(strategy.id) ? "Remove from favorites" : "Add to favorites"}
                        >
                          {favorites.includes(strategy.id) ? '★' : '☆'}
                        </button>
                      </div>
                      <p className="card-text">{strategy.description}</p>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="badge bg-secondary text-capitalize">{strategy.category}</span>
                          <small className="text-muted">{strategy.duration}</small>
                        </div>
                        <div className="mt-2">
                          <span className={`badge ${strategy.difficulty === 'easy' ? 'bg-success' : strategy.difficulty === 'medium' ? 'bg-warning' : 'bg-danger'}`}>
                            Difficulty: {strategy.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted">
                  {showFavorites 
                    ? "You haven't added any strategies to your favorites yet." 
                    : "No strategies found in this category."}
                </p>
                {showFavorites && (
                  <button 
                    className="btn btn-primary mt-2"
                    onClick={() => setShowFavorites(false)}
                  >
                    Browse All Strategies
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Treatment;