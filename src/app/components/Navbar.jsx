"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    subItems: [{ name: "Our Team", href: "/about/ourteam" }],
  },
  {
    name: "Our Work",
    href: "/ourwork",
    subItems: [{ name: "Projects", href: "/projects" }],
  },
  {
    name: "Dementia",

    subItems: [
      { name: "Training", href: "/dementia-training" },
      { name: "Memory Camps", href: "/dementia-memory-camps" },
    ],
  },
  { name: "Saanidhyam", href: "/saanidhyam" },
  { name: "Our Partners", href: "/partners" },
  { name: "Get Involved", href: "/getinvolved" },
  {
    name: "Contact Us",
    href: "/contact",
    subItems: [{ name: "Media Centre", href: "/mediacentre" }],
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between gap-4 px-4 lg:px-6 xl:px-8 py-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Satoru Foundation Logo"
            width={200}
            height={60}
            className="h-11 xl:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-x-3.5 xl:gap-x-7">
          {navItems.map((item, index) => {
            const hasSubItems = !!item.subItems;
            const isClickable = !!item.href;

            return (
              <div key={index} className="relative group">
                <motion.div whileHover={{ y: -2, scale: 1.03 }}>
                  {isClickable ? (
                    <Link
                      href={item.href}
                      className="whitespace-nowrap text-[15px] xl:text-[17px] font-semibold text-[#5e6f47] group-hover:text-[#ecc750]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="whitespace-nowrap text-[15px] xl:text-[17px] font-semibold text-[#5e6f47] group-hover:text-[#ecc750] cursor-default">
                      {item.name}
                    </span>
                  )}
                </motion.div>

                {/* Dropdown */}
                {hasSubItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[14rem] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.subItems.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block px-6 py-3 text-center font-semibold text-[#5e6f47] hover:text-[#ecc750]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="https://donate.satorufoundation.org"
            className="ml-1 whitespace-nowrap bg-[#ecc750] text-[#5e6f47] px-5 py-2 font-bold rounded-lg hover:bg-[#5e6f47] hover:text-[#ecc750]"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#5e6f47]"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white px-4 pb-6 overflow-hidden"
          >
            {navItems.map((item) => {
              const hasSub = !!item.subItems;
              const isClickable = !!item.href;
              const open = openDropdown === item.name;

              return (
                <div key={item.name} className="border-b py-2">
                  <div className="flex justify-between items-center">
                    {isClickable ? (
                      <Link
                        href={item.href}
                        onClick={() => !hasSub && setIsMenuOpen(false)}
                        className="font-semibold text-[#5e6f47]"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span 
                        onClick={() => setOpenDropdown(open ? null : item.name)}
                        className="font-semibold text-[#5e6f47] cursor-pointer"
                      >
                        {item.name}
                      </span>
                    )}

                    {hasSub && (
                      <button
                        onClick={() =>
                          setOpenDropdown(open ? null : item.name)
                        }
                        className="p-2 text-[#5e6f47]"
                      >
                        {open ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {open && hasSub &&
                    item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block ml-4 mt-2 text-[#5e6f47]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                </div>
              )
            })}

            <Link
              href="https://donate.satorufoundation.org"
              className="block mt-4 bg-[#ecc750] text-center py-2 font-bold rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}