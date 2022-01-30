import axios from "axios";
import Cards from "../components/Cards";
import CarouselComponent from "../components/Carousel";
import { Navbar } from "../components/Navbar";

export default function Home({ data }) {
  console.log;
  return (
    <div className="">
      <Navbar />
      <CarouselComponent />
      <Cards products={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const result = await axios.get("http://localhost:3000/api/products");
    const data = result.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/login",
        statusCode: 307,
      },
    };
  }
}
