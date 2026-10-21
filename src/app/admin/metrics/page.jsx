"use client";

import { useState, useEffect } from "react";

export default function AdminMetricsPage() {
  const [metrics, setMetrics] = useState({
    camps: "",
    peopleScreened: "",
    identifiedcases: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("/api/metrics");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMetrics({
          camps: data.camps ?? 0,
          peopleScreened: data.peopleScreened ?? 0,
          identifiedcases: data.identifiedcases ?? 0,
        });
      } catch (err) {
        console.error(err);
        setStatus({
          type: "error",
          message: "Failed to load current metrics.",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // only allow numeric input
    if (value === "" || /^\d+$/.test(value)) {
      setMetrics((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/admin/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          camps: parseInt(metrics.camps, 10),
          peopleScreened: parseInt(metrics.peopleScreened, 10),
          identifiedcases: parseInt(metrics.identifiedcases, 10),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }

      setStatus({
        type: "success",
        message:
          "✅ Metrics updated successfully. Changes are live on the website.",
      });
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: `❌ ${err.message}` });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="text-black">Loading metrics...</div>
      </div>
    );
  }

  const fields = [
    {
      key: "camps",
      label: "Camps Conducted",
      description: "Total number of memory wellness camps held so far.",
      icon: (
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      key: "peopleScreened",
      label: "People Screened",
      description: "Total individuals who have received cognitive screenings.",
      icon: (
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      key: "identifiedcases",
      label: "Identified Dementia Cases",
      description: "Total cases identified as at-risk or confirmed dementia.",
      icon: (
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Impact Metrics</h1>
          <p className="text-gray-500 mt-1 text-sm">
            These numbers appear live on the Memory Wellness Camp page.
          </p>
        </div>

        {/* Current values preview */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {fields.map((f) => (
            <div
              key={f.key}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-black">
                {Number(metrics[f.key]).toLocaleString()}+
              </div>
              <div className="text-xs text-gray-500 mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Status message */}
        {status.message && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm font-medium border ${
              status.type === "success"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            {fields.map((field, i) => (
              <div
                key={field.key}
                className={`p-6 ${i !== fields.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">{field.icon}</div>
                  <div className="flex-1">
                    <label
                      htmlFor={field.key}
                      className="block text-sm font-semibold text-black mb-1"
                    >
                      {field.label}
                    </label>
                    <p className="text-xs text-gray-500 mb-3">
                      {field.description}
                    </p>
                    <input
                      id={field.key}
                      type="text"
                      inputMode="numeric"
                      name={field.key}
                      value={metrics[field.key]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-black text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-xs text-gray-400">
              Changes go live immediately after saving.
            </p>
            <button
              type="submit"
              disabled={saving}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm flex items-center gap-2"
            >
              {saving ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Saving...
                </>
              ) : (
                "Save Metrics"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
