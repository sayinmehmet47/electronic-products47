import dbConnect from "../../../lib/mongodb";
import Products from "../../../models/Products";


export async function getData() {
  const products = await Products.find()
  return products
}
export async function createData(item) {
  const products = await Products.create(item)
  return products
}

export default async function handler(req, res) {
    const { method } = req;
  await dbConnect();
  if(method==="GET"){
    try {
      
      const products = await getData()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json(err);
    }
  }
  if(method==="POST"){
    try {
      
      const products = await createData(req.body)
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json(err);
    }
  }
}