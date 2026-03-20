export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--dark)",
        padding: "28px 5%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--purple)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            A
          </div>
          <span
            style={{ color: "white", fontWeight: 700, fontFamily: "Nunito" }}
          >
            Aftab Shekh
          </span>
        </div>
        <span style={{ color: "rgba(255,255,255,.5)", fontSize: 13 }}>
          © 2026 Aftab Shekh · All rights reserved
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "GitHub", href: "https://github.com/aftabshekh" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "rgba(255,255,255,.45)",
                fontSize: 13,
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#a78bfa")}
              onMouseOut={(e) =>
                (e.target.style.color = "rgba(255,255,255,.45)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
