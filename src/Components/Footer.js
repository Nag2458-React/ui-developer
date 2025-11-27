import React from "react";

const Footer = ({ themeColor }) => {
  return (
    <div className="footer" style={{ background: themeColor }}>
      <div className="container">
        <div className="col-md-12">
          <p>Copy Rights @2025 , Designed and Developed by Nagababu</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
