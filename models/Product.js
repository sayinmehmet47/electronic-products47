import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
