import React, { useState, useEffect } from "react";
import api from "../api";
import "../styles/Treatment.css";

const Treatment = () => {
  const [activeTab, setActiveTab] = useState("assessment"); // 'assessment', 'plan', 'coping'
  const [problemArea, setProblemArea] = useState("");
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [helplines, setHelplines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingPlanId, setDeletingPlanId] = useState(null);

  // Fetch user's treatment plans on component mount
  useEffect(() => {
    fetchTreatmentPlans();
  }, []);

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
      setHelplines(res.data.helplines || []);
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

  return (
    <div className="container treatment-page">
      <h2 className="text-center mb-4 fw-bold text-primary">
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

      {/* Assessment Tab */}
      {activeTab === "assessment" && (
        <div className="card p-4 shadow-sm mb-4">
          <h3 className="mb-3">Create Your Personalized Treatment Plan</h3>
          <p className="text-muted mb-4">
            Tell us what you're struggling with, and we'll create a personalized plan with milestones to help you.
          </p>
          
          <form onSubmit={handleAssessmentSubmit}>
            <div className="mb-3">
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
              className="btn btn-primary"
              disabled={loading || !problemArea}
            >
              {loading ? "Creating Your Plan..." : "Create My Plan"}
            </button>
          </form>
        </div>
      )}

      {/* Treatment Plan Tab */}
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
              
              {/* Helpline Recommendations */}
              {helplines.length > 0 && (
                <div className="mt-4">
                  <h5 className="mb-3">Recommended Bangladeshi Helplines</h5>
                  <div className="row">
                    {helplines.map(helpline => (
                      <div key={helpline._id} className="col-md-6 mb-3">
                        <div className="card h-100">
                          <div className="card-body">
                            <h6 className="card-title">{helpline.name}</h6>
                            <p className="card-text">{helpline.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <a href={`tel:${helpline.phone}`} className="btn btn-outline-primary btn-sm">
                                {helpline.phone}
                              </a>
                              {helpline.website && (
                                <a href={helpline.website} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-sm">
                                  Visit Website
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

      {/* Coping Strategies Tab */}
      {activeTab === "coping" && (
        <div>
          <h3 className="mb-4">Coping Strategies Library</h3>
          <p className="text-muted">This feature is coming soon! You'll be able to browse coping strategies and save your favorites.</p>
          <button className="btn btn-outline-primary" disabled>
            Browse Strategies
          </button>
        </div>
      )}
    </div>
  );
};

export default Treatment;