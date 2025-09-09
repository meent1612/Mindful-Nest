import Treatment from "../models/Treatment.js";

// Add a new treatment or coping strategy
export const addTreatment = async (req, res) => {
  try {
    const { type, content } = req.body;

    if (!type || !content) {
      return res.status(400).json({ success: false, message: "Type and content are required" });
    }

    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const treatment = new Treatment({
      user: req.userId,
      type,
      content
    });

    await treatment.save();
    
    res.status(201).json({ success: true, treatment });
  } catch (error) {
    console.error("Add treatment error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Fetch treatments for logged-in user
export const getTreatments = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const treatments = await Treatment.find({ user: req.userId }).sort({ createdAt: -1 });
    
    res.json({ success: true, treatments });
  } catch (error) {
    console.error("Get treatments error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Delete a treatment entry
export const deleteTreatment = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const treatment = await Treatment.findOne({ _id: id, user: req.userId });
    
    if (!treatment) {
      return res.status(404).json({ success: false, message: "Treatment not found" });
    }

    await Treatment.findByIdAndDelete(id);
    
    res.json({ success: true, message: "Treatment deleted successfully" });
  } catch (error) {
    console.error("Delete treatment error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};