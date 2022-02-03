import dbConnect from "../../../lib/mongodb";
import Order from "../../../models/Order";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const order = await Order.find();
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const product = await Order.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
