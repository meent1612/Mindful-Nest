import mongoose from "mongoose";

const userFavoritesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  strategies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "CopingStrategy"
  }]
});

const UserFavorites = mongoose.model("UserFavorites", userFavoritesSchema);
export default UserFavorites;