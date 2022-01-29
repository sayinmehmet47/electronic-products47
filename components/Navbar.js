import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { CgShoppingCart } from "react-icons/cg";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-black p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/mitek.svg" width={45} height={45} />
            <span className="text-xl text-white font-bold mx-2 uppercase tracking-wide">
              Miltek
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto  `}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Contact us
              </a>
            </Link>

            <Link href="/">
              <div className="text-white mx-3 flex">
                <CgShoppingCart className="" style={{ fontSize: "30px" }} />
                <span className="relative -top-2 left-1 bg-blue-400 px-2 pt-0.5 rounded-full">
                  0
                </span>
              </div>
            </Link>

            {/* <h1>kdsjflak</h1> */}
          </div>
        </div>
      </nav>
    </>
  );
};
