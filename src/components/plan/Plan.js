import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
function Plan() {
  return (
    <div className="plans-container" id="plan">
      <div className="">
        <div className="blur plan-blur-1"></div>
        <div className="blur plan-blur-2"></div>
      </div>
      <div className="program-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans-card */}
      <div className="plan-cards">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span className="plan-name">{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div key={i} className="feature-row">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <span>See more benefits -</span>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plan;
