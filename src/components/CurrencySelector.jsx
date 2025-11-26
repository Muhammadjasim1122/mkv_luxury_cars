import { useState, useRef, useEffect } from "react";

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const containerRef = useRef(null);

  const currencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "GBP", name: "Great British Pound" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (currencyCode) => {
    setSelectedCurrency(currencyCode);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-900 shadow-sm"
      >
        <span>{selectedCurrency}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5 6 7.5l3-3"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full z-50  mt-1 w-[120px] rounded-lg border border-slate-200 bg-white shadow-lg">
          <ul className="py-1">
            {currencies.map((currency) => (
              <li key={currency.code}>
                <button
                  onClick={() => handleSelect(currency.code)}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span>{currency.code}</span>
                  {selectedCurrency === currency.code && (
                    <svg
                      className="h-4 w-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
