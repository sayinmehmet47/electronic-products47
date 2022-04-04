import dbConnect from "../../../lib/mongodb";
import Orders from "../../../models/Orders";

export async function getData() {
  const orders = await Orders.find();
  return orders;
}

export async function createData(item) {
  const orders = await Orders.create(item);
  return orders;
}

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const order = await getData();
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const order = await createData(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
