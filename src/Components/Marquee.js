import React from "react";

const Marquee = ({ themeColor }) => {
  return (
    <div style={{ background: themeColor }}>
      <marquee class="marq" color="#fff" direction="left" loop="">
        Education is the most powerful weapon. We can use it to change the
        world. Education is the key to pulling people out of Poverty, propelling
        them towards Economic Mobility & Prosperity.
      </marquee>
    </div>
  );
};

export default Marquee;
