import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Navbar } from "../../components/Navbar";
import dbConnect from "../../lib/mongodb";
import Products from "../../models/Products";
import { addProduct } from "../../redux/cartSlice";

export default function Product({ product }) {
  const [price, setPrice] = useState(product.price[0]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(0);
  const [extras, setExtras] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const handleColor = (selectedColor) => {
    if (product.price[1] === undefined) {
      setPrice(product.price[0]);
    } else {
      const difference = product.price[selectedColor] - product.price[color];
      setColor(selectedColor);
      setPrice(price + difference);
    }
  };

  const handleExtraOptions = (e, option) => {
    if (e.target.checked) {
      setPrice(price + option.price);
      setExtras((pre) => [...pre, option]);
    } else {
      setPrice(price - option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity }));
    alert.show("Product ADDED!");
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-5/5 mx-auto flex flex-wrap">
            <div className="w-96">
              <Image
                alt="ecommerce"
                width={620}
                height={400}
                className="  rounded border border-gray-200"
                src={product.image}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex-col mt-6 items-center pb-5  mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button
                    onClick={() => handleColor(0)}
                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-dotted"
                  ></button>
                  <button
                    onClick={() => handleColor(1)}
                    className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-dotted"
                  ></button>
                  <button
                    onClick={() => handleColor(2)}
                    className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-dotted"
                  ></button>
                </div>
                <div className="flex-col  items-center rounded divide-y divide-red-600 border mt-1 py-4 px-2">
                  <h1 className="text-lg font-bold">
                    Further Guarantee Services
                  </h1>
                  {product.extraOptions.map((option, i) => {
                    return (
                      <div key={i}>
                        <div className="flex justify-between pt-2">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  
                               bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              onChange={(e) => handleExtraOptions(e, option)}
                            ></input>
                            <label
                              className="form-check-label inline-block text-gray-800"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              {option.desc}
                            </label>
                          </div>
                          <span className="text-rose-500">{option.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex w-2/4 mt-2 align-middle justify-center">
                  <label
                    htmlFor="exampleNumber0"
                    className="form-label inline-block  text-gray-700 mt-1"
                  >
                    Quantity
                  </label>
                  <input
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    type="number"
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mx-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleNumber0"
                    placeholder="Quantity"
                  />
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €{price}
                </span>
                <button
                  onClick={handleClick}
                  className="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded"
                >
                  Add to Card
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  await dbConnect();
  const product = await Products.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
