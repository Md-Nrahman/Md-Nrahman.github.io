import React, { useEffect } from "react";
import Header from "../components/HomeScreen/Header";
import Introduction from "../components/HomeScreen/Introduction";
import Skills from "../components/HomeScreen/Skills";
import Experience from "../components/HomeScreen/Experience";
import Projects from "../components/HomeScreen/Projects";
import ContactForm from "../components/HomeScreen/ContactForm";
const HomeScreen = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm />
    </>
  );
};

export default HomeScreen;
