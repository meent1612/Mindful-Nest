import CrisisData from "../models/CrisisData.js";

// @desc    Get crisis data for user
// @route   GET /api/crisis-data
// @access  Private
export const getCrisisData = async (req, res, next) => {
  try {
    let crisisData = await CrisisData.findOne({ user: req.user._id });

    // If no crisis data exists, create default one
    if (!crisisData) {
      crisisData = await CrisisData.create({
        emergencyContacts: [],
        personalReminders: [],
        copingStrategies: [],
        user: req.user._id
      });
    }

    res.status(200).json(crisisData);
  } catch (error) {
    next(error);
  }
};

// @desc    Update crisis data
// @route   PUT /api/crisis-data
// @access  Private
export const updateCrisisData = async (req, res, next) => {
  try {
    const { emergencyContacts, personalReminders, copingStrategies } = req.body;

    let crisisData = await CrisisData.findOne({ user: req.user._id });

    if (!crisisData) {
      // Create new crisis data if it doesn't exist
      crisisData = await CrisisData.create({
        emergencyContacts,
        personalReminders,
        copingStrategies,
        user: req.user._id
      });
    } else {
      // Update existing crisis data
      crisisData = await CrisisData.findOneAndUpdate(
        { user: req.user._id },
        {
          emergencyContacts,
          personalReminders,
          copingStrategies
        },
        { new: true, runValidators: true }
      );
    }

    res.status(200).json(crisisData);
  } catch (error) {
    next(error);
  }
};

// @desc    Add emergency contact
// @route   POST /api/crisis-data/contacts
// @access  Private
export const addEmergencyContact = async (req, res, next) => {
  try {
    const { name, phone, relationship } = req.body;

    let crisisData = await CrisisData.findOne({ user: req.user._id });

    if (!crisisData) {
      crisisData = await CrisisData.create({
        emergencyContacts: [{ name, phone, relationship }],
        personalReminders: [],
        copingStrategies: [],
        user: req.user._id
      });
    } else {
      crisisData.emergencyContacts.push({ name, phone, relationship });
      await crisisData.save();
    }

    res.status(201).json(crisisData);
  } catch (error) {
    next(error);
  }
};

// @desc    Add personal reminder
// @route   POST /api/crisis-data/reminders
// @access  Private
export const addPersonalReminder = async (req, res, next) => {
  try {
    const { reminder } = req.body;

    let crisisData = await CrisisData.findOne({ user: req.user._id });

    if (!crisisData) {
      crisisData = await CrisisData.create({
        emergencyContacts: [],
        personalReminders: [reminder],
        copingStrategies: [],
        user: req.user._id
      });
    } else {
      crisisData.personalReminders.push(reminder);
      await crisisData.save();
    }

    res.status(201).json(crisisData);
  } catch (error) {
    next(error);
  }
};

// @desc    Add coping strategy
// @route   POST /api/crisis-data/strategies
// @access  Private
export const addCopingStrategy = async (req, res, next) => {
  try {
    const { strategy } = req.body;

    let crisisData = await CrisisData.findOne({ user: req.user._id });

    if (!crisisData) {
      crisisData = await CrisisData.create({
        emergencyContacts: [],
        personalReminders: [],
        copingStrategies: [strategy],
        user: req.user._id
      });
    } else {
      crisisData.copingStrategies.push(strategy);
      await crisisData.save();
    }

    res.status(201).json(crisisData);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete emergency contact
// @route   DELETE /api/crisis-data/contacts/:contactId
// @access  Private
export const deleteEmergencyContact = async (req, res, next) => {
  try {
    const crisisData = await CrisisData.findOne({ user: req.user._id });

    if (!crisisData) {
      return res.status(404).json({ message: "Crisis data not found" });
    }

    crisisData.emergencyContacts = crisisData.emergencyContacts.filter(
      contact => contact._id.toString() !== req.params.contactId
    );

    await crisisData.save();

    res.status(200).json(crisisData);
  } catch (error) {
    next(error);
  }
};