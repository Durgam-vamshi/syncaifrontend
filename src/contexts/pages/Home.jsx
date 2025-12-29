

import { Routes, Route } from "react-router-dom";

import Hero from "../../components/Hero/Hero.";
import Problems from "../../components/UI/Problems";
import Philosophy from "../../components/UI/Philosophy";
import Process from "../../components/UI/Process";
import Testimonials from "../../components/Testimonials";
import ValueSection from "../../components/UI/ValueSection";
import IntegrationEcosystem from "../../components/UI/IntegrationEcosystem";
import InsightSection from "../../components/InsightSection";
import PrimaryCTA from "../../components/PrimaryCTA";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Testimonials />
              <ValueSection />
              <Problems/>
              <Philosophy/>
              <Process/>
              <IntegrationEcosystem/>
              <InsightSection/>
              <PrimaryCTA/>   
            </>
          }
        />

        <Route path="problems" element={<Problems />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="process" element={<Process />} />
        <Route path="ecosystem" element={<IntegrationEcosystem />} />
        <Route path="insights" element={<InsightSection />} />
        <Route path="cta" element={<PrimaryCTA />} />
      </Routes>

      <Footer />
    </main>
  );
}
