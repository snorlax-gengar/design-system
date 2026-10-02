import React from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  variant?: 'lavender' | 'sky';
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  variant = 'lavender',
  id,
}) => {
  const checkboxId = id || (label ? `check-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  const variantStyles = variant === 'lavender' 
    ? 'bg-[#A855F7] border-[#A855F7] shadow-[0_2px_8px_-1px_rgba(168,85,247,0.35)]' 
    : 'bg-[#38BDF8] border-[#38BDF8] shadow-[0_2px_8px_-1px_rgba(56,189,248,0.35)]';

  return (
    <label 
      htmlFor={checkboxId}
      className={`inline-flex items-start gap-2.5 cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="relative flex items-center justify-center mt-0.5">
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div
          className={`
            w-5 h-5 rounded-[6px] border transition-all duration-150 flex items-center justify-center
            peer-focus-visible:ring-2 peer-focus-visible:ring-[#C084FC] peer-focus-visible:ring-offset-2
            ${checked 
              ? variantStyles 
              : 'bg-white border-[#CBD5E1] hover:border-[#A855F7]'}
          `}
        >
          {checked && (
            <Check className="w-3.5 h-3.5 text-white stroke-[3] animate-fade-in" />
          )}
        </div>
      </div>

      {(label || description) && (
        <div className="flex flex-col text-left">
          {label && <span className="text-sm font-semibold text-[#0F172A]">{label}</span>}
          {description && <span className="text-xs text-[#64748B] mt-0.5">{description}</span>}
        </div>
      )}
    </label>
  );
};
