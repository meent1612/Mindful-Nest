import CrisisData from '../models/CrisisData.js';

// Get user's crisis data
export const getCrisisData = async (req, res) => {
  const data = await CrisisData.findOne({ user: req.userId });
  if (!data) return res.status(404).json({ emergencyContacts: [], personalReminders: [], copingStrategies: [] });
  res.status(200).json(data);
};

// Update user's crisis data
export const updateCrisisData = async (req, res) => {
  const { emergencyContacts, personalReminders, copingStrategies } = req.body;

  const updatedData = await CrisisData.findOneAndUpdate(
    { user: req.userId },
    { emergencyContacts, personalReminders, copingStrategies },
    { new: true, upsert: true } // creates new doc if not exists
  );

  res.status(200).json(updatedData);
};
