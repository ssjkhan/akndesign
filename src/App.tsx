import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ProjectCard from "@components/ProjectCard";
import ProjectCard2 from "@components/ProjectCard2";
import Banner from "@components/Banner";
import PortfolioArr from "@components/PortfolioArray";
import AwardsList from "@components/AwardsList";
import ClickHere from "@components/ClickHere";

function App() {
  return (
    <div className="App">
      <ClickHere />
      <Header />
      <Banner />
      <ProjectCard />
      <ProjectCard2 />
      <PortfolioArr />
      <AwardsList />
      <Footer />
    </div>
  );
}

export default App;
