import TreatmentPlan from "../models/TreatmentPlan.js";
import Helpline from "../models/Helpline.js";

// Predefined treatment plans based on problem areas
const predefinedPlans = {
  anxiety: {
    title: "Anxiety Reduction Plan",
    description: "A step-by-step plan to help manage and reduce anxiety symptoms",
    milestones: [
      "Practice deep breathing for 5 minutes",
      "Identify three anxiety triggers",
      "Try a grounding technique when feeling anxious",
      "Practice progressive muscle relaxation",
      "Schedule worry time for 15 minutes daily"
    ]
  },
  depression: {
    title: "Mood Improvement Plan",
    description: "Activities to help improve mood and combat depressive symptoms",
    milestones: [
      "Take a 10-minute walk outside",
      "Write down three things you're grateful for",
      "Reach out to a friend or family member",
      "Engage in a hobby for 30 minutes",
      "Practice positive self-talk"
    ]
  },
  stress: {
    title: "Stress Management Plan",
    description: "Strategies to better manage and reduce stress in your life",
    milestones: [
      "Identify your main stress sources",
      "Practice mindfulness meditation for 10 minutes",
      "Take three breaks during your day to stretch and breathe",
      "Delegate one task you don't need to do yourself",
      "Create a relaxing bedtime routine"
    ]
  },
  sleep: {
    title: "Sleep Improvement Plan",
    description: "Healthy habits to improve sleep quality and duration",
    milestones: [
      "Establish a consistent sleep schedule",
      "Create a relaxing pre-bed routine",
      "Avoid screens for 1 hour before bed",
      "Make your sleep environment more comfortable",
      "Practice relaxation techniques before sleep"
    ]
  }
};

// Create a new treatment plan based on user's problem area
export const createTreatmentPlan = async (req, res) => {
  try {
    const { problemArea } = req.body;

    if (!problemArea) {
      return res.status(400).json({ success: false, message: "Problem area is required" });
    }

    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    // Get the predefined plan for the problem area or use a default
    const planTemplate = predefinedPlans[problemArea] || {
      title: "Personalized Wellness Plan",
      description: "A customized plan to help improve your mental wellbeing",
      milestones: [
        "Practice self-care for 15 minutes today",
        "Identify one positive thing about your day",
        "Connect with someone you care about",
        "Take time to relax and unwind",
        "Reflect on your progress and adjust as needed"
      ]
    };

    // Create the treatment plan with milestones
    const treatmentPlan = new TreatmentPlan({
      user: req.userId,
      problemArea,
      title: planTemplate.title,
      description: planTemplate.description,
      milestones: planTemplate.milestones.map(text => ({ text }))
    });

    await treatmentPlan.save();

    // Get relevant helplines based on problem area
    const helplines = await Helpline.find({
      problemAreas: { $in: [problemArea] }
    });

    res.status(201).json({ 
      success: true, 
      treatmentPlan,
      helplines 
    });
  } catch (error) {
    console.error("Create treatment plan error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get all treatment plans for a user
export const getTreatmentPlans = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const treatmentPlans = await TreatmentPlan.find({ user: req.userId }).sort({ createdAt: -1 });
    
    res.json({ success: true, treatmentPlans });
  } catch (error) {
    console.error("Get treatment plans error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Update a milestone's completion status
export const updateMilestone = async (req, res) => {
  try {
    const { planId, milestoneIndex } = req.params;
    const { completed } = req.body;

    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const treatmentPlan = await TreatmentPlan.findOne({ _id: planId, user: req.userId });
    
    if (!treatmentPlan) {
      return res.status(404).json({ success: false, message: "Treatment plan not found" });
    }

    if (milestoneIndex >= treatmentPlan.milestones.length) {
      return res.status(400).json({ success: false, message: "Invalid milestone index" });
    }

    // Update the milestone
    treatmentPlan.milestones[milestoneIndex].completed = completed;
    treatmentPlan.milestones[milestoneIndex].dateCompleted = completed ? new Date() : null;
    
    // Check if all milestones are completed
    const allCompleted = treatmentPlan.milestones.every(m => m.completed);
    if (allCompleted) {
      treatmentPlan.completed = true;
    }
    
    await treatmentPlan.save();
    
    res.json({ success: true, treatmentPlan });
  } catch (error) {
    console.error("Update milestone error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Delete a treatment plan
export const deleteTreatmentPlan = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const treatmentPlan = await TreatmentPlan.findOne({ _id: id, user: req.userId });
    
    if (!treatmentPlan) {
      return res.status(404).json({ success: false, message: "Treatment plan not found" });
    }

    await TreatmentPlan.findByIdAndDelete(id);
    
    res.json({ success: true, message: "Treatment plan deleted successfully" });
  } catch (error) {
    console.error("Delete treatment plan error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};