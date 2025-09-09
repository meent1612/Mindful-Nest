import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // keep only coping here
  type: {
    type: String,
    enum: ["coping"],
    default: "coping",
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Treatment = mongoose.model("Treatment", treatmentSchema);
export default Treatment;
