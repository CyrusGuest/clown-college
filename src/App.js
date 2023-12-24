import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";
import Videos from "./pages/Videos";
import History from "./pages/History";
import Roster from "./pages/Roster";
import Contact from "./pages/Contact";
import MeetTheBoard from "./pages/MeetTheBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/history" element={<History />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/board" element={<MeetTheBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
