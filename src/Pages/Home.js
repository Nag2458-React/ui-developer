import React from "react";
import Slider from "../Components/Slider";
import News from "../Components/News";
import Marquee from "../Components/Marquee";
import SelectForm from "../Components/SelectForm";
function Home({ themeColor }) {
  return (
    <div className="slides">
      <div className="col-md-12">
        {/* <h3 className="text-center">Home Page Users</h3>
      <hr></hr> */}
        <div className="row">
          <div className="col-md-8" style={{ paddingRight: "0px" }}>
            <Slider />
          </div>

          <div className="col-md-4" style={{ paddingLeft: "0px" }}>
            <News themeColor={themeColor} />
          </div>
        </div>
        <Marquee themeColor={themeColor} />
        <SelectForm themeColor={themeColor} />
      </div>
    </div>
  );
}

export default Home;
