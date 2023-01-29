import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";

/**
 * Pre-built simple button.
 * You can use it like HTML, write its content as children.
 *
 * @see https://www.w3schools.com/tags/tag_button.asp
 */

const variants = cva(
  "text-sm font-medium transition-colors ring-0 focus:ring-2 focus:ring-offset-2 outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 border border-slate-900 hover:bg-slate-700 hover:border-slate-700 ring-slate-900 text-white shadow-sm ring-slate-400 selection:text-white selection:bg-slate-600",
        outline:
          "bg-transparent border border-slate-200 hover:border-slate-300 text-slate-700 ring-slate-200",
        transparent:
          "bg-transparent text-slate-700 hover:bg-slate-100 ring-slate-200",
      },
      size: {
        default: "px-4 py-2 rounded-md",
        medium: "px-5 py-2.5 rounded-md",
        large: "px-6 py-3 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={variants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, variants };
