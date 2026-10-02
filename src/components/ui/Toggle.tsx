import React from 'react';

export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleVariant = 'lavender' | 'sky' | 'coral';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: ToggleSize;
  variant?: ToggleVariant;
  disabled?: boolean;
  label?: string;
  description?: string;
  id?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  size = 'md',
  variant = 'lavender',
  disabled = false,
  label,
  description,
  id,
}) => {
  const toggleId = id || (label ? `toggle-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  // Switch Track Styles
  const sizeStyles = {
    sm: {
      track: 'w-8 h-[18px]',
      thumb: 'w-3.5 h-3.5',
      translate: 'translate-x-3.5',
      text: 'text-xs',
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-5',
      text: 'text-sm',
    },
    lg: {
      track: 'w-14 h-7.5',
      thumb: 'w-6 h-6',
      translate: 'translate-x-6.5',
      text: 'text-base',
    },
  }[size];

  const variantStyles = {
    lavender: 'bg-[#A855F7] shadow-[0_2px_8px_-1px_rgba(168,85,247,0.4)]',
    sky: 'bg-[#38BDF8] shadow-[0_2px_8px_-1px_rgba(56,189,248,0.4)]',
    coral: 'bg-[#FB923C] shadow-[0_2px_8px_-1px_rgba(251,146,60,0.4)]',
  }[variant];

  return (
    <div className={`flex items-start gap-3 select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <button
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`
          relative inline-flex shrink-0 items-center rounded-full p-0.5
          transition-colors duration-250 ease-in-out cursor-pointer
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C084FC] focus-visible:ring-offset-2
          ${sizeStyles.track}
          ${checked ? variantStyles : 'bg-[#E2E8F0] hover:bg-[#CBD5E1]'}
          ${disabled ? 'cursor-not-allowed pointer-events-none' : ''}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block rounded-full bg-white shadow-md
            transform transition-transform duration-250 ease-in-out
            ${sizeStyles.thumb}
            ${checked ? sizeStyles.translate : 'translate-x-0'}
          `}
        />
      </button>

      {(label || description) && (
        <div className="flex flex-col text-left">
          {label && (
            <label
              htmlFor={toggleId}
              className={`font-semibold text-[#0F172A] cursor-pointer ${sizeStyles.text}`}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};
