"use client";

import Image from "next/image";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { enUS } from "date-fns/locale";

const TIMESLOTS = [
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "8:30pm",
  "9:00pm",
];

function CalendarHeader({ displayMonth, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-2">
      <button
        aria-label="Previous Month"
        onClick={onPrev}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
        type="button"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <span className="font-bold text-base text-gray-800 min-w-[120px] text-center">
        {displayMonth.toLocaleString("default", { month: "long", year: "numeric" })}
      </span>
      <button
        aria-label="Next Month"
        onClick={onNext}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
        type="button"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [month, setMonth] = useState(new Date(2025, 1, 1));

  // Helper for vertical date display
  function getDateParts(date) {
    if (!date) return { day: "", date: "", month: "" };
    const d = new Date(date);
    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "long" }),
    };
  }
  const dateParts = getDateParts(selectedDate);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc] p-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/3 w-full p-8 border-b md:border-b-0 md:border-r border-[#f0f0f0] flex flex-col items-center md:items-start">
          {/* Ecomsutra Heading */}
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-[#e94057] uppercase w-full text-center md:text-left" style={{letterSpacing: '2px'}}>ECOMSUTRA</h1>
          {/* Profile and Details */}
          <div className="flex items-center gap-3 mb-4 w-full">
            <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul Pandey" width={48} height={48} className="rounded-full" />
            <div>
              <div className="font-bold text-gray-700 text-base">Rahul Pandey</div>
            </div>
          </div>
          <div className="text-gray-600 font-bold text-base mb-2 w-full">Discovery Call</div>
          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-2 w-full">
            <span>🕒</span>
            <span>30 min</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-6 w-full">
            <span>💻</span>
            <span>Web conferencing details provided upon confirmation.</span>
          </div>
          <div className="text-gray-600 text-sm mb-8 w-full">
            Let's get on a call to understand your goals, current challenges, and target audience. This conversation allows us to tailor our approach to meet your needs and set clear objectives.
          </div>
          <div className="text-xs w-full flex gap-4 justify-between items-center mt-auto pt-8">
            <span className="text-[#bdbdbd] hover:underline cursor-pointer font-semibold">Cookie settings</span>
            <span className="text-[#bdbdbd] hover:underline cursor-pointer font-semibold">Report abuse</span>
          </div>
        </div>
        {/* Mid + Right Section */}
        <div className="md:w-2/3 w-full p-8 flex flex-col">
          <div className="font-semibold text-lg mb-2">Select a Date & Time</div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mid: Calendar */}
            <div className="flex flex-col items-center">
              <CalendarHeader
                displayMonth={month}
                onPrev={() => setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                onNext={() => setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
              />
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                month={month}
                onMonthChange={setMonth}
                fromMonth={new Date(2025, 1, 1)}
                toMonth={new Date(2025, 1, 28)}
                showOutsideDays={false}
                weekStartsOn={1}
                locale={enUS}
                modifiersClassNames={{
                  selected: "!bg-blue-600 !text-white !rounded-full",
                  today: "border border-blue-600",
                }}
                className=""
                styles={{
                  caption: { display: "none" },
                  head_cell: { fontWeight: 500 },
                }}
              />
              {/* Time zone heading */}
              <div className="text-xs text-gray-500 mt-4 w-full">
                <div className="font-semibold text-gray-700 mb-1">Time zone</div>
                <span className="inline-flex items-center gap-1">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 1.333A6.667 6.667 0 108 14.667 6.667 6.667 0 008 1.333zM8 12a4 4 0 110-8 4 4 0 010 8z" fill="#888"/></svg>
                  India Standard Time (IST)
                </span>
              </div>
            </div>
            {/* Right: Timeslots */}
            <div className="flex-1 flex flex-col items-center">
              {selectedDate ? (
                <div className="w-full flex flex-col items-center">
                  {/* Date vertical display */}
                  <div className="flex flex-col items-center mb-4">
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-widest">{dateParts.day}</div>
                    <div className="text-3xl font-extrabold text-gray-800 leading-none">{dateParts.date}</div>
                    <div className="text-gray-500 text-sm font-semibold">{dateParts.month}</div>
                  </div>
                  <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-2 w-full items-center">
                    {TIMESLOTS.map((slot) => (
                      <div key={slot} className="relative flex items-center w-full justify-center">
                        <button
                          className={`transition-all duration-200 text-center px-0 py-3 rounded border font-semibold flex-1 ${
                            selectedSlot === slot
                              ? "bg-blue-600 text-white border-blue-600 w-32"
                              : "bg-white text-blue-700 border-blue-600 hover:bg-blue-50 w-48"
                          }`}
                          style={{ minWidth: selectedSlot === slot ? 96 : 160, maxWidth: selectedSlot === slot ? 128 : 192 }}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot}
                        </button>
                        {selectedSlot === slot && (
                          <button
                            className="ml-2 bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
                            style={{ position: "static" }}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-gray-400 text-sm mt-8">Please select a date to see available times.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
