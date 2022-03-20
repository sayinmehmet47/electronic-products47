import dbConnect from "../../../lib/mongodb";
import Products from "../../../models/Products";

// export default async function handler(req, res) {
//   const { method } = req;
//   dbConnect();
//   if (method === "GET") {
//     try {
//       const products = await Products.find();
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   if (method === "POST") {
//     try {
//       const product = await Products.create(req.body);
//       res.status(201).json(product);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// }
export async function getData() {
  const products = await Products.find()
  return products
}

export default async function handler(req, res) {
    const { method } = req;
  await dbConnect();
  const products = await getData()
  res.status(200).json(products)
}