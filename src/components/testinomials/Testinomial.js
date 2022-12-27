import React from "react";
import "./Testinomial.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

function Testinomial() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const lengthTestimonial = testimonialsData.length;

  return (
    <div className="testinomial" id="testimonial">
      <div className="left-t">
        <span>Testinomials</span>
        <span className="stroke-text testinomial-span">WHAT THEY</span>
        <span className="testinomial-span">SAY ABOUT US</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <div className="testinomial-footer">
          <span>{testimonialsData[selected].name} </span>
          <span> - {testimonialsData[selected].status}</span>
        </div>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={transition}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={transition}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrow">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(lengthTestimonial - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === lengthTestimonial - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testinomial;
