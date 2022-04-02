// import dbConnect from '../../../lib/mongodb';
// import Products from '../../../models/Products';

// export default function deleteData(id){
//       const products = Products.findByIdAndDelete(id);
//       return products;
// }

// export default async function handler(req, res) {
//   const {
//     method,
//     query: { id },
//   } = req;
//   dbConnect();

//   if (method === 'DELETE') {
//     try {
//       const product = await deleteData(id);
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }
