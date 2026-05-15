import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Attorneys from "./pages/Attorneys";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/contact" element={<Contact />} />
    <Route path="/dashboard" element={<Dashboard />} />
    
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}