import User from "../models/User.js";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const newUser = new User({ email, password });
    await newUser.save();

    const token = createToken(newUser);
    res.status(201).json({ user: { email: newUser.email }, token });
  } catch (error) {
    res.status(500).json({ error: "Registration failed", details: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = createToken(user);
    res.status(200).json({ user: { email: user.email }, token });
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error.message });
  }
};
