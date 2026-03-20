import { TECH_SKILLS, SOFT_SKILLS } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 5%", background: "#f8f7ff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="section-label">✦ Expertise</div>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,42px)",
              fontWeight: 800,
              color: "var(--dark)",
              fontFamily: "Nunito",
              letterSpacing: "-.5px",
            }}
          >
            My Skills
          </h2>
        </div>
        <div
          className="skills-cols"
          style={{ display: "flex", gap: 0, alignItems: "flex-start" }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--dark)",
                textAlign: "center",
                marginBottom: 28,
              }}
            >
              TechSkills
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              {TECH_SKILLS.map((s) => (
                <div key={s.name} className="skill-card">
                  <img
                    src={s.icon}
                    alt={s.name}
                    width={44}
                    height={44}
                    style={{ objectFit: "contain" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#374151",
                      textAlign: "center",
                    }}
                  >
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="skills-divider"
            style={{
              width: 1,
              background: "#e5e7eb",
              margin: "0 40px",
              alignSelf: "stretch",
              minHeight: 260,
            }}
          />
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--dark)",
                textAlign: "center",
                marginBottom: 28,
              }}
            >
              SoftSkills
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              {SOFT_SKILLS.map((s) => (
                <div key={s.name} className="soft-card">
                  <span style={{ fontSize: 36 }}>{s.emoji}</span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#374151",
                      textAlign: "center",
                    }}
                  >
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
