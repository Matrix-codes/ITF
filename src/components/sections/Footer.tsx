import React from "react";
import { Logo } from "../common/Logo";
import { ITF_DETAILS, APPROVALS, COURSES } from "@/lib/content";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-900">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Mission Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-3 rounded-sm inline-block border border-navy-800">
              <Logo variant="full" size="md" />
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              International Technical Foundation (ITF) is an accredited industrial safety institute dedicated to practical technical skill qualification, zero-harm training methodologies, and globally accepted HSE workplace compliance.
            </p>

            <div className="pt-2 text-xs text-white/70 space-y-1">
              <p className="font-semibold text-white">
                {ITF_DETAILS.tagline}
              </p>
              <p className="text-[11px] text-white/60">
                Recognized by Ministry of Corporate Affairs, MSDE, MSME &amp; ISO 9001:2015 Certified.
              </p>
            </div>
          </div>

          {/* Quick Curriculum Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white border-b border-navy-800 pb-1.5 block">
              Skill Safety Courses
            </span>
            <ul className="space-y-2 text-xs text-white/80">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="hover:text-gold transition-colors flex items-center justify-between"
                  >
                    <span>{course.title}</span>
                    <span className="text-[10px] font-mono text-white/40">{course.code}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Links & Quick Jumps (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white border-b border-navy-800 pb-1.5 block">
              Governance
            </span>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#approvals" className="hover:text-gold transition-colors">
                  10 Govt. Approvals
                </a>
              </li>
              <li>
                <a href="#director" className="hover:text-gold transition-colors">
                  Director Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Campus Admissions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Trainee Verification
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Helpline Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white border-b border-navy-800 pb-1.5 block">
              Campus Contact
            </span>
            <div className="space-y-2 text-xs text-white/80">
              <p className="leading-snug text-white/90">
                1st floor, Sanjeevini Eye Hospital, Raghav Nagar, Deoria, UP 274001
              </p>
              <div className="pt-1">
                <span className="text-[10px] uppercase font-bold text-gold block">
                  24x7 Doubt &amp; Admissions Helpline:
                </span>
                <a
                  href="tel:+916307490205"
                  className="text-white font-mono font-bold hover:underline block"
                >
                  +91 63074 90205
                </a>
                <a
                  href="https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-emerald-400 hover:underline block mt-0.5"
                >
                  WhatsApp Business (WFSI)
                </a>
              </div>
              <p className="text-white/60 pt-1 text-[11px]">
                Email: {ITF_DETAILS.contact.email}
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Accreditation Summary Strip */}
        <div className="mt-12 pt-8 border-t border-navy-900 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 text-[11px] text-white/60">
          <div>• Ministry of Corporate Affairs</div>
          <div>• MSDE &amp; MSMED Registered</div>
          <div>• MHRD Dept. of Higher Ed.</div>
          <div>• ISO 9001:2015 / 29990:2010</div>
          <div>• NCS (Labour &amp; Employment)</div>
          <div>• IAO, USA Accredited</div>
          <div>• Quality Council of India</div>
          <div>• NITI Aayog Darpan</div>
          <div>• 12A / 80G Statutory Exemption</div>
          <div>• Govt. e-Anudan Portal Verified</div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-navy-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; 2024 International Technical Foundation (ITF). All statutory rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#courses" className="hover:text-white/80 transition-colors">Curriculum Terms</a>
            <a href="#approvals" className="hover:text-white/80 transition-colors">Accreditation Policy</a>
            <a href="#contact" className="hover:text-white/80 transition-colors">Privacy &amp; Data</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
