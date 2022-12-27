import React from "react";
import Header from "../header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/redWave.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import NumberCounter from 'number-counter'
import { motion } from "framer-motion";

function Hero() {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* {the best ad} */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{...transition, type:'tween'}}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={250} start={124} delay="5" preFix="+"></NumberCounter></span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={600} delay="4" preFix="+"></NumberCounter></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={767} start={500} delay="5" preFix="+"></NumberCounter></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* rihgt */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "3rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <motion.div
          className="calories"
          transition={transition}
          whileInView={{ right: "28rem" }}
          initial={{ right: "37rem" }}
        >
          <img src={Calories} alt="" />
          <div className="">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
