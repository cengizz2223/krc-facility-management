"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { href: "/leistungen",  label: "Leistungen" },
  { href: "/ueber-uns",   label: "Über uns" },
  { href: "/referenzen",  label: "Referenzen" },
  { href: "/faq",         label: "FAQ" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen ? "nav-glass shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="KRC Facility Management">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-brand-600 text-white shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-sm font-bold tracking-tight">KRC</span>
                <div className="absolute inset-0 rounded-lg ring-2 ring-brand-600/0 group-hover:ring-brand-600/30 transition-all" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-700 text-zinc-950 leading-none tracking-tight font-semibold">
                  KRC Facility
                </div>
                <div className="text-xs text-zinc-500 leading-none mt-0.5 tracking-wide">
                  Management
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-brand-700 bg-brand-50"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:krc.fm@outlook.de"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <Phone size={14} />
                <span className="text-sm font-medium">Kontakt</span>
              </a>
              <Link href="/kontakt" className="btn-primary text-sm py-2.5 px-5">
                Kostenlose Anfrage
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-zinc-100">
                <span className="font-semibold text-zinc-950">KRC Facility Management</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-600"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                        pathname === link.href
                          ? "text-brand-700 bg-brand-50"
                          : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 border-t border-zinc-100 space-y-3">
                <a
                  href="mailto:krc.fm@outlook.de"
                  className="flex items-center gap-2 text-sm text-zinc-500"
                >
                  <Phone size={14} />
                  krc.fm@outlook.de
                </a>
                <Link
                  href="/kontakt"
                  className="btn-primary w-full justify-center"
                >
                  Kostenlose Anfrage
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
