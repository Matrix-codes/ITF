"use client";

import React, { useState, useRef } from "react";
import { COURSES, ITF_DETAILS } from "@/lib/content";
import { Button } from "../ui/button";
import { Printer, Download, Award, CheckCircle2, ShieldCheck, Sparkles, RefreshCw, FileText, Upload, User } from "lucide-react";

export interface CertificateData {
  certNumber: string;
  candidateName: string;
  fatherName: string;
  dob: string;
  candidatePhoto?: string;
  courseTitle: string;
  courseCode: string;
  grade: string;
  issueDate: string;
  validTill: string;
  directorName: string;
  trainingCenter: string;
}

const SAMPLE_CERTIFICATES: CertificateData[] = [
  {
    certNumber: "ITF/2026/DEO-WPR-4891",
    candidateName: "Rahul Verma",
    fatherName: "Shri S.K. Verma",
    dob: "14-08-1998",
    candidatePhoto: "",
    courseTitle: "Work Permit Receiver",
    courseCode: "ITF-WPR-01",
    grade: "Grade A - Distinction (89%)",
    issueDate: "12-09-2026",
    validTill: "11-09-2028 (2 Years)",
    directorName: "Er. Sachin Kumar Singh",
    trainingCenter: "Deoria Central Campus (UP)",
  },
  {
    certNumber: "ITF/2026/DEO-OGS-3720",
    candidateName: "Mohammad Irfan",
    fatherName: "Shri Akhtar Ali",
    dob: "03-02-1997",
    candidatePhoto: "",
    courseTitle: "Oil & Gas Safety",
    courseCode: "ITF-OGS-02",
    grade: "Grade A - First Class (86%)",
    issueDate: "08-09-2026",
    validTill: "07-09-2028 (2 Years)",
    directorName: "Er. Sachin Kumar Singh",
    trainingCenter: "Deoria Central Campus (UP)",
  },
  {
    certNumber: "ITF/2026/DEO-FIW-2194",
    candidateName: "Vikas Chandra",
    fatherName: "Shri Harish Chandra",
    dob: "21-11-2000",
    candidatePhoto: "",
    courseTitle: "Fire Watcher",
    courseCode: "ITF-FIW-03",
    grade: "Grade A+ - Honors (94%)",
    issueDate: "02-09-2026",
    validTill: "01-09-2028 (2 Years)",
    directorName: "Er. Sachin Kumar Singh",
    trainingCenter: "Deoria Central Campus (UP)",
  },
];

export function CertificateGenerator() {
  const [cert, setCert] = useState<CertificateData>(SAMPLE_CERTIFICATES[0]);
  const [savedCertificates, setSavedCertificates] = useState<CertificateData[]>(SAMPLE_CERTIFICATES);
  const [notification, setNotification] = useState("");
  const certRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCert((prev) => ({
            ...prev,
            candidatePhoto: event.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCourseChange = (courseTitle: string) => {
    const found = COURSES.find((c) => c.title === courseTitle);
    setCert((prev) => ({
      ...prev,
      courseTitle,
      courseCode: found ? found.code : "ITF-GEN-01",
    }));
  };

  const handleGenerateNew = (e: React.FormEvent) => {
    e.preventDefault();
    const existingIndex = savedCertificates.findIndex((c) => c.certNumber === cert.certNumber);
    if (existingIndex >= 0) {
      const updated = [...savedCertificates];
      updated[existingIndex] = cert;
      setSavedCertificates(updated);
    } else {
      setSavedCertificates([cert, ...savedCertificates]);
    }
    setNotification(`Certificate ${cert.certNumber} generated and verified in institutional registry!`);
    setTimeout(() => setNotification(""), 3500);
  };

  // Direct print via browser print dialog
  const handlePrint = () => {
    window.print();
  };

  // Dedicated single-page landscape isolated print window
  const handleDedicatedPrintWindow = () => {
    if (!certRef.current) {
      window.print();
      return;
    }

    const printWin = window.open("", "_blank", "width=1200,height=850");
    if (!printWin) {
      window.print();
      return;
    }

    const htmlContent = certRef.current.innerHTML;

    printWin.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>ITF Certificate - ${cert.candidateName} (${cert.certNumber})</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  navy: {
                    900: '#0F2A52',
                    950: '#07162C',
                  },
                  gold: {
                    DEFAULT: '#E8962B',
                    light: '#FFF5E6',
                  },
                  base: {
                    surface: '#FFFFFF',
                    subtle: '#F6F5EE',
                    border: '#E2E0D5',
                  },
                  body: {
                    DEFAULT: '#5B5A54',
                    muted: '#85837A',
                  }
                },
                backgroundColor: {
                  base: '#FFFEFB',
                },
                fontFamily: {
                  heading: ['Lora', 'Georgia', 'serif'],
                  body: ['IBM Plex Sans', 'sans-serif'],
                }
              }
            }
          }
        </script>
        <style>
          @page {
            size: A4 landscape;
            margin: 0mm;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 297mm;
            height: 210mm;
            max-width: 297mm;
            max-height: 210mm;
            overflow: hidden;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'IBM Plex Sans', sans-serif;
          }
          .certificate-canvas {
            width: 280mm !important;
            max-width: 280mm !important;
            height: 192mm !important;
            max-height: 192mm !important;
            margin: 0 auto !important;
            padding: 4mm 8mm !important;
            border: 3.5px solid #0F2A52 !important;
            background: #ffffff !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
        </style>
      </head>
      <body>
        <div class="certificate-canvas">
          ${htmlContent}
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.focus();
              window.print();
            }, 600);
          };
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  };

  const generateRandomReg = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    const code = cert.courseCode.split("-")[1] || "WPR";
    setCert((prev) => ({
      ...prev,
      certNumber: `ITF/2026/DEO-${code}-${rand}`,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="no-print bg-base-surface border border-base-border p-6 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-xs uppercase font-bold tracking-wider text-navy-900">
              Accredited Credentialing Engine
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Official ITF Safety Certificate Generator
          </h2>
          <p className="text-xs text-body-muted mt-1">
            Issue, countersign, and print verified technical qualification certificates formatted strictly for <strong>1-Page A4 Landscape</strong>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="cta"
            onClick={handleDedicatedPrintWindow}
            className="text-xs uppercase tracking-wider font-bold px-5 py-2.5 flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print A4 Landscape (1-Page)</span>
          </Button>

          <Button
            variant="outline"
            onClick={handlePrint}
            className="text-xs uppercase tracking-wider font-bold px-4 py-2.5 flex items-center gap-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
          >
            <Download className="w-4 h-4" />
            <span>Direct Browser Print</span>
          </Button>
        </div>
      </div>

      {notification && (
        <div className="no-print p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-sm font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Two Column Layout: Generator Controls on Left, Live Certificate Preview on Right */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Editor Form & Records (4 Cols) */}
        <div className="no-print xl:col-span-4 space-y-6">
          <form
            onSubmit={handleGenerateNew}
            className="bg-base-surface border border-base-border p-5 rounded-sm space-y-4"
          >
            <div className="flex items-center justify-between border-b border-base-border pb-2">
              <h3 className="font-heading text-sm font-bold text-navy-900">
                Candidate Certificate Parameters
              </h3>
              <button
                type="button"
                onClick={generateRandomReg}
                className="text-[11px] font-mono font-bold text-navy-900 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3 text-gold" />
                <span>New Reg ID</span>
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy-900 mb-1">
                Certificate / Registration ID
              </label>
              <input
                type="text"
                required
                value={cert.certNumber}
                onChange={(e) => setCert({ ...cert, certNumber: e.target.value })}
                className="w-full px-3 py-1.5 text-xs font-mono font-bold border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy-900 mb-1">
                Candidate Full Name
              </label>
              <input
                type="text"
                required
                value={cert.candidateName}
                onChange={(e) => setCert({ ...cert, candidateName: e.target.value })}
                className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-navy-900 mb-1">
                  Father&apos;s Name
                </label>
                <input
                  type="text"
                  value={cert.fatherName}
                  onChange={(e) => setCert({ ...cert, fatherName: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-navy-900 mb-1">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={cert.dob}
                  onChange={(e) => setCert({ ...cert, dob: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Candidate Passport Photo Upload Field */}
            <div className="border-t border-b border-base-border py-2.5 my-1">
              <label className="block text-[11px] font-bold text-navy-900 mb-1 flex items-center justify-between">
                <span>Candidate Passport Photo Box</span>
                <span className="text-[10px] text-body-muted font-normal">Standard 3.5 × 4.5 cm</span>
              </label>
              <div className="flex items-center gap-3">
                <div className="w-12 h-15 border-2 border-navy-900 bg-white rounded-xs overflow-hidden shrink-0 shadow-xs flex items-center justify-center">
                  {cert.candidatePhoto ? (
                    <img
                      src={cert.candidatePhoto}
                      alt="Passport Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[8px] font-mono uppercase text-navy-900/40 text-center font-bold leading-none">
                      EMPTY<br />BOX
                    </span>
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <input
                    type="file"
                    id="candidate-photo-picker"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="candidate-photo-picker"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-navy-900 text-white rounded cursor-pointer hover:bg-navy-800 transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{cert.candidatePhoto ? "Change Photo" : "Upload Photo (Optional)"}</span>
                    </label>

                    {cert.candidatePhoto && (
                      <button
                        type="button"
                        onClick={() => setCert((prev) => ({ ...prev, candidatePhoto: "" }))}
                        className="text-[10px] text-rose-600 hover:text-rose-800 font-semibold underline"
                      >
                        Make Empty
                      </button>
                    )}
                  </div>
                  <p className="text-[9.5px] text-body-muted">
                    Leave empty for physical photo affixing, or upload candidate picture.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy-900 mb-1">
                Certified Safety Course
              </label>
              <select
                value={cert.courseTitle}
                onChange={(e) => handleCourseChange(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.code})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-navy-900 mb-1">
                  Grade / Evaluation
                </label>
                <input
                  type="text"
                  value={cert.grade}
                  onChange={(e) => setCert({ ...cert, grade: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-navy-900 mb-1">
                  Issue Date
                </label>
                <input
                  type="text"
                  value={cert.issueDate}
                  onChange={(e) => setCert({ ...cert, issueDate: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-navy-900 mb-1">
                Validity Duration
              </label>
              <input
                type="text"
                value={cert.validTill}
                onChange={(e) => setCert({ ...cert, validTill: e.target.value })}
                className="w-full px-3 py-1.5 text-xs border border-base-border rounded bg-base text-navy-900 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full text-xs font-bold py-2.5">
                Save &amp; Update Registry
              </Button>
            </div>
          </form>

          {/* Quick Load Sample Certificates */}
          <div className="bg-base-surface border border-base-border p-4 rounded-sm space-y-3">
            <span className="text-[11px] uppercase font-bold text-navy-900 block border-b border-base-border pb-1.5">
              Recently Issued Certificates:
            </span>
            <div className="space-y-2">
              {savedCertificates.map((c) => (
                <button
                  key={c.certNumber}
                  onClick={() => setCert(c)}
                  className={`w-full text-left p-2.5 rounded-sm border transition-colors flex items-center justify-between text-xs ${
                    c.certNumber === cert.certNumber
                      ? "border-navy-900 bg-base-subtle font-bold text-navy-900"
                      : "border-base-border hover:bg-base text-body"
                  }`}
                >
                  <div>
                    <span className="font-bold text-navy-900 block">{c.candidateName}</span>
                    <span className="text-[10px] text-body-muted">{c.courseTitle}</span>
                  </div>
                  <span className="font-mono text-[10px] text-body-muted">{c.certNumber.split("-")[2] || c.certNumber}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Official A4 Certificate Canvas (8 Cols) */}
        <div className="xl:col-span-8 overflow-x-auto pb-4">
          <div className="no-print flex items-center justify-between pb-2 text-xs font-semibold text-body-muted">
            <span className="flex items-center gap-1.5 text-navy-900 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Official A4 Landscape Format (Single Page Verified)</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
                Single-Page Guaranteed
              </span>
              <span>297mm × 210mm</span>
            </div>
          </div>

          <div
            ref={certRef}
            className="min-w-[740px] max-w-[900px] mx-auto bg-white border-[3.5px] border-navy-900 p-3 sm:p-4 relative shadow-lg certificate-print-area"
          >
            {/* Security Outer Gold Inset Border */}
            <div className="border border-gold p-3 sm:p-3.5 relative flex flex-col justify-between h-full bg-white">
              {/* Corner Security Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-navy-900"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-navy-900"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-navy-900"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-navy-900"></div>

              {/* Certificate Top Header */}
              <div className="flex items-center justify-between gap-3 border-b border-navy-900/30 pb-1.5">
                {/* Left: Official ITF Logo Emblem */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                  <img
                    src="/images/itf_logo.jpg"
                    alt="International Technical Foundation (ITF)"
                    width={60}
                    height={60}
                    style={{ maxWidth: "60px", maxHeight: "60px", objectFit: "contain" }}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Center: Institutional Title & Accreditations */}
                <div className="text-center flex-1 space-y-0.5">
                  <span className="text-[8px] sm:text-[8.5px] uppercase font-bold tracking-widest text-body-muted block leading-tight">
                    Government-Affiliated Industrial Safety Training Institute
                  </span>
                  <h1 className="font-heading text-lg sm:text-xl font-black text-navy-900 tracking-tight leading-none">
                    INTERNATIONAL TECHNICAL FOUNDATION
                  </h1>
                  <p className="text-[8px] sm:text-[8.5px] text-body font-semibold tracking-wide leading-tight">
                    ISO 9001:2015 &amp; ISO 29990:2010 Certified • Ministry of Corporate Affairs, MSDE &amp; MSME Registered
                  </p>
                  <p className="text-[7.5px] sm:text-[8px] text-body-muted leading-tight">
                    Central Campus: 1st Floor, Sanjeevini Eye Hospital, Raghav Nagar, Deoria, UP – 274001
                  </p>
                </div>

                {/* Right: Security QR Code Stamp */}
                <div className="w-16 flex flex-col items-center justify-center shrink-0 text-center">
                  <div className="w-10 h-10 border border-navy-900 p-0.5 bg-white">
                    <div className="w-full h-full bg-navy-900 flex items-center justify-center text-white text-[6.5px] font-mono text-center leading-tight">
                      QR VERIFY<br />{cert.certNumber.slice(-4)}
                    </div>
                  </div>
                  <span className="text-[6px] font-mono text-body-muted mt-0.5">
                    VERIFIED SECURE
                  </span>
                </div>
              </div>

              {/* Certificate Body Title */}
              <div className="text-center py-1 space-y-0.5">
                <span className="font-mono text-[9px] font-bold text-gold tracking-widest uppercase block">
                  REGISTRATION NO: {cert.certNumber}
                </span>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-navy-900 uppercase tracking-wide leading-tight">
                  Certificate of Technical Competency
                </h2>
                <p className="text-[9.5px] text-body italic font-serif leading-none">
                  This is to officially certify that
                </p>
              </div>

              {/* Candidate Name Presentation & Qualification Statement with Passport Photo */}
              <div className="flex items-center justify-between gap-4 px-2 py-0.5">
                {/* Left Visual Balancing Placeholder */}
                <div className="w-16 hidden sm:block shrink-0 opacity-0 pointer-events-none"></div>

                {/* Center: Candidate Info & Qualification Statement */}
                <div className="flex-1 text-center space-y-0.5">
                  <div>
                    <p className="font-heading text-xl sm:text-2xl font-black text-navy-900 border-b-2 border-navy-900 inline-block px-6 pb-0.5 tracking-tight leading-none">
                      {cert.candidateName}
                    </p>
                    <p className="text-[10px] text-body mt-0.5 font-medium">
                      Son / Daughter of <strong>{cert.fatherName}</strong> • Date of Birth: <strong>{cert.dob}</strong>
                    </p>
                  </div>

                  <p className="text-[9px] sm:text-[9.5px] text-body leading-snug max-w-lg mx-auto">
                    has successfully undergone intensive theoretical curriculum, laboratory hazard verification, and live practical training field drill assessment and is hereby awarded qualification as:
                  </p>

                  <div className="py-0.5">
                    <span
                      style={{
                        color: "#0F2A52",
                        backgroundColor: "#F3F2EB",
                        borderColor: "#0F2A52",
                      }}
                      className="font-heading text-xs sm:text-sm font-black px-4 py-0.5 border-2 inline-block rounded-sm tracking-wide text-navy-900 shadow-xs"
                    >
                      {cert.courseTitle} ({cert.courseCode})
                    </span>
                  </div>

                  <p className="text-[9px] sm:text-[9.5px] text-body">
                    Performance Evaluation: <strong className="text-navy-900">{cert.grade}</strong>
                  </p>
                  <p className="text-[7.5px] sm:text-[8px] text-body-muted italic leading-tight max-w-lg mx-auto">
                    Evaluated on Statutory Hot/Cold Work Verification, Atmospheric Gas Limits, LOTO Zero-Energy Isolations, and Plant Emergency Responses.
                  </p>
                </div>

                {/* Right: Candidate Official Passport Photo Box */}
                <div className="w-16 sm:w-18 shrink-0 flex flex-col items-center justify-center">
                  <div className="w-14 sm:w-16 h-18 sm:h-20 border-2 border-navy-900 bg-white shadow-xs rounded-xs relative overflow-hidden flex items-center justify-center">
                    {cert.candidatePhoto ? (
                      <img
                        src={cert.candidatePhoto}
                        alt={`${cert.candidateName} Passport Photo`}
                        width={64}
                        height={80}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-[6px] font-mono font-bold uppercase tracking-wider text-navy-900 mt-0.5 text-center leading-tight">
                    PASSPORT PHOTO
                  </span>
                </div>
              </div>

              {/* Dates & Validity Strip */}
              <div className="grid grid-cols-3 gap-2 border-t border-b border-base-border py-1 my-1 text-center text-[10px]">
                <div>
                  <span className="text-[8px] uppercase font-bold text-body-muted block">
                    Issue Date
                  </span>
                  <span className="font-semibold text-navy-900">{cert.issueDate}</span>
                </div>
                <div>
                  <span className="text-[8px] uppercase font-bold text-body-muted block">
                    Training Center
                  </span>
                  <span className="font-semibold text-navy-900">{cert.trainingCenter}</span>
                </div>
                <div>
                  <span className="text-[8px] uppercase font-bold text-body-muted block">
                    Certificate Validity
                  </span>
                  <span className="font-semibold text-navy-900">{cert.validTill}</span>
                </div>
              </div>

              {/* Signatures & Seal Section */}
              <div className="grid grid-cols-3 gap-3 pt-1 items-end">
                {/* Left Signature: Controller of Examinations */}
                <div className="text-center space-y-0.5">
                  <div className="font-serif italic text-[11px] text-navy-900 font-bold border-b border-navy-900 pb-0.5 mx-3">
                    K.P. Srivastava
                  </div>
                  <span className="text-[8px] uppercase font-bold text-navy-900 block leading-tight">
                    Controller of Examinations
                  </span>
                  <span className="text-[7px] text-body-muted block leading-tight">
                    Technical Assessment Board
                  </span>
                </div>

                {/* Center: Official Gold Seal */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full border-2 border-gold bg-gold-light flex flex-col items-center justify-center text-navy-900 p-0.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-navy-900" />
                    <span className="text-[5.5px] font-bold uppercase tracking-widest mt-0.5">
                      SEAL OF ITF
                    </span>
                  </div>
                </div>

                {/* Right Signature: Director */}
                <div className="text-center space-y-0.5">
                  <div className="font-serif italic text-[11px] text-navy-900 font-bold border-b border-navy-900 pb-0.5 mx-3">
                    Er. Sachin Kumar Singh
                  </div>
                  <span className="text-[8px] uppercase font-bold text-navy-900 block leading-tight">
                    Founder &amp; Director
                  </span>
                  <span className="text-[7px] text-body-muted block leading-tight">
                    MBA, ADIAS, NEBOSH IGC
                  </span>
                </div>
              </div>

              {/* Footer Verification Notice */}
              <div className="mt-1 pt-1 border-t border-base-border/70 text-[7.5px] text-center text-body-muted flex items-center justify-between">
                <span>International Technical Foundation (ITF) • Central Campus Deoria, UP (274001)</span>
                <span>Verification: verification@itfindia.org.in • +91 63074 90205</span>
                <span>Serial: {cert.certNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
