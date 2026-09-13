"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ApprovalsBand } from "@/components/sections/ApprovalsBand";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { InquiryModal } from "@/components/common/InquiryModal";
import { DoubtFloatButton } from "@/components/common/DoubtFloatButton";
import { AuthModal } from "@/components/common/AuthModal";

export default function HomePage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedCourseForInquiry, setSelectedCourseForInquiry] = useState<string | undefined>(undefined);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<"login" | "register" | "admin">("login");

  const handleOpenInquiry = (courseId?: string) => {
    setSelectedCourseForInquiry(courseId);
    setInquiryModalOpen(true);
  };

  const handleOpenAuth = (tab: "login" | "register" | "admin" = "login") => {
    setAuthDefaultTab(tab);
    setAuthModalOpen(true);
  };

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* 1. Nav: ITF wordmark + logo mark, links (Courses, Approvals, About, Contact), Login, Register, Admin, Apply CTA button */}
      <Navbar onOpenInquiry={handleOpenInquiry} onOpenAuth={handleOpenAuth} />

      {/* 2. Hero: tagline "Skills for a better tomorrow", one-line description of what ITF does, one primary CTA ("Explore courses") */}
      <Hero onOpenInquiry={() => handleOpenInquiry()} />

      {/* 3. Approvals & Affiliations band — prominent, not buried in footer */}
      <ApprovalsBand />

      {/* 4. Courses — short-term/skill courses: Work Permit Receiver, Oil & Gas Safety, Fire Watcher, Flagman, Hole Watcher */}
      <CoursesSection onOpenInquiry={handleOpenInquiry} />

      {/* 5. Founder/Director credibility section: Sachin Kumar Singh, Founder & Director */}
      <FounderSection onOpenInquiry={() => handleOpenInquiry()} />

      {/* 6. Contact/location: 1st floor, Sanjeevini Eye Hospital, Raghav Nagar, Deoria, UP, India 274001 */}
      <ContactSection />

      {/* 7. Footer: repeat logo, quick links, address, social */}
      <Footer />

      {/* Global Interactive Course & Admission Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultCourseId={selectedCourseForInquiry}
      />

      {/* Global Auth Modal (Candidate Login, Register, Admin Portal) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />

      {/* Floating 24/7 Doubt Helpline (WFSI ~World Fire Safety Institute) */}
      <DoubtFloatButton />
    </main>
  );
}
