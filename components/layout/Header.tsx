"use client";

import Link from "next/link";
import Image from "next/image";
// import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Header() {
  // const t = useTranslations("Home");
  const [isMenuOPen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOPen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOPen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    // Handle escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (isMenuOPen && event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOPen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOPen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOPen]);

  return (
    <>
      <div className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/40 px-6 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3" onClick={closeMenu}>
            <Image src="/logo.svg" width={44} height={44} alt="Logo" />
            <Link
              href="/"
              className="text-xl font-semibold tracking-wide text-white"
            >
              Check-In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-center items-center gap-4 sm:hidden">
            <Button
              ref={menuButtonRef}
              onClick={toggleMenu}
              arialLabel="Toggle menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-2 sm:gap-4 max-sm:hidden">
            <Link
              href="/login"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
            >
              Register
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOPen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden animate-in fade-in"
            onClick={closeMenu}
          >
            {/* Slide-in Menu */}
            <div
              ref={menuRef}
              className="fixed right-0 z-50 h-full w-64 bg-slate-900 shadow-xl sm:hidden animate-in slide-in-from-top"
            >
              <div className="flex justify-end p-4">
                <Button onClick={closeMenu} arialLabel="Close menu">
                  <X className="h-6 w-6 text-white" />
                </Button>
              </div>
              <div className="flex flex-col gap-4 px-6 py-6">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-full border border-white/10 px-4 py-3 text-center text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-slate-950 transition hover:bg-cyan-100"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
