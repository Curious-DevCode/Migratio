import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Result from "./pages/Result";
import PlaceDetail from "./pages/PlaceDetail";
import BlogPage from "./pages/Blog";
import MarketAnalysisPage from "./pages/MarketAnalysis";

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/result" element={<Result />} />
        <Route path="/place/:id" element={<PlaceDetail />} />

        {/* NEW PAGES */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/market" element={<MarketAnalysisPage />} />
      </Routes>
    </div>
  );
}
