import axios from "axios";
import { useEffect } from "react";
import Cards from "../components/Cards";
import CarouselComponent from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import dbConnect from "../lib/mongodb";
import Products from "../models/Products";

export default function Home({ products }) {
  return (
    <div className="">
      <Navbar />
      <CarouselComponent />
      <Cards products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  await dbConnect();
  const data = await Products.find().lean();

  return {
    props: {
      products: JSON.parse(JSON.stringify(data)),
    },
  };
}
