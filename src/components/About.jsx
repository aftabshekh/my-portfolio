import { SOCIAL } from "../constants/data";

export default function About({ scrollTo }) {
  return (
    <section id="about" style={{ padding: "100px 5%", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{ display: "flex", gap: 64, alignItems: "center" }}
        >
          <div style={{ flexShrink: 0, position: "relative" }}>
            <div
              style={{
                width: 300,
                height: 360,
                borderRadius: 20,
                background: "#f0edff",
                border: "1px solid var(--border)",
                overflow: "hidden",
              }}
            >
              <img
                src="/img2.jpg"
                alt="Aftab Shekh"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 20%",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 16,
                justifyContent: "center",
              }}
            >
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  title={s.label}
                  style={{ color: s.color }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="section-label">◈ About Me</div>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,40px)",
                fontWeight: 800,
                color: "var(--dark)",
                marginBottom: 16,
                fontFamily: "Nunito",
                letterSpacing: "-.5px",
              }}
            >
              {/* I am Professional Full-Stack Developer */}I am a Passionate
              Full-Stack Developer
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 15,
                lineHeight: 1.85,
                marginBottom: 14,
              }}
            >
              Hi, I'm Aftab Shekh, a passionate Full Stack Developer from
              Lucknow. I specialize in building complete web applications — from
              designing responsive, user-friendly frontends to developing
              secure, scalable backends.
            </p>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 15,
                lineHeight: 1.85,
                marginBottom: 28,
              }}
            >
              I work with technologies like Java, JavaScript, HTML, CSS, and
              modern frameworks to turn ideas into impactful solutions. My goal
              is to grow into a top-tier software engineer while continuously
              learning and creating projects that make a difference.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px 24px",
                marginBottom: 28,
                fontSize: 14,
              }}
            >
              {[
                ["🎂", "Birthdate", "01-05-2005"],
                ["📍", "Location", "Lucknow, India"],
                ["📞", "Phone", "+91 8177090150"],
                ["✉️", "Email", "aftabshekh8177@gmail.com"],
              ].map(([icon, label, val]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    padding: "6px 0",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  <span>{icon}</span>
                  <span style={{ color: "var(--muted)", minWidth: 60 }}>
                    {label}:
                  </span>
                  <span
                    style={{
                      fontWeight: 600,
                      color: "var(--dark)",
                      fontSize: 13,
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                className="btn-purple"
                onClick={() => scrollTo("portfolio")}
              >
                My Projects
              </button>
              <a
                href="/AFTAB-SHEKH-RESUME.pdf"
                download="AFTAB-SHEKH-RESUME.pdf"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-outline-purple">⬇ Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
