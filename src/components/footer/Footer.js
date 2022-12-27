import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="">
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
      </div>
      <div className="footer-join">
        <div className="footer-join-l">
          <hr />
          <div className="">
            <span className="stroke-text">READY TO</span>
            <span> LEVEL UP</span>
          </div>
          <div className="">
            <span>YOUR BODY</span>
            <span className="stroke-text"> WITH US?</span>
          </div>
        </div>
        <div className="footer-join-r">
          <form action="" className="email">
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Join now</button>
          </form>
        </div>
      </div>

      <div className="footer-img">
        <hr />
        <div className="footer-media">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
