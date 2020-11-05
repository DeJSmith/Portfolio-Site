import React from "react";
import Thinking from "../../assets/thinking.svg";
import Code from "../../assets/code.svg";
import theme from "../../theme/theme";
import StaticSite from "../../assets/staticSite.svg";
import {Header, HeroImg, Quoute} from './HeroElements';
import {FlexSection} from '../../elements/globalElements';

const HeroSection = () => {
  return (
    <FlexSection style={{height: '100vh'}}>
        <Header>
          {" "}
          <h1 style={{ marginRight: "1rem", color: theme.colorTertiary }}>
            Daniel
          </h1>
          <h1 style={{ color: theme.colorSecondary }}>Smith</h1>
        </Header>
     
      <HeroImg  src={theme.heroImg}/>
      <Quoute>
        “The Web as I envisaged it, we have not seen it yet. The future is still
        so much bigger than the past.”{" "}
        <strong style={{ color: `${theme.colorSecondary}` }}>
          {" "}
          - Tim Burners-Lee
        </strong>
      </Quoute>
    </FlexSection>
  );
};

export default HeroSection;
