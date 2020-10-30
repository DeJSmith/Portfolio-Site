import React from "react";
import Thinking from "../../assets/thinking.svg";
import Code from "../../assets/code.svg";
import theme from "../../theme/theme";

const HeroSection = () => {
  return (
    <section
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "1fr 6r",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "-15rem",
        }}
      >
        <div
          style={{
            marginBottom: "-15rem",
            display: "flex",
            flexDirection: "row",
            fontSize: "4rem",
            zIndex: "999",
            marginLeft: "-3rem",
          }}
        >
          {" "}
          <h1 style={{ marginRight: "1rem", color: theme.colorTertiary }}>
            Daniel{" "}
          </h1>{" "}
          <h1 style={{ color: theme.colorSecondary }}>Smith</h1>
        </div>
      </div>
      <div style={{ margin: "auto 1rem", zIndex: "-1" }}>
        {" "}
        <img
          src={Code}
          style={{
            color: theme.colorSecondary,
            margin: " 0 auto",
            height: "auto",
            width: "60rem",
            opacity: "0.9",
          }}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
