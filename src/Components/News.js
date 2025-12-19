import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
const News = ({ themeColor }) => {
  const newsItems = [
    "Breaking News: gvxbfdfgnd gvxbfdfgnd...",
    "Latest Update: gvrtewrwe gvxbfdfgnd...",
    "Alert: mhfdjkgdfjgk gvxbfdfgnd...",
    "News Flash: fgjfgjfgjfg gvxbfdfgnd...",
    "Breaking News: gvxbfdfgnd gvxbfdfgnd...",
    "Latest Update: gvrtewrwe gvxbfdfgnd...",
    "Alert: mhfdjkgdfjgk gvxbfdfgnd...",
    "News Flash: fgjfgjfgjfg gvxbfdfgnd...",
    "Breaking News: gvxbfdfgnd gvxbfdfgnd...",
    "Latest Update: gvrtewrwe gvxbfdfgnd...",
  ];

  const [index, setIndex] = useState(0);

  // Auto scroll bottom → top
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  });

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % newsItems.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  return (
    <div className="news" style={{ background: themeColor }}>
      {/* LIST */}
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          transition: "transform 0.5s ease-in-out",
          transform: `translateY(-${index * 30}px)`, // 30px per item height
        }}
      >
        {newsItems.map((item, i) => (
          <li key={i}>
            <FaAngleRight size={15} color="rgb(14 108 122)" /> {item}
          </li>
        ))}
      </ul>

      {/* BUTTONS */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          right: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            border: "none",
            background: "#E91E63",
            padding: "4px 6px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ↑
        </button>

        <button
          onClick={handleNext}
          style={{
            border: "none",
            background: "#E91E63",
            padding: "4px 6px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default News;
