import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  size?: SelectSize;
  disabled?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = '선택해주세요',
  helperText,
  error,
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sizeStyles = {
    sm: 'h-9 px-3 text-xs rounded-[8px]',
    md: 'h-11 px-4 text-sm rounded-[10px]',
    lg: 'h-[52px] px-5 text-base rounded-[12px]',
  }[size];

  return (
    <div ref={containerRef} className={`w-full text-left space-y-1.5 relative ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-[#334155] tracking-wide">
          {label}
        </label>
      )}

      {/* Select Trigger Box */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between bg-white border transition-all duration-200 select-none outline-none
          ${sizeStyles}
          ${error 
            ? 'border-[#FB923C] ring-2 ring-[#FED7AA]' 
            : isOpen 
            ? 'border-[#C084FC] ring-4 ring-[#F3E8FF] shadow-sm' 
            : 'border-[#E2E8F0] hover:border-[#CBD5E1]'}
          ${disabled ? 'bg-[#F8FAFC] text-[#94A3B8] cursor-not-allowed opacity-60' : 'cursor-pointer'}
        `}
      >
        <div className="flex items-center gap-2 truncate">
          {selectedOption ? (
            <>
              {selectedOption.icon && <span className="shrink-0 text-[#7E22CE]">{selectedOption.icon}</span>}
              <span className="font-medium text-[#0F172A]">{selectedOption.label}</span>
            </>
          ) : (
            <span className="text-[#94A3B8]">{placeholder}</span>
          )}
        </div>

        <ChevronDown 
          className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-[#7E22CE]' : ''
          }`} 
        />
      </button>

      {/* Options Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-[#E2E8F0] rounded-[12px] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.1),0_8px_10px_-6px_rgba(15,23,42,0.05)] overflow-hidden py-1 max-h-60 overflow-y-auto animate-fade-in">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`
                  flex items-center justify-between px-3.5 py-2.5 cursor-pointer text-sm transition-colors
                  ${isSelected ? 'bg-[#FAF5FF] text-[#7E22CE] font-semibold' : 'text-[#334155] hover:bg-[#F8FAFC]'}
                `}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {option.icon && <span className="shrink-0">{option.icon}</span>}
                  <div>
                    <div className="truncate">{option.label}</div>
                    {option.description && (
                      <div className="text-[11px] text-[#64748B] font-normal">{option.description}</div>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-[#A855F7] shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      )}

      {error ? (
        <p className="text-xs text-[#EA580C] font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#64748B]">{helperText}</p>
      ) : null}
    </div>
  );
};
