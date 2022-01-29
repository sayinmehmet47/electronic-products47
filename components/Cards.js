import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";

export default function Cards() {
  return (
    <div className="md:grid-cols-3 sm:grid-cols-2 grid  mt-5">
      <div className="shadow bg-red mt-5 mx-5 border text-center">
        <Image src="/hardisk.jpg" width={200} height={200} className="" />
        <div className="ml-2">
          <h1 className="text-left">
            Seagate Portable 2TB External Hard Drive
          </h1>
          <div className="flex">
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
          </div>
          <div className="text-left">
            <h2>59$</h2>
          </div>
        </div>
      </div>
      <div className="shadow bg-red mt-5 mx-5 border  text-center">
        <Image src="/tripod.jpg" width={200} height={200} />
        <div className="ml-2">
          <h1 className="text-left">POLAM-FOTO 52'' Photo Tripod Stand</h1>
          <div className="flex">
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
          </div>
          <div>
            <h2 className="text-left">23$</h2>
          </div>
        </div>
      </div>
      <div className="shadow bg-red mt-5 mx-5 border  text-center">
        <Image src="/heater.jpg" width={200} height={200} />
        <div className="ml-2">
          <h1 className="text-left">Electric Heater</h1>
          <div className="flex">
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
            <RiStarSFill className="text-violet-700" />
          </div>
          <div>
            <h2 className="text-left">76$</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
