import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  dateCompleted: {
    type: Date,
    default: null
  }
});

const treatmentPlanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  problemArea: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  milestones: [milestoneSchema],
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const TreatmentPlan = mongoose.model("TreatmentPlan", treatmentPlanSchema);
export default TreatmentPlan;