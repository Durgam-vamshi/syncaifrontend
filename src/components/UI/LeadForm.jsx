
import { useState, useCallback, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "../Hero/leadForm.css";

// Memoize static fields to prevent re-mapping on every keystroke
const FORM_FIELDS = [
  { id: 'email', label: 'Business Email', type: 'email', required: true },
  { id: 'mobile', label: 'Mobile Number', type: 'tel', required: true },
  { id: 'designation', label: 'Designation', type: 'text', required: false },
  { id: 'company', label: 'Company', type: 'text', required: false }
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    email: "", mobile: "", designation: "", company: "", source: "ai-strategy-landing",
  });
  const [status, setStatus] = useState("idle");
  const shouldReduceMotion = useReducedMotion();

  // Use useCallback to prevent function recreation on re-renders
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    
    setStatus("loading");
    try {
      // Logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  // Animation variants defined outside to save memory
  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="book-session" className="leadSection">
      <div className="formContainer">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}                  
          className="glassCard"
        >
          <div className="formHeader">
            <span className="kicker">Next Phase</span>
            <h2 className="title">Synchronize <span className="accent">Intelligence</span></h2>
            <p className="subtitle">Strategic AI auditing for enterprise-level operations.</p>
          </div>

          <form onSubmit={handleSubmit} className="mainForm">
            <div className="inputGrid">
              {FORM_FIELDS.map((field) => (
                <div key={field.id} className="inputWrapper">
                  <input
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder=" " 
                    value={formData[field.id]}
                    onChange={handleChange}
                    className="formInput"
                    // Disable autocomplete if lag persists on mobile
                    autoComplete="off"
                  />
                  <label className="formLabel">{field.label}</label>
                  <div className="focusLine"></div>
                </div>
              ))}
            </div>

            <div className="actionArea">
              <button 
                type="submit" 
                className={`submitBtn ${status === "loading" ? "loading" : ""}`}
                disabled={status === "loading"}
              >
                <span className="btnText">
                  {status === "loading" ? "Processing..." : "Initiate Briefing"}
                </span>
                {status !== "loading" && <span className="btnArrow">→</span>}
              </button>
            </div>

            {status === "success" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="successBox">
                <p>✔ Briefing Request Logged. Expect contact within 24h.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(LeadForm);