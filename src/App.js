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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recent-news" element={<RecentNews />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/current-research" element={<CurrentResearch />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/equipment" element={<Equipments />} />
      </Routes>
    </Router>
  );
}

export default App;
