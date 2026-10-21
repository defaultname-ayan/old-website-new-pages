"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const registrations = [
  { label: "CIN", value: "U72200TS2024NPL189603" },
  { label: "Darpan", value: "TS/2024/0454519" },
  { label: "PAN", value: "ABOCS3612C" },
];

const taxApprovals = [
  {
    label: "12A",
    title: "Income Tax Exemption",
    desc: "Donations exempt from income tax under Section 12A",
    value: "ABOCS3612CE20241",
  },
  {
    label: "80G",
    title: "Donor Tax Benefit",
    desc: "Donors can claim 50% deduction on contributions under Section 80G",
    value: "ABOCS3612CF20241",
  },
];

export default function LegalCompliancePage() {
  return (
    <main className="min-h-screen" style={{ background: "#F5F3EE" }}>
      <style>{`
        * { box-sizing: border-box; }
        .reg-row:hover { background: #F0EDE6 !important; }
        .copy-btn { opacity: 0; transition: opacity 0.2s; cursor: pointer; background: none; border: none; color: #7A6B3A; font-size: 13px; }
        .reg-row:hover .copy-btn { opacity: 1; }
      `}</style>

      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: "#5e6f47",
          padding: "80px 24px 88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(212,175,55,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            <div style={{ height: 1, width: 48, background: "#D4AF37" }} />
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 600,
              }}
            >
              Transparency &amp; Trust
            </span>
            <div style={{ height: 1, width: 48, background: "#D4AF37" }} />
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 52px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Legal Compliance
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 500,
              margin: "0 auto 28px",
            }}
          >
            Official registration &amp; legal information of Satoru Foundation™
          </p>

          {/* Verified badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(212,175,55,0.15)",
              border: "1px solid rgba(212,175,55,0.4)",
              borderRadius: 100,
              padding: "8px 20px",
            }}
          >
            <span style={{ fontSize: 14, color: "#D4AF37" }}>✓</span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#D4AF37",
              }}
            >
              Govt. Recognised Non-Profit
            </span>
          </div>
        </div>

        {/* Wave */}
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            width: "100%",
            height: 48,
          }}
        >
          <path
            d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z"
            fill="#F5F3EE"
          />
        </svg>
      </section>

      {/* Body */}
      <section
        style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px 80px" }}
      >
        {/* Org name + registered office */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E3DDD3",
              borderRadius: 10,
              padding: "28px 28px 24px",
              borderTop: "3px solid #5e6f47",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7A6B3A",
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Organisation Name
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#1F2A14",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Satoru Foundation™
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#8A8070",
                marginTop: 6,
              }}
            >
              Section 8 Company · Not-for-Profit
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E3DDD3",
              borderRadius: 10,
              padding: "28px 28px 24px",
              borderTop: "3px solid #5e6f47",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7A6B3A",
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Registered Office
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#1F2A14",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Hyderabad, Telangana
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#8A8070",
                marginTop: 6,
              }}
            >
              India
            </div>
          </div>
        </div>

        {/* Legal Status */}
        <div
          style={{
            background: "#5e6f47",
            borderRadius: 10,
            padding: "28px 32px",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4AF37",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Legal Status
          </div>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.75,
            }}
          >
            Non-Profit Organisation, registered under{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              Section 8 of the Companies Act, 2013
            </strong>
            . Recognised by the{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              Ministry of Corporate Affairs, Government of India
            </strong>
            , and{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              NITI Aayog
            </strong>
            .
          </p>
        </div>

        {/* Registration Numbers */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E3DDD3",
            borderRadius: 10,
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              padding: "22px 28px 16px",
              borderBottom: "1px solid #EDE8DF",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7A6B3A",
                fontWeight: 600,
              }}
            >
              Registration Numbers
            </div>
          </div>
          {registrations.map((r, i) => (
            <div
              key={r.label}
              className="reg-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 28px",
                borderBottom:
                  i < registrations.length - 1 ? "1px solid #F0EDE6" : "none",
                background: "#fff",
                transition: "background 0.2s",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#5e6f47",
                  letterSpacing: "0.08em",
                  minWidth: 72,
                }}
              >
                {r.label}
              </span>
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 14,
                  color: "#1F2A14",
                  flex: 1,
                  paddingLeft: 16,
                  letterSpacing: "0.04em",
                }}
              >
                {r.value}
              </span>
              <button
                className="copy-btn"
                title={`Copy ${r.label}`}
                onClick={() => navigator.clipboard?.writeText(r.value)}
              >
                ⎘ Copy
              </button>
            </div>
          ))}
        </div>

        {/* Income Tax Approvals */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginBottom: 36,
          }}
        >
          {taxApprovals.map((t) => (
            <div
              key={t.label}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E3DDD3",
                borderRadius: 10,
                padding: "24px 28px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "#EDF2E6",
                  border: "1px solid #C5D4B0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#5e6f47",
                }}
              >
                {t.label}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1F2A14",
                    marginBottom: 4,
                  }}
                >
                  {t.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#7A7060",
                    lineHeight: 1.6,
                    marginBottom: 8,
                  }}
                >
                  {t.desc}
                </div>
                <div
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 13,
                    color: "#5e6f47",
                    letterSpacing: "0.04em",
                    background: "#F5F3EE",
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  {t.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          style={{
            textAlign: "center",
            borderTop: "1px solid #E3DDD3",
            paddingTop: 28,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#A89A80",
            }}
          >
            All registrations are active and independently verifiable · Last
            reviewed 2025
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
