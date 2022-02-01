import axios from "axios";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";

export default function Cards({ products }) {
  const router = useRouter();

  const handleClick = (index) => {
    router.push(`/product/${index}`);
  };
  return (
    <div className="md:grid-cols-3 sm:grid-cols-2 grid  mt-5">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="shadow bg-red mt-5 mx-5 border text-center rounded py-3 cursor-pointer"
            onClick={() => handleClick(product._id)}
          >
            {" "}
            <Image
              src={product.image}
              width={200}
              height={200}
              className=""
            />{" "}
            <div className="ml-2">
              {" "}
              <h1 className="text-left">{product.title}</h1>{" "}
              <div className="flex">
                <RiStarSFill className="text-violet-700" />
                <RiStarSFill className="text-violet-700" />
                <RiStarSFill className="text-violet-700" />
                <RiStarSFill className="text-violet-700" />{" "}
              </div>{" "}
              <div className="text-left">
                <h2>{product.price[0]}</h2>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
}
