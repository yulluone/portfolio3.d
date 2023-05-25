"use client";

import React, { useEffect, useState } from "react";

import { styles } from "@/utils/styles";
import LogoAndName from "./navComponents/LogoAndName";
import NavLinksComponent from "./navComponents/NavLinksComponent";
import MobileMenu from "./navComponents/MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navClicked = (itemClicked) => {
    setActive(itemClicked);
  };
  const menuToggled = () => {
    setToggle(!toggle);
  };
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <LogoAndName navClicked={navClicked} />
        <NavLinksComponent navClicked={navClicked} active={active} />
        <MobileMenu
          toggle={toggle}
          menuToggled={menuToggled}
          active={active}
          navClicked={navClicked}
        />
      </div>
    </nav>
  );
};

export default Navbar;
