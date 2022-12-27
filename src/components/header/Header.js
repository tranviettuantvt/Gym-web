import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { useContext } from "react";
import { MenuContext } from "../../App";
import { Link } from "react-scroll";

function Header() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);
  const mobile = window.innerWidth <= 768 ? true : false;
  // const handleMenuOpen=(e) => {
  //   if(menuOpen === false){
  //     e.preventDefault()
  //     setMenuOpen(true)
  //   }

  // }

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {mobile === true && menuOpen === false ? (
        <span className="header-bar">
          <i className="header-bar-icon fa-solid fa-bars"></i>
        </span>
      ) : (
        <ul className="header-menu" onBlur={(e) => console.log(e)}>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="program"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="reason"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="plan"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="testimonial"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
