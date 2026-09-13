"use client";

import React, { useState } from "react";
import { ITF_DETAILS, COURSES } from "@/lib/content";
import { Button } from "../ui/button";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ShieldAlert } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(COURSES[0].title);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 lg:py-20 bg-base border-b border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-sm bg-navy-900 inline-block"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
              Campus Admissions &amp; Inquiries
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Contact Deoria Central Campus
          </h2>
          <p className="text-sm sm:text-base text-body mt-2 leading-relaxed">
            Visit our training facility in Raghav Nagar, Deoria, or connect with our admissions desk to check upcoming course batches, hostel accommodations, and regulatory qualification details.
          </p>
        </div>

        {/* Asymmetric 2-Column Contact & Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Campus Coordinates & Landmark Directions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Postal Address Card */}
            <div className="bg-base-surface border border-base-border p-6 sm:p-8 rounded-sm space-y-4">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block border-b border-base-border pb-3">
                Central Campus Secretariat:
              </span>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-base font-bold text-navy-900">
                    International Technical Foundation
                  </h3>
                  <p className="text-xs text-body leading-relaxed mt-1">
                    {ITF_DETAILS.address.full}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-semibold text-navy-900 bg-base-subtle px-2.5 py-1 rounded-sm border border-base-border">
                    Landmark: Above Sanjeevini Eye Hospital, Raghav Nagar
                  </span>
                </div>
              </div>

              {/* Prominent Doubt Clearing Card (WFSI ~World Fire Safety Institute) */}
              <div className="bg-white border-2 border-navy-900 p-5 rounded-sm space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-base-border pb-2.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold block">
                      Have Any Doubt? Contact Here
                    </span>
                    <h4 className="font-heading text-lg font-bold text-navy-900">
                      WFSI (~World Fire Safety Institute)
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-semibold shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    <span>Open 24 Hours</span>
                  </div>
                </div>

                <p className="text-xs text-body leading-relaxed">
                  For immediate doubt resolution, syllabus clarifications, batch timings, or enrollment questions, connect directly with our 24/7 Deoria counseling desk.
                </p>

                <div className="flex items-center gap-2 pt-1 font-mono text-base font-bold text-navy-900">
                  <Phone className="w-4 h-4 text-gold" />
                  <a href="tel:+916307490205" className="hover:underline">
                    +91 63074 90205
                  </a>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-colors"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                  <a
                    href="tel:+916307490205"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-sm border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <span>Call Helpline</span>
                  </a>
                </div>

                <div className="text-[10px] text-body-muted flex items-center justify-between pt-1 border-t border-base-border/70">
                  <span>Category: Education &amp; Safety</span>
                  <span>Deoria, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="border-t border-base-border pt-4 space-y-3">
                <div className="flex items-center gap-3 text-xs text-body">
                  <Phone className="w-4 h-4 text-navy-900 shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block">
                      Campus Office Helpline:
                    </span>
                    <a
                      href="tel:+916307490205"
                      className="hover:underline text-body font-semibold text-navy-900"
                    >
                      +91 63074 90205 (24x7)
                    </a>
                    {" / "}
                    <a
                      href={`tel:${ITF_DETAILS.contact.secondaryPhone.replace(/\s+/g, "")}`}
                      className="hover:underline text-body"
                    >
                      {ITF_DETAILS.contact.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-body">
                  <Mail className="w-4 h-4 text-navy-900 shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block">
                      Official Correspondence:
                    </span>
                    <a
                      href={`mailto:${ITF_DETAILS.contact.email}`}
                      className="hover:underline text-body"
                    >
                      {ITF_DETAILS.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-body">
                  <Clock className="w-4 h-4 text-navy-900 shrink-0" />
                  <div>
                    <span className="font-semibold text-navy-900 block">
                      Administrative Hours:
                    </span>
                    <span>{ITF_DETAILS.contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Protocol Notice */}
            <div className="p-4 bg-base-subtle border border-base-border rounded-sm text-xs text-body space-y-1">
              <span className="font-bold text-navy-900 block">
                Certificate Verification Desk:
              </span>
              <p className="text-[11px] text-body-muted leading-relaxed">
                Employers and multinational contractors can verify issued trainee safety credentials by sending the candidate registration number to <strong>verification@itfindia.org.in</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Admission & Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-base-surface border border-base-border p-6 sm:p-8 rounded-sm">
            <h3 className="font-heading text-xl font-bold text-navy-900 mb-1">
              Course Admission Application &amp; Query Desk
            </h3>
            <p className="text-xs text-body-muted mb-6">
              Fill out this official inquiry form to register for upcoming batches or request detailed curriculum documentation.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-3 bg-base-subtle p-6 border border-base-border rounded-sm">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-heading text-lg font-bold text-navy-900">
                  Admission Inquiry Received
                </h4>
                <p className="text-xs text-body max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your inquiry for <strong>{course}</strong> has been logged. Our campus admissions officer will call you at <strong>{phone}</strong> with complete batch schedules and required enrollment documentation.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setNotes("");
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 mb-1">
                      Applicant Full Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full px-3 py-2 text-sm border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-900 mb-1">
                      Primary Mobile Number <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-sm border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1">
                    Select Desired Safety Course <span className="text-red-700">*</span>
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} ({c.code}) — {c.duration}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1">
                    Educational Background / Work Experience / Questions
                  </label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention your highest education (e.g. 10th, 12th, ITI, Diploma, B.Tech) and any questions regarding batch timings or hostel facilities..."
                    className="w-full px-3 py-2 text-sm border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-body-muted">
                    No application fees required for initial inquiry.
                  </span>
                  {/* Warm Gold CTA Button */}
                  <Button type="submit" variant="cta" className="text-xs uppercase tracking-wider font-bold px-7 py-2.5">
                    Submit Admission Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
