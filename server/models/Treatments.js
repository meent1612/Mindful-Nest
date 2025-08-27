import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema(
  {
    user: {
      type: String, 
      required: true,
    },
    type: {
      type: String,
      enum: ["plan", "coping"],
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Treatment = mongoose.model("Treatment", treatmentSchema);

export default Treatment;
