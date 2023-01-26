"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menu from "./Menu";
// import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <header>
        <a className="pl-2" href="#hero">
          <Image src="/logo.png" alt="test" width={120} height={512} />
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
