import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ProjectCard from "@components/ProjectCard";
import ProjectCard2 from "@components/ProjectCard2";
import Banner from "@components/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProjectCard />
      <ProjectCard2 />
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
