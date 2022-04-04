import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/cartSlice";
import { useRouter } from "next/router";

export default function Paypal() {
  const dispatch = useDispatch();
  const currency = "EUR";
  // @ts-ignore
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const { products, total } = cart;

  //   sb-tyykg12977194@personal.example.com

  // 2|<6Bt;x

  const createOrder = async (data) => {
    try {
      const res = await axios.post("/api/orders", data);
      if (res.status === 201) {
        console.log(data);
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AcB7VTnm1iegQZwkJmkdwNkZAv07RAvyYckzu5Dmp1xDMkZBL_T4Am8FRjQzoqrfSd5o07dsBfTTeUNf",
          components: "buttons",
          currency: "EUR",
          "disable-funding": "credit,card,p24",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: total + (-5 + 2.5),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const { status } = details;
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
