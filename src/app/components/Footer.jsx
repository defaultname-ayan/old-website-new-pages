"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

export default function Footer({ email = "info@satorufoundation.org" }) {
  return (
    <footer className="bg-[#5e6f47] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Section - Logo and Mission */}
          <div className="lg:col-span-1">
            <div className="mb-4 mt-17">
              <Image
                src="/footer.png"
                alt="Satoru Foundation Logo"
                width={225}
                height={225}
              />
            </div>
            <Link
              href="https://donate.satorufoundation.org"
              className="inline-block bg-[#ecc750] text-[#1e2b26] font-semibold px-5 py-2 rounded-md hover:bg-yellow-400 transition-colors mt-4"
            >
              DONATE NOW
            </Link>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-1">Links</h3>
            <div className="w-15 h-1 bg-[#ecc750] mb-4 rounded"></div>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <Link href="/" className="hover:text-[#ecc750]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ecc750]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/ourwork" className="hover:text-[#ecc750]">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#ecc750]">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/fellowship" className="hover:text-[#ecc750]">
                  Fellowship
                </Link>
              </li>
              <li>
                <Link href="/getinvolved" className="hover:text-[#ecc750]">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/mediacentre" className="hover:text-[#ecc750]">
                  Media Centre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ecc750]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/termsandpolicy" className="hover:text-[#ecc750]">
                  Terms and Policy
                </Link>
              </li>
              <li>
                <Link href="/legal-compliance" className="hover:text-[#ecc750]">
                  Legal Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/organizational-policy"
                  className="hover:text-[#ecc750]"
                >
                  Organizational Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-lg font-bold mb-1">Our Projects</h3>
            <div className="w-28 h-1 bg-[#ecc750] mb-4 rounded"></div>
            <ul className="space-y-3 text-white">
              <li>
                <Link href="/saanidhyam" className="hover:text-[#ecc750] ">
                  Saanidhyam
                </Link>
              </li>
              <li>
                <Link
                  href="/dementia-memory-camps"
                  className="hover:text-[#ecc750] "
                >
                  Memory Screening camps
                </Link>
              </li>
              <li>
                <Link href="/projects/Madavi" className="hover:text-[#ecc750]">
                  Madavi
                </Link>
              </li>
              <li>
                <Link href="/projects/Gaman" className="hover:text-[#ecc750]">
                  Gaman
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/ActiveIndia"
                  className="hover:text-[#ecc750]"
                >
                  Active India
                </Link>
              </li>
              <li>
                <Link href="/aatmeeyasparsha" className="hover:text-[#ecc750]">
                  Aatmeeya Sparsha
                </Link>
              </li>
              <li>
                <Link
                  href="/dementia-training"
                  className="hover:text-[#ecc750]"
                >
                  Dementia Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-1">Saanidhyam Directory</h3>
            <div className="w-32 h-1 bg-[#ecc750] mb-4 rounded"></div>
            <ul className="space-y-3 text-white text-sm">
              <li>
                <Link href="/saanidhyam" className="hover:text-[#ecc750]">
                  Elder Care Search Engine
                </Link>
              </li>
              <li>
                <Link href="/saanidhyam" className="hover:text-[#ecc750]">
                  Search for Old Age Homes
                </Link>
              </li>
              <li>
                <Link href="/saanidhyam" className="hover:text-[#ecc750]">
                  Old Age Homes in Telangana
                </Link>
              </li>
              <li>
                <Link href="/saanidhyam" className="hover:text-[#ecc750]">
                  Old Age Homes in Andhra Pradesh
                </Link>
              </li>
              <li>
                <Link href="/saanidhyam" className="hover:text-[#ecc750]">
                  Verified Elder Care Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-1">Contact</h3>
            <div className="flex items-center text-white mb-2">
              <Mail className="h-4 w-4 mr-2 text-[#ecc750]" />
              <a
                href={`mailto:${email}`}
                className="hover:text-[#ecc750]"
              >
                {email}
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/satoru_foundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 hover:text-[#ecc750]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61565946122315"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 hover:text-[#ecc750]" />
              </a>
              <a
                href="https://www.youtube.com/@SatoruFoundationNGO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 hover:text-[#ecc750]" />
              </a>
              <a
                href="https://www.linkedin.com/company/satoru-foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 hover:text-[#ecc750]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-500/20 pt-6">
          <p className="text-center text-sm text-gray-400">
            © All Copyright {new Date().getFullYear()} Satoru Foundation | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
