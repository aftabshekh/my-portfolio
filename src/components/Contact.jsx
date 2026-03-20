import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SOCIAL } from "../constants/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields!");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_azhnx5d",
        "template_8k7zugk",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "sspyJHXd6tAfc_Net",
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <section id="contact" style={{ padding: "100px 5%", background: "white" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="section-label">✉️ Get In Touch</div>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,42px)",
              fontWeight: 800,
              color: "var(--dark)",
              fontFamily: "Nunito",
              letterSpacing: "-.5px",
            }}
          >
            Contact Me
          </h2>
          <p style={{ color: "var(--muted)", marginTop: 10, fontSize: 15 }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            <input
              className="contact-input"
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="contact-input"
              placeholder="Your Email *"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <input
            className="contact-input"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
          <textarea
            className="contact-input"
            placeholder="Your Message *"
            rows={5}
            style={{ resize: "vertical" }}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            className="btn-purple"
            style={{
              width: "100%",
              padding: 14,
              fontSize: 15,
              opacity: status === "sending" ? 0.7 : 1,
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
            onClick={handleSubmit}
            disabled={status === "sending"}
          >
            {status === "sending" && "⏳ Sending..."}
            {status === "sent" && "✅ Message Sent!"}
            {status === "error" && "❌ Try Again!"}
            {status === "" && "Send Message ✉️"}
          </button>

          {status === "sent" && (
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #86efac",
                borderRadius: 8,
                padding: "12px 16px",
                textAlign: "center",
                color: "#16a34a",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              🎉 Thank you! I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div
              style={{
                background: "#fef2f2",
                border: "1px solid #fca5a5",
                borderRadius: 8,
                padding: "12px 16px",
                textAlign: "center",
                color: "#dc2626",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              ❌ Failed to send. Email me at aftabshekh8177@gmail.com
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 40,
          }}
        >
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title={s.label}
              style={{ color: s.color }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
