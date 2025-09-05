import Letter from "../models/Letter.js";

// @desc    Get all letters for user
// @route   GET /api/letters
// @access  Private
export const getLetters = async (req, res, next) => {
  try {
    const letters = await Letter.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    // Check lock status for each letter
    const lettersWithLockStatus = letters.map(letter => {
      letter.checkLockStatus();
      return letter;
    });

    res.status(200).json(lettersWithLockStatus);
  } catch (error) {
    next(error);
  }
};

// @desc    Create new letter
// @route   POST /api/letters
// @access  Private
export const createLetter = async (req, res, next) => {
  try {
    const { title, content, recipientType, lockUntil } = req.body;

    const letter = await Letter.create({
      title,
      content,
      recipientType,
      lockUntil: lockUntil ? new Date(lockUntil) : null,
      user: req.user._id,
    });

    // Check initial lock status
    letter.checkLockStatus();
    await letter.save();

    res.status(201).json(letter);
  } catch (error) {
    next(error);
  }
};

// @desc    Update letter
// @route   PUT /api/letters/:id
// @access  Private
export const updateLetter = async (req, res, next) => {
  try {
    let letter = await Letter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({ message: "Letter not found" });
    }

    if (letter.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const { title, content, recipientType, lockUntil } = req.body;

    letter = await Letter.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        recipientType,
        lockUntil: lockUntil ? new Date(lockUntil) : null,
      },
      { new: true, runValidators: true }
    );

    // Update lock status
    letter.checkLockStatus();
    await letter.save();

    res.status(200).json(letter);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete letter
// @route   DELETE /api/letters/:id
// @access  Private
export const deleteLetter = async (req, res, next) => {
  try {
    const letter = await Letter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({ message: "Letter not found" });
    }

    if (letter.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Letter.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Letter removed successfully" });
  } catch (error) {
    next(error);
  }
};

// @desc    Check letter lock status
// @route   GET /api/letters/:id/status
// @access  Private
export const checkLetterStatus = async (req, res, next) => {
  try {
    const letter = await Letter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({ message: "Letter not found" });
    }

    if (letter.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const isLocked = letter.checkLockStatus();
    await letter.save();

    res.status(200).json({ isLocked, lockUntil: letter.lockUntil });
  } catch (error) {
    next(error);
  }
};