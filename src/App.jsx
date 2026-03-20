import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import PortfolioSection from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Nunito', sans-serif",
        background: "#f8f7ff",
        color: "#1a1333",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        :root {
          --purple: #7c3aed; --purple-light: #ede9fe; --purple-mid: #a78bfa;
          --bg: #f8f7ff; --white: #ffffff; --dark: #1a1333;
          --muted: #6b7280; --border: #e8e4f8;
        }
        body { background: var(--bg); overflow-x: hidden; }
        .nav-link { font-size:14px; font-weight:500; color:#374151; background:none; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; transition:color .2s; text-decoration:none; padding:4px 0; }
        .nav-link:hover, .nav-link.active { color:var(--purple); }
        .btn-purple { background:var(--purple); color:white; border:none; padding:11px 26px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; transition:all .2s; }
        .btn-purple:hover { background:#6d28d9; transform:translateY(-1px); box-shadow:0 6px 20px rgba(124,58,237,.3); }
        .btn-outline-purple { background:transparent; color:var(--purple); border:2px solid var(--purple); padding:9px 22px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; transition:all .2s; display:inline-flex; align-items:center; gap:6px; }
        .btn-outline-purple:hover { background:var(--purple-light); }
        .btn-ghost { background:transparent; color:#374151; border:2px solid #e5e7eb; padding:9px 22px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; font-family:'DM Sans',sans-serif; transition:all .2s; }
        .btn-ghost:hover { border-color:var(--purple); color:var(--purple); }
        .stat-card { background:white; border-radius:14px; padding:20px 28px; border:1px solid var(--border); flex:1; box-shadow:0 2px 12px rgba(124,58,237,.06); transition:all .25s; }
        .stat-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(124,58,237,.12); }
        .process-card { background:white; border-radius:16px; padding:28px 24px; border:1px solid var(--border); box-shadow:0 2px 12px rgba(124,58,237,.05); transition:all .3s; }
        .process-card:hover { transform:translateY(-4px); box-shadow:0 12px 32px rgba(124,58,237,.12); border-color:var(--purple-mid); }
        .skill-card { background:white; border-radius:12px; padding:16px 14px; border:1px solid var(--border); display:flex; flex-direction:column; align-items:center; gap:8px; width:96px; transition:all .25s; cursor:default; }
        .skill-card:hover { border-color:var(--purple); transform:translateY(-3px); box-shadow:0 6px 18px rgba(124,58,237,.1); }
        .soft-card { background:white; border-radius:12px; padding:18px 16px; border:1px solid var(--border); display:flex; flex-direction:column; align-items:center; gap:8px; min-width:120px; transition:all .25s; }
        .soft-card:hover { border-color:var(--purple); transform:translateY(-3px); box-shadow:0 6px 18px rgba(124,58,237,.1); }
        .project-card { background:white; border-radius:16px; overflow:hidden; border:1px solid var(--border); transition:all .3s; }
        .project-card:hover { transform:translateY(-5px); box-shadow:0 16px 40px rgba(124,58,237,.12); }
        .social-btn { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; background:white; border:1.5px solid #e5e7eb; color:#374151; cursor:pointer; transition:all .2s; text-decoration:none; }
        .social-btn:hover { border-color:var(--purple); color:var(--purple); transform:translateY(-2px); }
        .contact-input { width:100%; padding:11px 14px; border-radius:8px; border:1.5px solid #e5e7eb; background:white; font-size:14px; font-family:'DM Sans',sans-serif; outline:none; transition:border .2s; color:#1a1333; }
        .contact-input:focus { border-color:var(--purple); box-shadow:0 0 0 3px rgba(124,58,237,.08); }
        .contact-input::placeholder { color:#9ca3af; }
        .section-label { display:inline-flex; align-items:center; gap:6px; background:var(--purple-light); color:var(--purple); padding:5px 14px; border-radius:100px; font-size:12px; font-weight:700; letter-spacing:.5px; text-transform:uppercase; margin-bottom:12px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        .anim-1 { animation:fadeUp .65s ease both; }
        .anim-2 { animation:fadeUp .65s .12s ease both; }
        .anim-3 { animation:fadeUp .65s .24s ease both; }
        .anim-4 { animation:fadeUp .65s .36s ease both; }
        .float { animation:float 4s ease-in-out infinite; }
        @media(max-width:820px){
          .hero-grid { flex-direction:column-reverse !important; text-align:center; }
          .hero-img { width:240px !important; height:300px !important; margin:0 auto 32px; }
          .stats-row { flex-direction:column !important; }
          .about-grid { flex-direction:column !important; }
          .process-grid { grid-template-columns:1fr !important; }
          .projects-grid { grid-template-columns:1fr !important; }
          .skills-cols { flex-direction:column !important; }
          .skills-divider { width:100% !important; height:1px !important; margin:24px 0 !important; }
          .nav-desktop { display:none !important; }
        }
      `}</style>

      <Navbar scrolled={scrolled} activeNav={activeNav} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <Process />
      <PortfolioSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
