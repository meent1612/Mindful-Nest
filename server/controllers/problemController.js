import Resource from "../models/Resources.js";

// Define keywords for each category
const keywords = {
  ADHD: [
    "focus", "unfocused", "distracted", "restless", "hyperactive",
    "forgetful", "impulsive", "can't concentrate", "mind wandering"
  ],
  Addiction: [
    "alcohol", "drugs", "substance", "addicted", "can't stop",
    "craving", "withdrawal", "relapse", "overdose"
  ],
  Anxiety: [
    "nervous", "restless", "worried", "overthinking", "panic",
    "racing thoughts", "fear", "uneasy", "on edge", "shaky"
  ],
  Depression: [
    "sad", "hopeless", "empty", "tired", "worthless", "guilty",
    "no energy", "lost interest", "crying", "can't sleep"
  ],
  "PTSD & Trauma": [
    "flashback", "nightmares", "trauma", "abuse", "assault",
    "violence", "haunted", "scared", "startled", "post traumatic"
  ],
  "Suicide & Self-harm": [
    "kill myself", "want to die", "end it all", "suicidal",
    "self harm", "cutting", "hurt myself", "overdose",
    "jump off", "no reason to live"
  ]
};

// Controller to analyze text and suggest resources
export const checkTextForProblems = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Text input is required"
      });
    }

    const lowerText = text.toLowerCase();
    let detectedCategories = [];

    // Detect categories based on keywords
    for (const [category, words] of Object.entries(keywords)) {
      if (words.some(word => lowerText.includes(word))) {
        detectedCategories.push(category);
      }
    }

    console.log("Detected categories:", detectedCategories);

    // Fetch relevant resources for detected categories
    let suggestions = [];
    if (detectedCategories.length > 0) {
      suggestions = await Resource.find({ category: { $in: detectedCategories } })
                                  .sort({ createdAt: -1 })
                                  .limit(5);
      console.log("Suggested resources found:", suggestions.length);
    }

    res.status(200).json({
      success: true,
      categories: detectedCategories,
      suggestions
    });

  } catch (error) {
    console.error("Error checking text for problems:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: error.message
    });
  }
};
