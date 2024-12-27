import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/AboutPage";
import RecentNews from "./pages/RecentNews";
import UpcomingEvents from "./pages/UpcomingEvents";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recent-news" element={<RecentNews />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
