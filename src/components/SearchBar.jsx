import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FeatureGrid from "./FeatureGrid";

const cityOptions = ["Dubai", "Abu Dhabi", "Sharjah"];

export default function SearchBar() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedCity, setSelectedCity] = useState(cityOptions[0]);

  return (
    <section className="px-4 sm:px-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-0 rounded-2xl sm:rounded-full bg-[#e5e7eb] p-4 sm:p-3 md:p-4 text-[#0f172a] shadow-[0_15px_35px_rgba(15,23,42,0.08)] sm:shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:flex-row sm:items-center sm:gap-0">
          <div className="mb-2 sm:mb-0 sm:flex-1">
            <CitySelect selected={selectedCity} onSelect={setSelectedCity} />
          </div>

          <Divider />

          <div className="my-2 sm:my-0 sm:flex-1">
            <DateField label="From" date={fromDate} onChange={setFromDate} align="center" />
          </div>

          <Divider />

          <div className="my-2 sm:my-0 sm:flex-1">
            <DateField label="To" date={toDate} onChange={setToDate} align="right" />
          </div>

          <div className="mt-3 flex w-full justify-center sm:mt-0 sm:w-auto sm:ml-auto sm:pl-4 md:pl-6">
            <button className="w-full rounded-xl sm:rounded-full bg-[#df8c0c] px-8 py-3 sm:px-10 sm:py-3 text-sm sm:text-[20px] font-bold text-black shadow-lg shadow-[#df8c0c]/50 transition hover:bg-[#f59f16] sm:w-auto">
              Search
            </button>
          </div>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
}

function CitySelect({ selected, onSelect }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useOnClickOutside(containerRef, () => setOpen(false));

  return (
    <div ref={containerRef} className="relative flex flex-1">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl sm:rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-3 text-left text-base sm:text-base md:text-lg font-bold text-[#0f172a] transition hover:bg-white/60"
      >
        <span className="font-bold text-left">{selected}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-600 sm:w-[18px] sm:h-[18px] flex-shrink-0">
          <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 sm:mt-3 w-full rounded-xl sm:rounded-2xl bg-white py-2 shadow-2xl">
          {cityOptions.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => {
                onSelect(city);
                setOpen(false);
              }}
              className="block w-full px-4 sm:px-5 py-2 text-left text-sm sm:text-base text-[#0f172a] hover:bg-slate-100"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

 function DateField({ label, date, onChange, align = "left" }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("month");
  const [activeStartDate, setActiveStartDate] = useState(date ?? new Date());
  const containerRef = useRef(null);

  useOnClickOutside(containerRef, () => setOpen(false));

  useEffect(() => {
    if (open) {
      setView("month");
      setActiveStartDate(date ?? new Date());
    }
  }, [open, date]);

  useEffect(() => {
    if (date) setActiveStartDate(date);
  }, [date]);

  const displayValue = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(date)
    : label;

  const handleSelect = (value) => {
    const nextDate = Array.isArray(value) ? value[0] : value;
    if (nextDate) {
      onChange(nextDate);
      setOpen(false);
    }
  };

  const handleYearClick = (value) => {
    const currentMonth = date ? date.getMonth() : activeStartDate.getMonth();
    const next = new Date(value.getFullYear(), currentMonth, 1);
    setActiveStartDate(next);
    setView("month");
  };

  return (
    <div ref={containerRef} className="relative flex flex-1">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative flex w-full items-center rounded-xl sm:rounded-full px-4 sm:px-5 md:px-6 py-3 text-base md:text-lg font-bold text-[#0f172a] transition hover:bg-white/60"
        >
          {/* TEXT MORE LEFT — added extra margin-right */}
          <span className="mr-auto">{displayValue}</span>

          {/* FIXED ICON ON RIGHT */}
          <CalendarIcon className="h-5 w-5 text-[#0f172a]/60 shrink-0" />
        </button>



      {/* DROPDOWN CALENDAR */}
      {open && (
        <div className="absolute left-1/2 bottom-full z-40 mb-2 -translate-x-1/2 rounded-xl sm:rounded-2xl bg-white p-2 sm:p-3 shadow-[0_25px_50px_rgba(15,23,42,0.18)]">
          <Calendar
            value={date ?? new Date()}
            view={view}
            activeStartDate={activeStartDate}
            onViewChange={({ view: nextView }) => {
              if (view === "month" && nextView === "year") return setView("decade");
              if (view === "decade" && nextView === "year") return setView("month");
              setView(nextView);
            }}
            onActiveStartDateChange={({ activeStartDate: next }) =>
              setActiveStartDate(next)
            }
            onClickYear={handleYearClick}
            onChange={handleSelect}
            className="search-calendar"
            minDetail="decade"
            maxDetail="month"
            showNeighboringMonth
            prev2Label={null}
            next2Label={null}
            prevLabel={<CalendarNavButton direction="prev" />}
            nextLabel={<CalendarNavButton direction="next" />}
            formatShortWeekday={(_, value) =>
              value.toLocaleDateString("en", { weekday: "short" }).slice(0, 2)
            }
          />
        </div>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden h-17 items-center px-2 sm:flex ">
      <span className="block h-10 w-px rounded-full bg-slate-500" />
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#0f172a] sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] flex-shrink-0">
      <path
        d="M7 3v2M17 3v2M5 8h14M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CalendarNavButton({ direction }) {
  const isPrev = direction === "prev";
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#2563eb] transition hover:bg-[#2563eb]/10">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path
          d={isPrev ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
