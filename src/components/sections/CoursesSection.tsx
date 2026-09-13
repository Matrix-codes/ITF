"use client";

import React, { useState } from "react";
import { COURSES, Course } from "@/lib/content";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Clock, Award, CheckCircle2, ChevronRight, FileText, Factory } from "lucide-react";

interface CoursesSectionProps {
  onOpenInquiry: (courseId?: string) => void;
}

export function CoursesSection({ onOpenInquiry }: CoursesSectionProps) {
  const [activeCourseId, setActiveCourseId] = useState<string>(COURSES[0].id);

  const selectedCourse = COURSES.find((c) => c.id === activeCourseId) || COURSES[0];

  return (
    <section id="courses" className="py-14 lg:py-20 bg-base border-b border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-sm bg-navy-900 inline-block"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
              Technical Skill Development
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Short-Term Industrial Safety Competency Courses
          </h2>
          <p className="text-sm sm:text-base text-body mt-2 leading-relaxed">
            Practical, field-verified training tracks designed to meet statutory refinery, infrastructure, and heavy plant compliance standards. Each course combines regulatory theory with practical hands-on field drill evaluation.
          </p>
        </div>

        {/* Asymmetric Master-Detail Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Course Selector Navigation List (4 Cols) */}
          <div className="lg:col-span-4 space-y-2 border border-base-border bg-base-surface p-2 rounded-sm">
            <div className="p-3 border-b border-base-border">
              <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                Select Curriculum Track ({COURSES.length} Modules)
              </span>
            </div>

            <div className="space-y-1">
              {COURSES.map((course) => {
                const isActive = course.id === activeCourseId;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActiveCourseId(course.id)}
                    className={`w-full text-left p-3.5 rounded-sm transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-navy-900 text-white"
                        : "bg-base hover:bg-base-subtle text-navy-900 border border-transparent hover:border-base-border"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "bg-base-subtle text-body-muted border border-base-border"
                          }`}
                        >
                          {course.code}
                        </span>
                        <span
                          className={`text-[11px] font-semibold ${
                            isActive ? "text-gold" : "text-body-muted"
                          }`}
                        >
                          {course.duration.split(" ")[0]} {course.duration.split(" ")[1]}
                        </span>
                      </div>
                      <h3
                        className={`font-heading text-sm font-bold leading-tight ${
                          isActive ? "text-white" : "text-navy-900 group-hover:text-navy-950"
                        }`}
                      >
                        {course.title}
                      </h3>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-gold translate-x-1" : "text-body-muted"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick Campus Lab Note */}
            <div className="p-3 mt-4 bg-base-subtle border border-base-border text-xs text-body space-y-1">
              <p className="font-bold text-navy-900 flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-gold" />
                <span>On-Site Practical Yard Evaluation</span>
              </p>
              <p className="text-[11px] text-body-muted leading-relaxed">
                All candidates undergo simulated emergency drills, live fire equipment handling, and gas instrument calibrations before final certification.
              </p>
            </div>
          </div>

          {/* Right Column: In-Depth Course Dossier with Authentic Photographic Scene (8 Cols) */}
          <div className="lg:col-span-8 border border-base-border bg-base-surface p-6 sm:p-8 rounded-sm space-y-6">
            {/* Top Course Meta Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-base-border">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="navy" className="text-[10px] font-mono">
                    {selectedCourse.code}
                  </Badge>
                  <span className="text-xs font-semibold text-body-muted">
                    {selectedCourse.certification}
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
                  {selectedCourse.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-body-muted">
                <Clock className="w-4 h-4 text-navy-900" />
                <span>{selectedCourse.duration}</span>
              </div>
            </div>

            {/* Specific Realistic Documentary Photograph for this Course */}
            <div className="border border-base-border bg-base-subtle p-2 rounded-sm space-y-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-base-muted rounded-sm">
                <img
                  src={selectedCourse.image}
                  alt={`${selectedCourse.title} practical training scene at an authentic industrial safety facility`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-body-muted px-1">
                <strong>Field Drill Reference:</strong> Real training setting for {selectedCourse.title} — {selectedCourse.summary}
              </p>
            </div>

            {/* In-Depth Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                Operational Scope &amp; Safety Mandate
              </h4>
              <p className="text-sm text-body leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                Core Practical Competencies Evaluated
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCourse.coreCompetencies.map((comp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-body bg-base p-2.5 border border-base-border rounded-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Applicability */}
            <div className="pt-2 border-t border-base-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-navy-900 uppercase tracking-wider block">
                  Industrial Employment Scope:
                </span>
                <span className="text-xs text-body-muted">
                  {selectedCourse.fieldApplicability}
                </span>
              </div>

              {/* Action Button: Warm Gold CTA */}
              <div className="shrink-0">
                <Button
                  variant="cta"
                  onClick={() => onOpenInquiry(selectedCourse.id)}
                  className="w-full sm:w-auto text-xs uppercase tracking-wider font-bold px-6 py-2.5"
                >
                  Inquire for Next Batch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Practical Field Training Yard Showcase */}
        <div className="mt-12 border border-base-border bg-base-surface p-6 sm:p-8 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gold block">
              Practical Training Infrastructure
            </span>
            <h3 className="font-heading text-2xl font-bold text-navy-900">
              Live Field Simulation Lab &amp; Plant Hazard Training Ground
            </h3>
            <p className="text-xs sm:text-sm text-body leading-relaxed">
              At ITF, safety certification is earned through real worksite execution. Our dedicated Deoria training yard features live pipeline manifold setups, vessel entry manholes, welding hot-work containment booths, and statutory permit verification boards where candidates execute emergency responses and real-time gas monitoring under instructor supervision.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-navy-900 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                Live DCP Extinguisher Discharge
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                Tripod Winch Non-Entry Rescue
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                Multi-Gas Detector Calibration
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-base-border p-2 bg-base-subtle rounded-sm">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <img
                  src="/images/hero_drill.jpg"
                  alt="Certified safety trainer conducting live field training drill at Deoria training facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] text-body-muted mt-2 px-1">
                <strong>Photo:</strong> Certified instructor conducting hazard assessment drill at the practical training facility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
