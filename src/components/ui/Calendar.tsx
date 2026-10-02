import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export interface CalendarProps {
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate: initialSelected,
  onSelectDate,
  className = '',
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(initialSelected || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialSelected || new Date());

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth(); // 0-indexed

  const monthNames = [
    '1월 (January)', '2월 (February)', '3월 (March)', '4월 (April)', 
    '5월 (May)', '6월 (June)', '7월 (July)', '8월 (August)', 
    '9월 (September)', '10월 (October)', '11월 (November)', '12월 (December)'
  ];

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  // Days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Days in previous month for padding
  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day);
    setSelectedDate(newDate);
    if (onSelectDate) {
      onSelectDate(newDate);
    }
  };

  const handleTodayClick = () => {
    const today = new Date();
    setCurrentMonth(today);
    setSelectedDate(today);
    if (onSelectDate) {
      onSelectDate(today);
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  return (
    <div className={`w-full max-w-sm bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-5 space-y-4 select-none ${className}`}>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#F3E8FF] flex items-center justify-center text-[#9333EA]">
            <CalendarIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0F172A]">
              {year}년 {month + 1}월
            </h3>
            <p className="text-[10px] text-[#64748B] font-medium">{monthNames[month]}</p>
          </div>
        </div>

        {/* Nav Controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleTodayClick}
            className="px-2 py-1 text-xs font-semibold text-[#7E22CE] hover:bg-[#F3E8FF] rounded-md transition-colors"
          >
            오늘
          </button>
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1.5 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-lg transition-colors"
            aria-label="Next Month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 text-center">
        {daysOfWeek.map((day, idx) => (
          <div
            key={day}
            className={`text-xs font-bold py-1.5 ${
              idx === 0 ? 'text-[#EA580C]' : idx === 6 ? 'text-[#0284C7]' : 'text-[#64748B]'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-y-1.5 text-center text-sm">
        {/* Previous Month Padding Days */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => {
          const prevDay = prevMonthDays - firstDayOfWeek + i + 1;
          return (
            <div
              key={`prev-${i}`}
              className="h-9 flex items-center justify-center text-xs text-[#CBD5E1] cursor-not-allowed"
            >
              {prevDay}
            </div>
          );
        })}

        {/* Current Month Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const selected = isSelected(day);
          const today = isToday(day);

          return (
            <div key={`current-${day}`} className="h-9 flex items-center justify-center">
              <button
                type="button"
                onClick={() => handleDateClick(day)}
                className={`
                  w-8 h-8 rounded-full flex flex-col items-center justify-center text-xs font-medium transition-all duration-150 relative
                  ${selected 
                    ? 'bg-[#A855F7] text-white font-bold shadow-[0_2px_10px_-1px_rgba(168,85,247,0.5)] scale-105' 
                    : today
                    ? 'border-2 border-[#A855F7] text-[#7E22CE] font-bold hover:bg-[#F3E8FF]'
                    : 'text-[#334155] hover:bg-[#F3E8FF] hover:text-[#7E22CE]'}
                `}
              >
                <span>{day}</span>
                {today && !selected && (
                  <span className="w-1 h-1 rounded-full bg-[#A855F7] absolute bottom-1" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Date Footer */}
      {selectedDate && (
        <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
          <span>선택된 날짜:</span>
          <span className="font-bold text-[#7E22CE] bg-[#FAF5FF] px-2 py-0.5 rounded-md border border-[#E9D5FF]">
            {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일
          </span>
        </div>
      )}

    </div>
  );
};
