"use client";

import React, { useState } from "react";
import { X, ShieldCheck, UserCheck, KeyRound, ArrowRight, Lock, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { COURSES } from "@/lib/content";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register" | "admin";
}

export function AuthModal({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "admin">(defaultTab);
  const router = useRouter();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(COURSES[0].title);
  const [message, setMessage] = useState("");

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  if (!isOpen) return null;

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    router.push("/admin");
  };

  const handleCandidateLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Candidate authenticated successfully. Redirecting to student verification dossier...");
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Registration logged for ${name}. An official SMS confirmation will be sent to ${phone}.`);
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-none">
      <div className="relative w-full max-w-md bg-white border border-base-border shadow-xl rounded-sm overflow-hidden animate-in fade-in duration-150">
        {/* Modal Header */}
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <h3 className="font-heading text-lg font-bold text-white tracking-wide">
              ITF Portal Access
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 bg-base-subtle border-b border-base-border text-xs font-bold text-center">
          <button
            onClick={() => setActiveTab("login")}
            className={`py-3 transition-colors ${
              activeTab === "login"
                ? "bg-white text-navy-900 border-b-2 border-navy-900"
                : "text-body-muted hover:text-navy-900"
            }`}
          >
            Candidate Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`py-3 transition-colors ${
              activeTab === "register"
                ? "bg-white text-navy-900 border-b-2 border-navy-900"
                : "text-body-muted hover:text-navy-900"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`py-3 transition-colors flex items-center justify-center gap-1 ${
              activeTab === "admin"
                ? "bg-navy-900 text-white"
                : "text-navy-900 font-extrabold hover:bg-navy-900/10"
            }`}
          >
            <Lock className="w-3 h-3 text-gold" />
            <span>Admin Panel</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 bg-base">
          {message && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-sm font-medium">
              {message}
            </div>
          )}

          {/* TAB 1: CANDIDATE LOGIN */}
          {activeTab === "login" && (
            <form onSubmit={handleCandidateLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Registration Number or Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ITF/2026/WPR-8842 or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Access Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className="text-xs text-navy-900 hover:underline"
                >
                  New candidate? Register
                </button>
                <Button type="submit" variant="primary" className="text-xs font-bold px-5">
                  Sign In
                </Button>
              </div>
            </form>
          )}

          {/* TAB 2: CANDIDATE REGISTRATION */}
          {activeTab === "register" && (
            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Full Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Mobile Number <span className="text-red-700">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Interested Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-xs text-navy-900 hover:underline"
                >
                  Already registered? Login
                </button>
                <Button type="submit" variant="cta" className="text-xs font-bold px-5">
                  Create Account
                </Button>
              </div>
            </form>
          )}

          {/* TAB 3: ADMIN & DIRECTORATE PORTAL */}
          {activeTab === "admin" && (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="p-3 bg-navy-900 text-white rounded-sm space-y-1">
                <span className="text-[10px] uppercase font-bold text-gold block">
                  Directorate Portal Authentication
                </span>
                <p className="text-[11px] text-white/80">
                  Administrative access for Er. Sachin Kumar Singh and authorized officers to generate certified certificates, review candidate inquiries, and manage training batches.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Directorate Email ID
                </label>
                <input
                  type="email"
                  defaultValue="director@itfindia.org.in"
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Master Access Key
                </label>
                <input
                  type="password"
                  defaultValue="itf2026admin"
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none font-mono text-xs"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="cta"
                  className="w-full text-xs uppercase tracking-wider font-bold py-3 flex items-center justify-center gap-2"
                >
                  <span>Open Admin Panel &amp; Certificate Generator</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-[11px] text-center text-body-muted pt-1">
                Demo Mode: Click above button to enter directly into the Admin Panel.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
