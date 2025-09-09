// scripts/seedHelplines.js
import mongoose from "mongoose";
import Helpline from "../models/Helpline.js";
import dotenv from "dotenv";

dotenv.config();

const helplines = [
  {
    name: "Kaan Pete Roi",
    phone: "+8801737666888",
    website: "https://kaanpeteroi.org/",
    description: "A voluntary emotional support and suicide prevention helpline",
    problemAreas: ["anxiety", "depression", "stress", "other"]
  },
  {
    name: "National Mental Health Helpline",
    phone: "+8809666700100",
    description: "Government mental health support service",
    problemAreas: ["anxiety", "depression", "stress", "sleep", "other"]
  },
  {
    name: "Aachol Foundation",
    phone: "+8801880811660",
    website: "https://aacholfoundation.org/",
    description: "Mental health support and awareness organization",
    problemAreas: ["anxiety", "depression", "stress", "other"]
  },
  {
    name: "Moner Bondhu",
    phone: "+8809678956499",
    website: "https://monerbondhu.com/",
    description: "Mental health support platform providing counseling services",
    problemAreas: ["anxiety", "depression", "stress", "sleep", "other"]
  },
  {
    name: "BIMHS Mental Health Helpline",
    phone: "+8801947357357",
    description: "Bangladesh Institute of Mental Health & Substance Use support",
    problemAreas: ["anxiety", "depression", "stress", "sleep", "other"]
  }
];

const seedHelplines = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    
    // Clear existing data
    await Helpline.deleteMany({});
    console.log("Cleared existing helplines");
    
    // Insert new data
    await Helpline.insertMany(helplines);
    console.log("Added new helpline data");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding helplines:", error);
    process.exit(1);
  }
};

seedHelplines();