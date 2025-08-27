import Treatment from "../models/Treatments.js";

// @desc Get all treatment entries
// @route GET /api/treatments
export const getTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find().sort({ createdAt: -1 });
    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching treatments", error });
  }
};

// @desc Add a new treatment entry
// @route POST /api/treatments
export const addTreatment = async (req, res) => {
  try {
    const { user, type, text } = req.body;

    if (!user || !type || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTreatment = new Treatment({
      user,
      type,
      text,
    });

    const saved = await newTreatment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error saving treatment", error });
  }
};

// @desc Delete a treatment entry
// @route DELETE /api/treatments/:id
export const deleteTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Treatment.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Treatment not found" });
    }

    res.status(200).json({ message: "Treatment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting treatment", error });
  }
};
