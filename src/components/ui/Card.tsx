import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'flat' | 'interactive' | 'glowing';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }[padding];

  const variantStyles = {
    default: 'bg-white border border-[#E2E8F0] shadow-[0_4px_16px_-2px_rgba(15,23,42,0.05)] rounded-[14px]',
    flat: 'bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px]',
    interactive: 'bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.15)] hover:border-[#D8B4FE] hover:-translate-y-0.5 transition-all duration-300 rounded-[14px]',
    glowing: 'bg-white border border-[#E9D5FF] shadow-[0_4px_24px_-2px_rgba(168,85,247,0.2)] rounded-[16px]',
  }[variant];

  return (
    <div className={`${variantStyles} ${paddingStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
