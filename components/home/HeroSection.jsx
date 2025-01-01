import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <img src="/home/hero.jpg" className="hero_bg" alt="" />
      <div className="hero_content">
        <h1>Welcome to bijlex.nl</h1>
        <p>
          We are a tutoring agency and offer help at different levels with
          various subjects. Do you want tutoring? Bijlex can do that!
        </p>
        <Link href={"/"}>READ MORE</Link>
      </div>
    </div>
  );
};

export default HeroSection;
