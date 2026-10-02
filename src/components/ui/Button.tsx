import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 
  | 'primary'          // Solid Lavender
  | 'secondary'        // Solid Sky
  | 'accent'           // Solid Coral
  | 'soft-lavender'    // Soft Tonal Lavender
  | 'soft-sky'         // Soft Tonal Sky
  | 'soft-butter'      // Soft Tonal Butter
  | 'outline'          // Outlined Border
  | 'ghost'            // Ghost Text
  | 'gradient';        // Dual Gradient (Lavender to Sky)

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#38BDF8] hover:bg-[#0EA5E9] active:bg-[#0284C7] text-white shadow-[0_2px_10px_-1px_rgba(56,189,248,0.4)] hover:shadow-[0_4px_16px_-1px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'bg-[#A855F7] hover:bg-[#9333EA] active:bg-[#7E22CE] text-white shadow-[0_2px_10px_-1px_rgba(168,85,247,0.4)] hover:shadow-[0_4px_16px_-1px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 active:translate-y-0',
  accent: 'bg-[#FB923C] hover:bg-[#F97316] active:bg-[#EA580C] text-white shadow-[0_2px_10px_-1px_rgba(251,146,60,0.4)] hover:shadow-[0_4px_16px_-1px_rgba(251,146,60,0.5)] hover:-translate-y-0.5 active:translate-y-0',
  'soft-sky': 'bg-[#E0F2FE] hover:bg-[#BAE6FD] active:bg-[#7DD3FC] text-[#0369A1]',
  'soft-lavender': 'bg-[#F3E8FF] hover:bg-[#E9D5FF] active:bg-[#DDD6FE] text-[#7E22CE]',
  'soft-butter': 'bg-[#FEF9C3] hover:bg-[#FEF08A] active:bg-[#FDE047] text-[#854D0E]',
  outline: 'bg-transparent border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#334155]',
  ghost: 'bg-transparent hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A]',
  gradient: 'bg-gradient-to-r from-[#38BDF8] to-[#A855F7] hover:opacity-95 text-white shadow-[0_4px_20px_-2px_rgba(56,189,248,0.35),0_6px_24px_-4px_rgba(168,85,247,0.3)] hover:-translate-y-0.5 active:translate-y-0',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-7 px-2.5 text-xs rounded-[6px] gap-1.5 font-medium',
  sm: 'h-9 px-3.5 text-xs md:text-sm rounded-[8px] gap-1.5 font-medium',
  md: 'h-11 px-4 text-sm md:text-[15px] rounded-[10px] gap-2 font-medium',
  lg: 'h-[52px] px-6 text-base rounded-[12px] gap-2.5 font-semibold',
  xl: 'h-[60px] px-8 text-lg rounded-[14px] gap-3 font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  children,
  ...props
}, ref) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      className={`
        inline-flex items-center justify-center 
        transition-all duration-200 select-none 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none disabled:shadow-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : leftIcon ? (
        <span className="shrink-0">{leftIcon}</span>
      ) : null}

      <span>{children}</span>

      {!isLoading && rightIcon && (
        <span className="shrink-0">{rightIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';
