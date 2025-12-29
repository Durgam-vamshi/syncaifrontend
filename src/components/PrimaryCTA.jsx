import { useState, useCallback } from "react";
import "../styles/primaryCta.css";

const FORM_FIELDS = [
  { id: "email", type: "email", placeholder: "Business email", required: true },
  { id: "mobile", type: "tel", placeholder: "Mobile number", required: true },
  { id: "designation", type: "text", placeholder: "Role / Title", required: false },
  { id: "company", type: "text", placeholder: "Company", required: false },
];

export default function PrimaryCTA() {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    designation: "",
    company: "",
    source: "primary-cta",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    try {
      // 🔌 connect API / n8n here later
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="primary-cta">
      <div className="primary-cta-glow" />

      <div className="primary-cta-inner">
        {/* Headline */}
        <h2 className="primary-cta-title">
          Ready to bring <span>clarity</span> to your <span>AI systems</span>?
        </h2>

        {/* Supporting statement */}
        <p className="primary-cta-subtitle">
          A short, focused conversation to understand your current setup and
          identify where synchronization can create the most impact.
        </p>

        {/* Trust signals */}
        <ul className="primary-cta-trust">
          <li>15-minute introductory session</li>
          <li>No obligation or sales pressure</li>
          <li>Practical, actionable guidance</li>
        </ul>

        {/* CTA Form */}
        <form className="primary-cta-form" onSubmit={handleSubmit}>
          {FORM_FIELDS.map((field) => (
            <input
              key={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id]}
              required={field.required}
              onChange={handleChange}
              autoComplete="off"
            />
          ))}

          <button type="submit" disabled={status === "loading"}>
            {status === "loading"
              ? "Processing..."
              : "Request Strategy Session"}
          </button>

          {status === "success" && (
            <p className="cta-success">
              ✔ Request received. We’ll reach out shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

