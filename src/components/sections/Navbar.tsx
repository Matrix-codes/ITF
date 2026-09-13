"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "../common/Logo";
import { Button } from "../ui/button";
import { Menu, X, PhoneCall, Lock, UserCheck } from "lucide-react";
import { ITF_DETAILS } from "@/lib/content";

interface NavbarProps {
  onOpenInquiry: (courseId?: string) => void;
  onOpenAuth?: (tab: "login" | "register" | "admin") => void;
}

export function Navbar({ onOpenInquiry, onOpenAuth }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Approvals", href: "#approvals" },
    { label: "About Director", href: "#director" },
    { label: "Contact & Location", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-base border-b border-base-border transition-colors">
      {/* Top Institutional Notification Bar */}
      <div className="bg-navy-950 text-white text-[11px] py-1.5 px-4 sm:px-8 border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
            <span className="font-medium">
              Government-Affiliated Industrial Safety & Technical Skill Training Institute
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a
              href="https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold flex items-center gap-1.5 transition-colors font-medium text-white"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-gold font-bold">Have Any Doubts?</span>
              <span>24x7 Helpdesk: +91 63074 90205 (WFSI)</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/70">
              Deoria Central Campus, UP (274001)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Identity: Logo Mark + Wordmark */}
          <a
            href="#"
            className="flex items-center group py-2 focus-visible:outline-none"
            aria-label="ITF Home"
          >
            <Logo variant="full" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy-900 hover:text-navy-700 transition-colors relative py-2 border-b-2 border-transparent hover:border-navy-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Top Right Actions: Login, Register, Admin, Apply CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => onOpenAuth?.("login")}
              className="text-xs font-semibold text-navy-900 hover:text-navy-700 px-2.5 py-2 rounded transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => onOpenAuth?.("register")}
              className="text-xs font-semibold text-navy-900 hover:text-navy-700 px-2.5 py-2 rounded transition-colors border border-base-border hover:bg-base-subtle"
            >
              Register
            </button>
            <Link
              href="/admin"
              className="text-xs font-bold text-navy-900 hover:text-navy-950 px-2.5 py-2 rounded transition-colors flex items-center gap-1 bg-base-subtle border border-base-border hover:bg-base-muted"
            >
              <Lock className="w-3 h-3 text-gold" />
              <span>Admin</span>
            </Link>
            <Button
              variant="cta"
              onClick={() => onOpenInquiry()}
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold ml-1"
            >
              Apply for Admission
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-navy-900 hover:bg-base-subtle focus-visible:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-base-surface border-b border-base-border px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-navy-900 hover:bg-base-subtle rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-base-border space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth?.("login");
                }}
                className="py-2 text-xs font-semibold text-navy-900 bg-base border border-base-border rounded text-center"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth?.("register");
                }}
                className="py-2 text-xs font-semibold text-navy-900 bg-base border border-base-border rounded text-center"
              >
                Register
              </button>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs font-bold text-navy-900 bg-base-subtle border border-base-border rounded text-center flex items-center justify-center gap-1"
              >
                <Lock className="w-3 h-3 text-gold" />
                <span>Admin</span>
              </Link>
            </div>

            <Button
              variant="cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full text-xs uppercase tracking-wider font-bold py-3"
            >
              Apply for Admission
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
