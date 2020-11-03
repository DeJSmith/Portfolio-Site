import React from "react";
import { FlexSection } from "../../elements/globalElements";
import theme from "../../theme/theme";

const ContactSection = () => {
  return (
    <div
      style={{
        backgroundColor: `${theme.colorTertiary}`,
        height: "20vh",
        width: "100%",
        zIndex: "999",
      }}
    ></div>
  );
};

export default ContactSection;
