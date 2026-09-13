"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { COURSES, ITF_DETAILS } from "@/lib/content";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export function InquiryModal({ isOpen, onClose, defaultCourseId }: InquiryModalProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>(
    defaultCourseId || COURSES[0].id
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync defaultCourseId when it changes
  React.useEffect(() => {
    if (defaultCourseId) {
      setSelectedCourse(defaultCourseId);
    }
  }, [defaultCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-none">
      <div className="relative w-full max-w-lg bg-white border border-base-border shadow-xl rounded-md overflow-hidden animate-in fade-in duration-200">
        {/* Modal Header */}
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <h3 className="font-heading text-lg font-bold text-white tracking-wide">
              Official Admission & Course Inquiry
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close inquiry dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 bg-base">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-800">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-xl font-bold text-navy-900">
                Inquiry Submitted Successfully
              </h4>
              <p className="text-sm text-body max-w-sm mx-auto">
                Thank you, <strong>{fullName}</strong>. An ITF Admissions Officer from our Deoria Central Campus will contact you at <strong>{phone}</strong> within 24 hours with syllabus details, batch dates, and fee schedules.
              </p>
              <div className="pt-4">
                <Button variant="cta" onClick={handleResetAndClose}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick Doubt Help Notice */}
              <div className="p-3 bg-white border border-navy-900 rounded-sm flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <div>
                    <span className="font-bold text-navy-900 block">
                      Have any immediate doubt?
                    </span>
                    <span className="text-[11px] text-body-muted">
                      WFSI 24x7 Helpline: <strong>+91 63074 90205</strong>
                    </span>
                  </div>
                </div>
                <a
                  href="https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-sm bg-emerald-700 text-white text-[11px] font-semibold hover:bg-emerald-800 transition-colors shrink-0"
                >
                  WhatsApp Now
                </a>
              </div>

              <p className="text-xs text-body-muted">
                Submit your details to receive official course brochures, fee structures, and batch eligibility criteria directly from the ITF Directorate.
              </p>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Full Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1">
                    Contact Number <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="candidate@example.com"
                    className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Selected Safety Course <span className="text-red-700">*</span>
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none"
                >
                  {COURSES.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1">
                  Message or Specific Question (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Inquire about hostel facility, batch timings, Gulf placement verification..."
                  className="w-full px-3 py-2 text-sm border border-base-border rounded bg-white text-navy-900 focus:border-navy-900 focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-base-border">
                <div className="text-[11px] text-body-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold" />
                  Deoria Campus, UP
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="secondary" onClick={handleResetAndClose}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="cta">
                    Submit Inquiry
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
