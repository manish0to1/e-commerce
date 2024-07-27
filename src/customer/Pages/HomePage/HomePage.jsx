import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSection/HomeSectionCarosel";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div>Other Section !</div>
      <HomeSectionCarosel/>
    </div>
  );
};

export default HomePage;
