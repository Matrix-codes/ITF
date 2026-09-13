import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        // Accent Warm Gold - Strict CTA ONLY
        cta: "bg-gold text-white hover:bg-gold-hover active:bg-gold-active font-semibold shadow-none",
        // Primary Structure Navy
        primary: "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 font-medium",
        // Outline Navy
        outline: "border border-navy-900 text-navy-900 bg-transparent hover:bg-navy-900/5 active:bg-navy-900/10",
        // Subtle Bordered
        secondary: "border border-base-border bg-base-surface text-navy-900 hover:bg-base-subtle",
        // Ghost Link Style
        ghost: "text-navy-900 hover:bg-base-subtle hover:text-navy-950",
        // Subtle Underline
        link: "text-navy-900 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2 rounded",
        sm: "h-8 px-3 text-xs rounded-sm",
        lg: "h-12 px-6 text-base rounded",
        icon: "h-10 w-10 rounded",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
