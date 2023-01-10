import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header id="header" className="flex fixed items-center justify-between h-32 pt-4 pr-14 w-screen bg-transparent">
      <a className="pl-2" href="#">
      <Image
        src="/logo.png"
        alt='test'
        width={120}
        height={512}
        />
        </a>
      <div className="space-y-2 cursor-pointer" id="hamburger-menu">
        <div className="w-10 h-1 rounded bg-slate-800"></div>
        <div className=" ml-2 w-8 h-1 rounded bg-slate-800"></div>
        <div className="w-6 h-1 ml-4 rounded bg-slate-800"></div>
      </div>
    </header>
  );
};

export default Header;
