import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="flex fixed items-center justify-between h-32 pt-4 pr-14 w-screen bg-transparent"
    >
      <a className="" href="#">
      <Image
        src="/logo.png"
        alt='test'
        width={128}
        height={512}
        />
        </a>
      <button className="space-y-2" id="hamburger-menu">
        <div className="w-10 h-1 rounded bg-indigo-800"></div>
        <div className=" ml-2 w-8 h-1 rounded bg-indigo-800"></div>
        <div className="w-6 h-1 ml-4 rounded bg-indigo-800"></div>
      </button>
    </header>
  );
};

export default Header;
