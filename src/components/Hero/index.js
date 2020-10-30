import React from "react";
import Thinking from "../../assets/thinking.svg";
import Code from "../../assets/code.svg";
import theme from "../../theme/theme";

const HeroSection = () => {
  return (
    <section style={{ height: "100vh" }}>
      <img
        src={Code}
        style={{ color: theme.colorSecondary, margin: "auto" }}
        alt=""
      />
    </section>
  );
};

export default HeroSection;
