import React from "react";
import dbConnect from "../../lib/mongodb";
import Timeline from "../../components/Timeline";
import { Navbar } from "../../components/Navbar";
export default function Order({ order }) {
  console.log(order.customer);
  return (
    <div className="">
      <Navbar />
      <h1 className="text-4xl text-center font-semibold mb-6">
        Package status
      </h1>
      <div className="flex justify-center  align-middle flex-wrap  container">
        <div className="m-2  flex-col">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded show p-2 text-white">
            Order ID
          </div>
          <div className="border p-2">{order._id}</div>
        </div>
        <div className="m-2 flex-col">
          {" "}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded show p-2 text-white">
            Customer
          </div>
          <div className="border p-2">{order.customer}</div>
        </div>
        <div className="m-2 flex-col">
          {" "}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded show p-2 text-white">
            Adress
          </div>
          <div className="border p-2">{order?.address.address_line_1}</div>
        </div>
        <div className="m-2 flex-col">
          {" "}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded show p-2 text-white">
            Total
          </div>
          <div className="border p-2">{order.total}€</div>
        </div>
      </div>
      <Timeline />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  await dbConnect();
  const res = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/orders/${params.id}`
  );
  console.log(res);
  const data = await res.json();
  return { props: { order: data } };
}
