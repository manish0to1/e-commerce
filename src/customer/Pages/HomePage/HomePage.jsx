import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSection/HomeSectionCarosel";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />Men's
      <div className="space-y-10 flex flex-col justify-center px-10">
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
      </div>
    </div>
  );
};

export default HomePage;
