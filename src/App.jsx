import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home          from "./pages/Home";
import Team          from "./pages/Team";
import EventPage     from "./pages/Events";
import SpeakersPage  from "./pages/Speakers";
import Sponsors      from "./pages/Sponsor";
import Gallery       from "./pages/Gallery";
import Resources     from "./pages/Resources";
import Contact       from "./pages/Contact";
import Newsletter    from "./pages/Newsletter";
import Connect       from "./pages/Connect";
import CodeOfConduct from "./pages/CodeOfConduct";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse    from "./pages/TermsOfUse";

gsap.registerPlugin(ScrollTrigger);

/* ── ScrollToTop ensures pages start at top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ── Layout wraps every page with the shared Nav + Footer ── */
function Layout({ children }) {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark w-full overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main id="main-content" tabIndex="-1" className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"                element={<Layout><Home          /></Layout>} />
        <Route path="/team"            element={<Layout><Team          /></Layout>} />
        <Route path="/events"          element={<Layout><EventPage     /></Layout>} />
        <Route path="/gallery"         element={<Layout><Gallery       /></Layout>} />
        <Route path="/sponsors"        element={<Layout><Sponsors      /></Layout>} />
        <Route path="/speakers"        element={<Layout><SpeakersPage  /></Layout>} />
        <Route path="/resources"       element={<Layout><Resources     /></Layout>} />
        <Route path="/contact"         element={<Layout><Contact       /></Layout>} />
        <Route path="/newsletter"      element={<Layout><Newsletter    /></Layout>} />
        <Route path="/connect"         element={<Layout><Connect       /></Layout>} />
        <Route path="/conduct"         element={<Layout><CodeOfConduct /></Layout>} />
        <Route path="/privacy"         element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms"           element={<Layout><TermsOfUse    /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}