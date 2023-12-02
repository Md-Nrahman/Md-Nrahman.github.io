import React, { useEffect } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
};

export default HomeScreen;
