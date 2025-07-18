import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UrlShortener from "./UrlShortener";  
import StatsPage from "./StatsPage";        
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* Simple navbar */}
      <div style={{ padding: 15, textAlign: "center" }}>
        <nav>
          <Link to="/" style={{ marginRight: 15 }}>Shortener</Link>
          <Link to="/stats">Statistics</Link>
        </nav>
      </div>

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
