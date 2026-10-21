"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("cookieConsent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white text-black p-5 rounded-xl shadow-xl w-[320px] max-w-full">
      <h3 className="text-lg font-semibold mb-2">We use cookies 🍪</h3>
      <p className="text-sm text-gray-700 mb-4">
        We use cookies to improve your experience. You can choose to accept all cookies,
        only the necessary ones, or reject all non-essential cookies.
      </p>

      <div className="flex flex-col gap-2 mb-3">
        <button
          onClick={() => handleConsent("all")}
          className="bg-[#ecc750] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
        >
          Accept All
        </button>
        <button
          onClick={() => handleConsent("necessary")}
          className="bg-gray-200 text-black font-medium px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Accept Only Necessary
        </button>
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-red-100 text-red-600 font-medium px-4 py-2 rounded hover:bg-red-200 transition"
        >
          Reject All
        </button>
      </div>

      <p className="text-xs text-gray-600">
        View our{" "}
        <Link href="/termsandpolicy" className="text-[#5e6f47] underline hover:text-[#ecc750]">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/termsandpolicy" className="text-[#5e6f47] underline hover:text-[#ecc750]">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

// Custom hook to check cookie consent
export function useCookieConsent() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('cookieConsent');
}
