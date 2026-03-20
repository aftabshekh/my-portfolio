import { PROJECTS } from "../constants/data";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{ padding: "100px 5%", background: "white" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="section-label">◉ My Work</div>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,42px)",
              fontWeight: 800,
              color: "var(--dark)",
              fontFamily: "Nunito",
              letterSpacing: "-.5px",
            }}
          >
            Featured Projects
          </h2>
        </div>
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 24,
          }}
        >
          {PROJECTS.map((p) => (
            <div key={p.title} className="project-card">
              <div style={{ height: 180, overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--purple)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                    marginBottom: 6,
                  }}
                >
                  {p.cat}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    marginBottom: 14,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    fontSize: 12,
                    color: "#9ca3af",
                    fontWeight: 500,
                    marginBottom: 14,
                  }}
                >
                  {p.tech}
                </div>
                <button
                  className="btn-outline-purple"
                  style={{ fontSize: 13, padding: "7px 18px" }}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
