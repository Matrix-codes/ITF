import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark-only";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "full", size = "md" }: LogoProps) {
  const markDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official ITF Logo Emblem Image */}
      <img
        src="/images/itf_logo.jpg"
        alt="International Technical Foundation (ITF) Emblem"
        width={size === "lg" ? 48 : size === "sm" ? 32 : 40}
        height={size === "lg" ? 48 : size === "sm" ? 32 : 40}
        style={{
          width: size === "lg" ? 48 : size === "sm" ? 32 : 40,
          height: size === "lg" ? 48 : size === "sm" ? 32 : 40,
          objectFit: "contain",
        }}
        className={`${markDimensions} object-contain rounded-sm shrink-0`}
      />

      {/* Institutional Wordmark */}
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="font-heading font-bold text-navy-900 leading-tight text-sm sm:text-base tracking-tight">
            INTERNATIONAL TECHNICAL FOUNDATION
          </span>
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-body-muted tracking-widest mt-0.5">
            <span>Govt.-Affiliated</span>
            <span className="w-1 h-1 rounded-full bg-gold inline-block"></span>
            <span>Est. Industrial Institute</span>
          </div>
        </div>
      )}
    </div>
  );
}
