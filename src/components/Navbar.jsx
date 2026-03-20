import { NAV_LINKS } from "../constants/data";

export default function Navbar({ scrolled, activeNav, scrollTo }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(248,247,255,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all .3s",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "var(--purple)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            A
          </div>
          <span
            style={{
              fontWeight: 800,
              fontSize: 18,
              color: "var(--dark)",
              fontFamily: "Nunito",
            }}
          >
            Aftab
          </span>
        </div>
        <div className="nav-desktop" style={{ display: "flex", gap: 32 }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              className={`nav-link${activeNav === l ? " active" : ""}`}
              onClick={() =>
                l === "Project"
                  ? scrollTo("portfolio")
                  : scrollTo(l.toLowerCase())
              }
            >
              {l}
            </button>
          ))}
        </div>
        <button
          className="btn-purple"
          style={{ padding: "9px 22px", fontSize: 14 }}
          onClick={() => scrollTo("contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
