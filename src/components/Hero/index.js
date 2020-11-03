import React from "react";
import Thinking from "../../assets/thinking.svg";
import Code from "../../assets/code.svg";
import theme from "../../theme/theme";
import StaticSite from "../../assets/staticSite.svg";

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
          marginBottom: "-10rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontSize: "4rem",
            zIndex: "999",
          }}
        >
          {" "}
          <h1 style={{ marginRight: "1rem", color: theme.colorTertiary }}>
            Daniel{" "}
          </h1>{" "}
          <h1 style={{ color: theme.colorSecondary }}>Smith</h1>
        </div>
      </div>
      <div style={{ margin: "auto", zIndex: "-1" }}>
        {" "}
        <img
          src={StaticSite}
          style={{
            color: theme.colorSecondary,

            height: "auto",
            width: "50rem",
            opacity: "0.8",
          }}
          alt=""
        />
      </div>
      <div
        style={{
          color: `${theme.colorPrimary}`,
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        “The Web as I envisaged it, we have not seen it yet. The future is still
        so much bigger than the past.”{" "}
        <strong style={{ color: `${theme.colorSecondary}` }}>
          {" "}
          - Tim Burners-Lee
        </strong>
      </div>
    </section>
  );
};

export default HeroSection;
