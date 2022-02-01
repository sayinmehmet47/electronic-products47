import Cards from "../components/Cards";
import CarouselComponent from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import dbConnect from "../lib/mongodb";
// import "tw-elements";

export default function Home({ products }) {
  console.log(products);
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
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { products: data } };
}
