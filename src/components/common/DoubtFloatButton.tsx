"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, HelpCircle } from "lucide-react";

export function DoubtFloatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="24x7 Student Doubt Support" className="fixed bottom-5 right-5 z-40">
      {/* Floating trigger button or popover */}
      {isOpen ? (
        <div className="bg-white border-2 border-navy-900 shadow-xl rounded-sm p-4 w-72 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-start justify-between gap-2 border-b border-base-border pb-2">
            <div>
              <span className="text-[10px] uppercase font-bold text-gold tracking-wider block">
                Have Any Doubt?
              </span>
              <h4 className="font-heading text-sm font-bold text-navy-900 leading-tight">
                WFSI (~World Fire Safety Institute)
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-body-muted hover:text-navy-900 p-0.5"
              aria-label="Close doubt desk popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-sm border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Open 24 Hours • Deoria, UP</span>
          </div>

          <p className="text-xs text-body leading-relaxed">
            Directly connect with our training counselor for course syllabus, eligibility, fee structures, or Gulf placement inquiries.
          </p>

          <div className="space-y-2 pt-1">
            <a
              href="https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+916307490205"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-bold rounded-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: +91 63074 90205</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2 px-3.5 py-2.5 bg-navy-900 text-white rounded-sm border border-navy-800 shadow-md hover:bg-navy-800 transition-colors"
          aria-label="Open 24x7 student doubt helpline"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-gold tracking-wider block leading-none">
              Have Doubts?
            </span>
            <span className="text-xs font-semibold leading-tight flex items-center gap-1 mt-0.5">
              <span>Contact WFSI</span>
              <span className="text-white/60 font-mono text-[11px] hidden sm:inline">• +91 63074 90205</span>
            </span>
          </div>
        </button>
      )}
    </aside>
  );
}
