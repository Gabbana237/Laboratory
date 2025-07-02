import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutPage";
import RecentNews from "./pages/RecentNews";
import UpcomingEvents from "./pages/UpcomingEvents";
import Team from "./pages/Team";
import CurrentResearch from "./pages/CurrentResearch";
import Projects from "./pages/Projects";
import Equipments from "./pages/Equipments";
import ResearchUnitePage from "./components/Home/ResearchUnitePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/actualite-recente" element={<RecentNews />} />
        <Route path="/actualite-a-venir" element={<UpcomingEvents />} />
        <Route path="/current-research" element={<CurrentResearch />} />
        <Route path="/projects-de-recherche" element={<Projects />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/equipment" element={<Equipments />} />
        <Route path="/research" element={<ResearchUnitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
