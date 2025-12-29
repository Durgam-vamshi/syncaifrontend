



import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSmoothScroll from "./utils/useSmoothScroll";

import Navbar from "./components/Navbar";
import Home from "./contexts/pages/Home";
import LeadForm from "./components/UI/LeadForm";

export default function App() {
  const scrollRef = useRef(null);
  useSmoothScroll(scrollRef);

  return (
    <BrowserRouter>
      <div ref={scrollRef} data-scroll-container>
        <Navbar />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/lead-form" element={<LeadForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
