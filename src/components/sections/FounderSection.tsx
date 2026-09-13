"use client";

import React from "react";
import { ITF_DETAILS } from "@/lib/content";
import { Award, ShieldCheck, Check, GraduationCap, Building2 } from "lucide-react";
import { Button } from "../ui/button";

interface FounderSectionProps {
  onOpenInquiry: () => void;
}

export function FounderSection({ onOpenInquiry }: FounderSectionProps) {
  const { founder } = ITF_DETAILS;

  return (
    <section id="director" className="py-14 lg:py-20 bg-base-subtle border-b border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-sm bg-navy-900 inline-block"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
              Institutional Leadership &amp; Governance
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Directorate Credibility &amp; Academic Authority
          </h2>
          <p className="text-sm sm:text-base text-body mt-2 leading-relaxed">
            The curriculum, practical training standards, and certification assessments at ITF are supervised directly by accredited industrial safety professionals with decades of cumulative plant engineering and regulatory compliance experience.
          </p>
        </div>

        {/* Asymmetric 2-Column Leadership Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Formal Executive Profile Card (5 Cols) */}
          <div className="lg:col-span-5 bg-base-surface border border-base-border p-6 sm:p-8 rounded-sm space-y-6">
            <div className="border-b border-base-border pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-sm bg-navy-900 text-white flex items-center justify-center font-heading font-bold text-xl">
                  SK
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 leading-tight">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-bold text-gold uppercase tracking-wider mt-0.5">
                    {founder.role}
                  </p>
                </div>
              </div>

              <p className="text-xs text-body-muted leading-relaxed">
                Industrial Safety Specialist, Lead Safety Auditor, and Technical Education Visionary committed to zero-harm operations and workforce empowerment.
              </p>
            </div>

            {/* Verified Academic & Safety Accreditations List */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                Director Qualifications &amp; Licensure:
              </span>
              <ul className="space-y-2">
                {founder.credentials.map((cred, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-xs text-body bg-base p-2.5 border border-base-border rounded-sm"
                  >
                    <Award className="w-4 h-4 text-navy-900 shrink-0" />
                    <span className="font-semibold text-navy-900">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2">
              <Button
                variant="outline"
                onClick={onOpenInquiry}
                className="w-full text-xs uppercase tracking-wider font-semibold py-2.5"
              >
                Request Director Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: Expertise Matrix & Institutional Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Leadership Statement Quote (Flat, Serif, Credible) */}
            <div className="p-6 sm:p-8 bg-base-surface border-l-4 border-navy-900 border-t border-r border-b border-base-border rounded-r-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-body-muted block mb-2">
                Director&apos;s Mandate
              </span>
              <blockquote className="font-heading text-lg sm:text-xl font-medium text-navy-900 italic leading-relaxed">
                &ldquo;{founder.statement}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-base-border/60 flex items-center justify-between text-xs text-body-muted">
                <span className="font-bold text-navy-900">{founder.name}</span>
                <span>Deoria Central Campus, Uttar Pradesh</span>
              </div>
            </div>

            {/* Core Domains of Expertise (Asymmetric 2x2 Grid) */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block">
                Specialized Domains of Expertise:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {founder.expertise.map((exp, i) => (
                  <div
                    key={i}
                    className="p-4 bg-base-surface border border-base-border rounded-sm space-y-1 hover:border-navy-900/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      <h4 className="font-heading text-sm font-bold text-navy-900">
                        {exp}
                      </h4>
                    </div>
                    <p className="text-xs text-body-muted leading-relaxed pl-6">
                      {i === 0 && "Design and execution of comprehensive plant safety health protocols aligned with ISO 45001 standards."}
                      {i === 1 && "Hazard identification, zero-energy isolation mechanisms, and chemical explosion risk mitigations."}
                      {i === 2 && "Curriculum development adhering strictly to DGET, MSDE, and international safety guidelines."}
                      {i === 3 && "Job safety analysis (JSA), hazard operability (HAZOP) audits, and site incident investigations."}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional Quality Assurance Pledge */}
            <div className="p-4 bg-white border border-base-border rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-bold text-navy-900 block">
                  Direct Oversight on Course Certification:
                </span>
                <span className="text-body-muted">
                  Every passing certificate is personally countersigned following strict oral and field drill assessments.
                </span>
              </div>
              <span className="text-[11px] font-mono text-navy-900 font-bold bg-base-subtle px-2.5 py-1 border border-base-border rounded-sm shrink-0">
                DIRECTORATE VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
