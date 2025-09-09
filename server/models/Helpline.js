// models/Helpline.js
import mongoose from "mongoose";

const helplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  problemAreas: [{
    type: String
  }]
});

const Helpline = mongoose.model("Helpline", helplineSchema);
export default Helpline;