import React from 'react';

export type BadgeVariant = 'lavender' | 'sky' | 'butter' | 'coral' | 'slate' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  lavender: 'bg-[#F3E8FF] text-[#7E22CE] border border-[#E9D5FF]',
  sky: 'bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]',
  butter: 'bg-[#FEF9C3] text-[#854D0E] border border-[#FEF08A]',
  coral: 'bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA]',
  slate: 'bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]',
  outline: 'bg-transparent text-[#475569] border border-[#CBD5E1]',
};

const dotStyles: Record<BadgeVariant, string> = {
  lavender: 'bg-[#A855F7]',
  sky: 'bg-[#38BDF8]',
  butter: 'bg-[#EAB308]',
  coral: 'bg-[#FB923C]',
  slate: 'bg-[#64748B]',
  outline: 'bg-[#94A3B8]',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'lavender',
  size = 'md',
  dot = false,
  className = '',
  children,
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-semibold';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium leading-none ${sizeClass} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotStyles[variant]}`} />
      )}
      {children}
    </span>
  );
};
