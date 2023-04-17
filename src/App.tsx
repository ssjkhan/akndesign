import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/Footer";
import ProjectCard from "@components/ProjectCard";
import ProjectCard2 from "@components/ProjectCard2";
import Banner from "@components/Banner";
import PortfolioArr from "@components/PortfolioArray";
import AwardsList from "@components/AwardsList";
import ClickHere from "@components/ClickHere";
import PacmanSidebar from "@components/pacman-sidebar/PacmanSideBar";
import About from "@components/About";

function App() {
  return (
    <>
      <ClickHere />
      <Header />
      <div className="App mx-4 sm:mx-16 lg:mx-64">
        <Banner />
        <About />
        <ProjectCard />
        <ProjectCard2 />
        <PortfolioArr />
        <AwardsList />
        <Footer />
      </div>
    </>
  );
}

export default App;
