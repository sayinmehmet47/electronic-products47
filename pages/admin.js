import React from "react";
import dbConnect from "../lib/mongodb";
import { Admin, Resource, ListGuesser } from "react-admin";

export default function AdminPanel({ products }) {
  console.log(products);
  return (
    <Admin dataProvider={products}>
      <Resource name="title" list={ListGuesser} />
    </Admin>
  );
}

export async function getServerSideProps({ params }) {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  await dbConnect();
  const res = await fetch(`${dev ? DEV_URL : PROD_URL}/api/products/`);
  const data = await res.json();
  return { props: { products: data } };
}
