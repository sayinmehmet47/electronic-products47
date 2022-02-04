import React from "react";
import dbConnect from "../../lib/mongodb";

export default function Order({ data }) {
  console.log(data);
  return <div>fdfs</div>;
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const res = await fetch(`http://localhost:3000/api/orders/${params.id}`);
  console.log(res);
  const data = await res.json();
  return { props: { product: data } };
}
