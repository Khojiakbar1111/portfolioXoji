import "./navbar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import underlineImg from "../../assets/nav_underline.svg";
import { RiMenu3Line } from "react-icons/ri";
import menuClose from "../../assets/menu_close.svg";
import { useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef } from "react";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav>
      <div className="nav-logo">
        <h1>AhmeD</h1>
        <img src={theme_pattern} alt="" />
        <RiMenu3Line className="nav-mob_open" onClick={openMenu} />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <img
          onClick={closeMenu}
          src={menuClose}
          alt=""
          className="nav-mob_close"
        />
        <li onClick={() => setMenu("home")}>
          <AnchorLink className="anchor-link" href="#home">
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underlineImg} alt="underline" />}
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underlineImg} alt="underline" />}
        </li>
        <li onClick={() => setMenu("service")}>
          <AnchorLink className="anchor-link" offset={50} href="#service">
            {" "}
            <p>Services</p>
          </AnchorLink>
          {menu === "service" && <img src={underlineImg} alt="underline" />}
        </li>
        <li onClick={() => setMenu("portfolio")}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underlineImg} alt="underline" />}
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underlineImg} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me{" "}
        </AnchorLink>
      </div>
    </nav>
  );
}

export default Navbar;
