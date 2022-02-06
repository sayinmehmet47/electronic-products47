import Cards from "../components/Cards";
import CarouselComponent from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import dbConnect from "../lib/mongodb";
import axios from "axios";
// import "tw-elements";

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

  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  await dbConnect();
  const res = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`);
  const data = await res.data;

  // Pass data to the page via props
  return { props: { products: data } };
}
