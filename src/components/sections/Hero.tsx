"use client";

import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ITF_DETAILS } from "@/lib/content";
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenInquiry: () => void;
}

export function Hero({ onOpenInquiry }: HeroProps) {
  return (
    <section className="relative bg-base border-b border-base-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Asymmetric 2-Column Grid: Official Logo Emblem on the LEFT, Content on the RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Official ITF Logo Emblem Image (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md border-2 border-navy-900 bg-white p-6 sm:p-8 rounded-sm shadow-sm flex flex-col items-center text-center space-y-4">
              <div className="relative w-60 sm:w-72 aspect-square flex items-center justify-center">
                <img
                  src="/images/itf_logo.jpg"
                  alt="International Technical Foundation (ITF) Official Logo Emblem - Educate, Train, Empower"
                  width={280}
                  height={280}
                  style={{ maxWidth: "280px", width: "100%", height: "auto", objectFit: "contain" }}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="pt-3 border-t border-base-border w-full space-y-1">
                <span className="text-xs uppercase font-bold tracking-widest text-navy-900 block">
                  Official Institutional Seal
                </span>
                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-navy-900 tracking-wider">
                  <span>EDUCATE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span>TRAIN</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span>EMPOWER</span>
                </div>
                <p className="text-[11px] text-body-muted pt-1 font-medium">
                  Deoria Central Campus • Uttar Pradesh, India (274001)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Institutional Headings, Tagline, CTAs & Stats (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline Badge Strip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs uppercase tracking-widest font-bold text-navy-900 bg-base-subtle px-3 py-1 rounded-sm border border-base-border">
                {ITF_DETAILS.tagline}
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold text-body-muted">
                ISO 9001:2015 &amp; 29990:2010 Certified
              </span>
            </div>

            {/* Main Institutional Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.18] tracking-tight">
              Government-Affiliated Industrial Safety &amp; Technical Training Institute
            </h1>

            {/* One-Line Description */}
            <p className="text-base sm:text-lg text-body leading-relaxed max-w-2xl font-normal">
              {ITF_DETAILS.oneLineDescription}
            </p>

            {/* Have Any Doubt Callout Strip */}
            <div className="p-3 bg-white border border-navy-900 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <div>
                  <span className="font-bold text-navy-900 block">
                    Have any doubt? Contact our 24x7 desk:
                  </span>
                  <span className="text-[11px] text-body-muted">
                    WFSI (~World Fire Safety Institute) • Deoria, UP
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-sm font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+916307490205"
                  className="inline-flex items-center gap-1 px-3 py-1.5 border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-sm font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 63074 90205</span>
                </a>
              </div>
            </div>

            {/* CTA Actions Strip */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#courses" className="inline-block">
                <Button variant="cta" size="lg" className="w-full sm:w-auto px-7 text-xs uppercase tracking-wider font-bold">
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-6 text-xs uppercase tracking-wider font-semibold border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
              >
                Inquire for Admission
              </Button>
            </div>

            {/* Institutional Stat Strip */}
            <div className="pt-6 border-t border-base-border grid grid-cols-3 gap-4">
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                  10+
                </p>
                <p className="text-xs text-body-muted font-medium mt-0.5">
                  Govt. &amp; Statutory Approvals
                </p>
              </div>
              <div className="border-l border-base-border pl-4">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                  30+
                </p>
                <p className="text-xs text-body-muted font-medium mt-0.5">
                  Director Certifications
                </p>
              </div>
              <div className="border-l border-base-border pl-4">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                  100%
                </p>
                <p className="text-xs text-body-muted font-medium mt-0.5">
                  Site-Ready Practical Field Rigor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
