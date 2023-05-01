import Header from "@components/header/Header";
import Banner from "@components/Banner";
import AwardsList from "@components/AwardsList";
import ClickHere from "@components/ClickHere";
import About from "@components/About";
import Sidebar from "@components/SideBar";
import Misfits from "@components/project-cards/MisfitsProject";
import CityMapper from "@components/project-cards/CityMapper";

function App() {
  return (
    <div className="App">
      <div className="w-auto">
        <ClickHere />
        <Header />
        <Banner />
        <About />
        <Misfits />
        <CityMapper />
        <AwardsList />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
