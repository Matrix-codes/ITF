import React from "react";
import { APPROVALS } from "@/lib/content";
import { Badge } from "../ui/badge";
import { Check, Shield } from "lucide-react";

export function ApprovalsBand() {
  return (
    <section id="approvals" className="py-12 lg:py-16 bg-base-subtle border-b border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-base-border">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-navy-900 inline-block"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                Institutional Mandate &amp; Governance
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              Official Approvals, Affiliations &amp; Statutory Certifications
            </h2>
            <p className="text-sm text-body leading-relaxed">
              ITF operates under authorized national regulatory charters and international accreditation frameworks, ensuring valid, industry-recognized HSE qualifications across India and overseas industrial sectors.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white border border-base-border text-xs font-semibold text-navy-900">
              <Shield className="w-3.5 h-3.5 text-gold" />
              <span>10 Verified Statutory Registrations</span>
            </div>
          </div>
        </div>

        {/* Structured Institutional Registry Grid (Asymmetric & Authoritative) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {APPROVALS.map((item, index) => (
            <div
              key={item.id}
              className="bg-base-surface border border-base-border p-5 rounded-sm flex flex-col justify-between transition-colors hover:border-navy-900/40"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-body-muted">
                    REG #{String(index + 1).padStart(2, "0")}
                  </span>
                  <Badge
                    variant={item.category === "Government" ? "navy" : "default"}
                    className="text-[10px] font-medium"
                  >
                    {item.category}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-navy-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold text-body-muted mt-0.5">
                    {item.authority}
                  </p>
                </div>

                <p className="text-xs text-body leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-base-border/60 flex items-center gap-1.5 text-[11px] font-medium text-navy-900">
                <Check className="w-3 h-3 text-gold" />
                <span>Statutory Compliance Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statutory Notice */}
        <div className="mt-8 p-4 rounded-sm bg-white border border-base-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-body">
          <div className="flex items-center gap-2">
            <span className="font-bold text-navy-900">Compliance Transparency:</span>
            <span>All registration charters and ISO certificates are available for verification at the Deoria Campus administrative office.</span>
          </div>
          <span className="text-body-muted shrink-0 text-[11px]">
            Audited &amp; ISO 9001:2015 / 29990:2010 Aligned
          </span>
        </div>
      </div>
    </section>
  );
}
