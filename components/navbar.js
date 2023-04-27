"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const handleItemClick = (index) => {
    setActive(index);
    setTimeout(() => {
      const span = document.querySelector(".bg-gradient-to-r");
      span.style.width = "100%";
    }, 0);
  };

  return (
    <div>
      <nav className="bg-[#001312] w-full h-[112px] shadow-md flex justify-between items-center">
        <ul className="left flex w-[44%] pl-8 justify-between">
          <li>
            <Image
              src="/LogoAlone3d (1).png"
              alt="Language line image"
              width={57}
              height={31}
            />
          </li>
          <li>
            <Link
              className={`text-white ${active === 0 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(0)}
              href="/swap"
            >
              Swap
            </Link>
            {active === 0 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
          <li>
            <Link
              className={`text-white ${active === 1 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(1)}
              href="/rewards"
            >
              Rewards
            </Link>
            {active === 1 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
          <li>
            <Link
              className={`text-white ${active === 2 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(2)}
              href="/products"
            >
              Products
            </Link>
            {active === 2 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
          <li>
            <Link
              className={`text-white ${active === 3 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(3)}
              href="/launchpad"
            >
              Launchpad
            </Link>
            {active === 3 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
          <li>
            <Link
              className={`text-white ${active === 4 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(4)}
              href="/leaderboard"
            >
              Leaderboard
            </Link>
            {active === 4 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
        </ul>
        <ul className="right flex w-1/3 pr-8 justify-between  items-center">
          <li>
            <Link
              className={`text-white ${active === 5 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(5)}
              href="/aboutUs"
            >
              About Us
            </Link>
            {active === 5 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
          <li>
            <Link
              className={`text-white ${active === 6 ? "font-normal" : ""}`}
              onClick={() => handleItemClick(6)}
              href="/support"
            >
              Support
            </Link>
            {active === 6 && (
              <span className="block w-0 lineline h-0.5  bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 "></span>
            )}
          </li>
          <li>
            <button className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700 text-white py-2 px-4 rounded">
              Connect Wallet
            </button>
          </li>
          <li className="text-white cursor-pointer">En</li>
          <li>
            <Image
              src="/langLine.png"
              alt="Language line image"
              width={2}
              height={2}
            />
          </li>
          <li>
            <Image
              className="cursor-pointer"
              src="/shopping-cart.png"
              alt="Shopping Icon"
              width={20}
              height={20}
            />
          </li>
        </ul>
      </nav>
      <div className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-700  h-[2.5px]"></div>
    </div>
  );
};

export default Navbar;
