import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
  customer: { type: String, required: true, maxlength: 60 },
  address: { type: Object, required: true },
  total: { type: Number, required: true },
  status: { type: Number, default: 0 },
  method: { type: Number, required: true },
});

export default mongoose.models.Orders || mongoose.model("Orders", OrdersSchema);
