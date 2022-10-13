import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsFolder } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experiance" onClick={() => setActiveNav('#experiance')} className={activeNav === "#experiance" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "active" : ""}>
        <BsFolder />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
