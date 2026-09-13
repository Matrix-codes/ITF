"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CertificateGenerator } from "@/components/admin/CertificateGenerator";
import { ITF_DETAILS, COURSES } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  FileCheck2,
  Calendar,
  PhoneCall,
  ArrowLeft,
  Shield,
  Search,
  CheckCircle,
  Clock,
  Download,
  Printer,
  ChevronRight,
} from "lucide-react";

interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  course: string;
  date: string;
  status: "New" | "Contacted" | "Enrolled";
}

const SAMPLE_INQUIRIES: InquiryRecord[] = [
  {
    id: "INQ-9901",
    name: "Rahul Verma",
    phone: "+91 98765 43210",
    course: "Work Permit Receiver (WPR)",
    date: "13-09-2026 14:20",
    status: "Enrolled",
  },
  {
    id: "INQ-9902",
    name: "Mohammad Irfan",
    phone: "+91 97654 32109",
    course: "Oil & Gas Safety",
    date: "13-09-2026 11:45",
    status: "Contacted",
  },
  {
    id: "INQ-9903",
    name: "Vikas Chandra",
    phone: "+91 96543 21098",
    course: "Fire Watcher",
    date: "12-09-2026 16:10",
    status: "Enrolled",
  },
  {
    id: "INQ-9904",
    name: "Deepak Yadav",
    phone: "+91 95432 10987",
    course: "Flagman (Traffic Marshal)",
    date: "12-09-2026 10:30",
    status: "New",
  },
  {
    id: "INQ-9905",
    name: "Sunil Gond",
    phone: "+91 94321 09876",
    course: "Hole Watcher (Confined Space)",
    date: "11-09-2026 15:50",
    status: "Contacted",
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"certificates" | "inquiries" | "batches">("certificates");
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(SAMPLE_INQUIRIES);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInquiries = inquiries.filter(
    (inq) =>
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.phone.includes(searchTerm) ||
      inq.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: string, newStatus: "New" | "Contacted" | "Enrolled") => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  return (
    <div className="min-h-screen bg-base text-body font-body flex flex-col">
      {/* Top Directorate Admin Bar */}
      <header className="no-print bg-navy-950 text-white border-b border-navy-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-white/70 hover:text-white flex items-center gap-1.5 transition-colors border border-navy-800 px-2.5 py-1.5 rounded-sm hover:bg-navy-900"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Site</span>
            </Link>

            <div className="h-4 w-px bg-navy-800 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-sm p-1 flex items-center justify-center shrink-0">
                <img src="/images/itf_logo.jpg" alt="ITF Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-white tracking-tight block leading-tight">
                  ITF Directorate Administration
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider block">
                  Er. Sachin Kumar Singh (Director) • Deoria Campus
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-white/80 bg-navy-900 px-3 py-1.5 rounded-sm border border-navy-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 Helpline: +91 63074 90205</span>
            </div>
            <Badge variant="gold" className="text-[10px] uppercase font-mono">
              Authorized Master Role
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 space-y-8">
        {/* KPI Dashboard Metrics */}
        <div className="no-print grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-base-surface border border-base-border p-4 rounded-sm">
            <div className="flex items-center justify-between text-body-muted mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider">Certificates Issued</span>
              <Award className="w-4 h-4 text-gold" />
            </div>
            <p className="font-heading text-2xl font-bold text-navy-900">384</p>
            <p className="text-[10px] text-body-muted mt-1">+12 Issued This Week</p>
          </div>

          <div className="bg-base-surface border border-base-border p-4 rounded-sm">
            <div className="flex items-center justify-between text-body-muted mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider">Course Inquiries</span>
              <Users className="w-4 h-4 text-navy-900" />
            </div>
            <p className="font-heading text-2xl font-bold text-navy-900">{inquiries.length + 137}</p>
            <p className="text-[10px] text-emerald-700 mt-1 font-semibold">5 New Today</p>
          </div>

          <div className="bg-base-surface border border-base-border p-4 rounded-sm">
            <div className="flex items-center justify-between text-body-muted mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider">Active Training Batches</span>
              <Calendar className="w-4 h-4 text-gold" />
            </div>
            <p className="font-heading text-2xl font-bold text-navy-900">6 Batches</p>
            <p className="text-[10px] text-body-muted mt-1">WPR, Oil &amp; Gas, Fire Watch</p>
          </div>

          <div className="bg-base-surface border border-base-border p-4 rounded-sm">
            <div className="flex items-center justify-between text-body-muted mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider">Accredited Status</span>
              <Shield className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="font-heading text-base font-bold text-navy-900">ISO 9001:2015</p>
            <p className="text-[10px] text-body-muted mt-1">10 Govt. Approvals Active</p>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="no-print border-b border-base-border flex items-center gap-3">
          <button
            onClick={() => setActiveTab("certificates")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "certificates"
                ? "border-navy-900 text-navy-900"
                : "border-transparent text-body-muted hover:text-navy-900"
            }`}
          >
            <Award className="w-4 h-4 text-gold" />
            <span>Certificate Generator &amp; Registry</span>
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "inquiries"
                ? "border-navy-900 text-navy-900"
                : "border-transparent text-body-muted hover:text-navy-900"
            }`}
          >
            <Users className="w-4 h-4 text-navy-900" />
            <span>Admissions &amp; Candidate Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("batches")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === "batches"
                ? "border-navy-900 text-navy-900"
                : "border-transparent text-body-muted hover:text-navy-900"
            }`}
          >
            <Calendar className="w-4 h-4 text-navy-900" />
            <span>Course Batches &amp; Timings</span>
          </button>
        </div>

        {/* TAB 1: CERTIFICATE GENERATOR */}
        {activeTab === "certificates" && (
          <div className="animate-in fade-in duration-200">
            <CertificateGenerator />
          </div>
        )}

        {/* TAB 2: ADMISSIONS & INQUIRIES */}
        {activeTab === "inquiries" && (
          <div className="no-print space-y-6 animate-in fade-in duration-200">
            <div className="bg-base-surface border border-base-border p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-body-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search applicant name, phone, or course..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div className="text-xs text-body-muted">
                Showing {filteredInquiries.length} verified candidate inquiries
              </div>
            </div>

            <div className="bg-base-surface border border-base-border rounded-sm overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-base-subtle border-b border-base-border text-[11px] font-bold uppercase tracking-wider text-navy-900">
                    <th className="p-3.5">ID</th>
                    <th className="p-3.5">Applicant Name</th>
                    <th className="p-3.5">Contact Phone</th>
                    <th className="p-3.5">Course Inquired</th>
                    <th className="p-3.5">Timestamp</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-base-border">
                  {filteredInquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-base/60 transition-colors">
                      <td className="p-3.5 font-mono font-semibold text-navy-900">{inq.id}</td>
                      <td className="p-3.5 font-bold text-navy-900">{inq.name}</td>
                      <td className="p-3.5 font-mono">
                        <a href={`tel:${inq.phone.replace(/\s+/g, "")}`} className="hover:underline">
                          {inq.phone}
                        </a>
                      </td>
                      <td className="p-3.5 font-medium">{inq.course}</td>
                      <td className="p-3.5 text-body-muted text-[11px]">{inq.date}</td>
                      <td className="p-3.5">
                        <span
                          className={`px-2 py-0.5 rounded-sm text-[10px] font-bold ${
                            inq.status === "Enrolled"
                              ? "bg-emerald-100 text-emerald-800"
                              : inq.status === "Contacted"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right space-x-2">
                        <select
                          value={inq.status}
                          onChange={(e) =>
                            handleStatusChange(inq.id, e.target.value as "New" | "Contacted" | "Enrolled")
                          }
                          className="px-2 py-1 text-[11px] border border-base-border rounded bg-white text-navy-900"
                        >
                          <option value="New">Mark New</option>
                          <option value="Contacted">Mark Contacted</option>
                          <option value="Enrolled">Mark Enrolled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: BATCH MANAGEMENT */}
        {activeTab === "batches" && (
          <div className="no-print space-y-4 animate-in fade-in duration-200">
            <div className="bg-base-surface border border-base-border p-6 rounded-sm space-y-4">
              <h3 className="font-heading text-lg font-bold text-navy-900">
                Active Training Batches — Deoria Central Campus
              </h3>
              <p className="text-xs text-body leading-relaxed">
                Practical field yard sessions and theoretical regulatory batches are coordinated in morning and afternoon cohorts with strict candidate attendance and safety drill logging.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {COURSES.slice(0, 3).map((c, i) => (
                  <div key={c.id} className="border border-base-border p-4 bg-base rounded-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-navy-900 text-white rounded-sm">
                        {c.code}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-semibold">Active Batch #{i + 1}</span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-navy-900">{c.title}</h4>
                    <p className="text-[11px] text-body-muted">Duration: {c.duration}</p>
                    <div className="pt-2 border-t border-base-border text-[11px] text-body-muted flex justify-between">
                      <span>Seats: 24 / 25</span>
                      <span>Field Yard: Bay 2</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Admin Footer */}
      <footer className="no-print bg-navy-950 text-white border-t border-navy-900 py-4 mt-12 text-center text-xs text-white/50">
        International Technical Foundation (ITF) Directorate Panel • Authorized Personnel Access Only • Deoria Central Campus (274001)
      </footer>
    </div>
  );
}
