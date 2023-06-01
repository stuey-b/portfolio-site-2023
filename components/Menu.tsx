"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg"
import { CgClose } from "react-icons/cg"

type Props = {
};

const Header = (props: Props) => {

  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);

  const hamburgerIcon = <CgMenuRight
    className="cursor-pointer z-50"
    size="30px"
    onClick={() => setShowMenu(!showMenu)}
  />
  const closedMenuIcon = <CgClose
    className="cursor-pointer z-50"
    size="30px"
    onClick={() => setShowMenu(!showMenu)}
  />


  return (
    

    <header>
      <a className="" href="#hero">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </a>
      {showMenu ? closedMenuIcon : hamburgerIcon}
      {showMenu && <section className="fixed top-0 right-0 w-screen">
        <nav>
          <div className=' md:text-4xl flex flex-col text-white text-2xl font-black gap-y-4' >
            <a onClick={() => closeMenu()} href="#about">About</a>
            <a onClick={() => closeMenu()} href="#skills">Skills</a>
            <a onClick={() => closeMenu()} href="#projects">Projects</a>
            <a onClick={() => closeMenu()} href="#contact">Contact</a>
            <a onClick={() => closeMenu()} href="#footer">Links</a>
          </div>
        </nav>
      </section>
      }
    </header>
  );
};

export default Header;
