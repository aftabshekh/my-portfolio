import { STATS } from "../constants/data";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(160deg, #f8f7ff 60%, #ede9fe 100%)",
        padding: "90px 5% 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(167,139,250,.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 48,
          }}
        >
          <div style={{ flex: 1, maxWidth: 520 }}>
            <div className="anim-1 section-label">✦ Full-Stack Developer</div>
            <h1
              className="anim-2"
              style={{
                fontSize: "clamp(36px,5.5vw,64px)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "var(--dark)",
                marginBottom: 16,
                fontFamily: "Nunito",
                letterSpacing: "-1px",
              }}
            >
              Hello, I'm
              <br />
              <span style={{ color: "var(--purple)" }}>Aftab Shekh</span>
            </h1>
            <p
              className="anim-3"
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 28,
                maxWidth: 420,
              }}
            >
              I build accessible, pixel-perfect digital experiences for the web.
              I specialize in creating responsive frontends and secure, scalable
              backends.
            </p>
            <div
              className="anim-4"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <button
                className="btn-purple"
                onClick={() => scrollTo("contact")}
              >
                Say Hello! 👋
              </button>
              <button
                className="btn-ghost"
                onClick={() => scrollTo("portfolio")}
              >
                View Projects
              </button>
            </div>
            <div
              className="stats-row anim-4"
              style={{
                display: "flex",
                gap: 14,
                marginTop: 36,
                flexWrap: "wrap",
              }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="stat-card"
                  style={{ minWidth: 110 }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: "var(--purple)",
                      fontFamily: "Nunito",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="float" style={{ flexShrink: 0 }}>
            <div
              className="hero-img"
              style={{
                width: 360,
                height: 430,
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="/img4.PNG"
                alt="Aftab Shekh"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "white",
                  borderRadius: 10,
                  padding: "8px 18px",
                  boxShadow: "0 4px 16px rgba(0,0,0,.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--dark)",
                  }}
                >
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
