import React, { useState, useEffect } from "react";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

const Slider = () => {
  const images = [img1, img2, img3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div  className="slider">
      <img
        src={images[index]}
        alt="slider"
        style={{
          width: "100%",
          height: "370px",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default Slider;
