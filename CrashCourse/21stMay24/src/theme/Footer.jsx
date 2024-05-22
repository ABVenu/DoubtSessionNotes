import React from "react";

const Footer = ({appliedTheme}) => {
  return (
    <div style={{width:"100%", height:"80px",...appliedTheme}}>
      <h3>This is Footer </h3>
    </div>
  );
};

export default Footer;
