import Cards from "../components/Cards";
import CarouselComponent from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import clientPromise from "../lib/mongodb";

export default function Home({ isConnected }) {
  console.log(isConnected);
  return (
    <div className="">
      <Navbar />
      <CarouselComponent />
      <Cards />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
