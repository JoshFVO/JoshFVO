import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Photography from "./pages/photography";
import Contact from "./pages/contact";
import Recipes from "./pages/recipes";
import SmoothScrollHero from "./pages/test";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photography" element={<Photography /> } />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<SmoothScrollHero />} />
        {/* 404 page */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}