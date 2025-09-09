import mongoose from "mongoose";

const copingStrategySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ["relaxation", "mindfulness", "physical", "social", "cognitive", "creative"]
  },
  duration: {
    type: String,
    default: "5-10 minutes"
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy"
  }
});

const CopingStrategy = mongoose.model("CopingStrategy", copingStrategySchema);
export default CopingStrategy;