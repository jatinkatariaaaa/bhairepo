import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button font-medium transition-all duration-200 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]",
  {
    variants: {
      variant: {
        // Emerald fill — the main CTA
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lift",
        // White with hairline border
        secondary:
          "border border-hairline bg-white text-ink shadow-sm hover:-translate-y-0.5 hover:border-primary/30 hover:bg-mint/50",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:bg-mint",
        ghost: "text-ink hover:bg-mint/70",
        // For use on dark / emerald backgrounds
        white:
          "bg-white text-primary shadow-soft hover:-translate-y-0.5 hover:bg-mint",
        outlineWhite:
          "border border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5 text-[15px]",
        lg: "h-[52px] px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. a Next.js <Link>) instead of a <button>. */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
