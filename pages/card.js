import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { removeSelected } from "../redux/cartSlice";
import Paypal from "./payment/Paypal";

export default function Card() {
  // @ts-ignore
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { products } = cart;
  const [isPaypalOpen, setIsPaypalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container p-8 mx-auto mt-12">
        <div className="w-full overflow-x-auto">
          <div className="my-2">
            <h3 className="text-xl font-bold tracking-wider">
              Shopping Cart 3 item
            </h3>
          </div>
          <table className="w-full shadow-inner">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 font-bold whitespace-nowrap">Image</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Product
                </th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Price</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Extras
                </th>
                <th className="px-6 py-3 font-bold whitespace-nowrap">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr className="bg-gray-100" key={product._id}>
                    <td>
                      <div className="flex justify-center p-3">
                        <Image
                          src={product.image}
                          width={120}
                          height={80}
                          alt="image"
                        />
                      </div>
                    </td>
                    <td className="text-center md:text-base text-sm">
                      <div className="flex flex-col items-center justify-center">
                        <h3>{product.title}</h3>
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      {product.quantity}
                    </td>
                    <td className="p-4 px-6  text-center md:text-base text-sm">
                      {product.extraOptions.map((extra) => (
                        <span>{extra.desc}</span>
                      ))}
                    </td>
                    <td className="p-4 px-6  text-center md:text-base text-sm">
                      <span
                        className="cursor-pointer"
                        onClick={() => dispatch(removeSelected(product))}
                      >
                        ❌
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-4">
            <div className="py-4 rounded-md shadow">
              <h3 className="text-xl font-bold text-blue-600">Order Summary</h3>
              <div className="flex justify-between px-4">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">€{cart.total}</span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Discount</span>
                <span className="font-bold text-red-600">
                  {cart.total > 0 ? "- €5.00" : "€0"}
                </span>
              </div>
              <div className="flex justify-between px-4">
                <span className="font-bold">Sales Tax</span>
                <span className="font-bold">
                  {cart.total > 0 ? "€2.25" : "€0"}
                </span>
              </div>
              <div
                className="
              flex
              items-center
              justify-between
              px-4
              py-2
              mt-3
              border-t-2
            "
              >
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold">
                  €{cart.total > 0 ? cart.total - 5 + 2.25 : 0}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            {isPaypalOpen ? (
              <Paypal />
            ) : (
              <button
                onClick={() => setIsPaypalOpen(true)}
                className="
          w-full
          py-2
          text-center text-white
          bg-blue-500
          rounded-md
          shadow
          hover:bg-blue-600
        "
              >
                Proceed to Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
