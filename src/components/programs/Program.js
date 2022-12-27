import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

function Program() {
  return (
    <div className="programs" id="program">
      {/* header */}
      <div className="program-header">
        <span className="stroke-text">explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-cate">
        {programsData.map((program, i) => (
          <div key={i} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
