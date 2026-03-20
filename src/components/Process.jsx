import { PROCESS_STEPS } from "../constants/data";

export default function Process() {
  return (
    <section
      id="process"
      style={{ padding: "100px 5%", background: "#f1f0fa" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: 60,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 260px", maxWidth: 280 }}>
            <div className="section-label">⬡ How I Work</div>
            <h2
              style={{
                fontSize: "clamp(26px,3.5vw,40px)",
                fontWeight: 800,
                color: "var(--dark)",
                marginBottom: 16,
                fontFamily: "Nunito",
                letterSpacing: "-.5px",
              }}
            >
              Work Process
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 12,
              }}
            >
              A structured approach that ensures every project is delivered on
              time, on budget, and beyond expectations.
            </p>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
              From discovery to deployment, I maintain clear communication and
              quality at every step.
            </p>
          </div>
          <div
            className="process-grid"
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="process-card">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--purple-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 14,
                  }}
                >
                  {s.icon}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--purple)",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {s.num}.
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
