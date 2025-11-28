import { useState } from "react";

const featureCards = [
  {
    title: "ZERO DEPOSIT",
    subtitle: "Option Available",
    iconSrc: "https://www.mkvluxury.com/assets/zero-deposit.svg",
    iconAlt: "Zero deposit icon",
    hasDialog: true,
  },
  {
    title: "24/7",
    subtitle: "Customer Support",
    iconSrc: "https://www.mkvluxury.com/assets/247-support.svg",
    iconAlt: "24/7 customer support icon",
    hasDialog: true,
  },
  {
    title: "FULL INSURANCE",
    subtitle: "Available Low Deposits",
    iconSrc: "https://www.mkvluxury.com/assets/full-insurance.svg",
    iconAlt: "Full insurance icon",
    hasDialog: true,
  },
  {
    title: "EXCLUSIVE OFFERS",
    subtitle: "On Monthly Booking",
    iconSrc: "https://www.mkvluxury.com/assets/offer.svg",
    iconAlt: "Exclusive offers icon",
  },
];

export default function FeatureGrid() {
  const [showZeroDepositDialog, setShowZeroDepositDialog] = useState(false);
  const [show247Dialog, setShow247Dialog] = useState(false);
  const [showFullInsuranceDialog, setShowFullInsuranceDialog] = useState(false);
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-7 mb-10 px-4 min-h-[61px]">
      <div className="grid grid-cols-2 gap-6 text-center items-center lg:grid-cols-4">
        {featureCards.map((feature, index) => {
          const isLast = index === featureCards.length - 1;
          const content = (
            <div className="flex flex-col justify-center items-center gap-2 bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)] rounded-lg py-2 px-4 md:flex-row md:justify-start cursor-pointer">
              <img 
                alt={feature.iconAlt} 
                loading="lazy" 
                width="100" 
                height="100" 
                className="w-8 h-8 my-auto" 
                src={feature.iconSrc} 
              />
              <div className="text-center md:text-left">
                <h5 className="font-bold text-[clamp(1rem,1vw,1.5rem)] m-0 whitespace-nowrap">{feature.title}</h5>
                <p className="text-gray-400 font-semibold m-0 text-xs leading-4 whitespace-nowrap">{feature.subtitle}</p>
              </div>
            </div>
          );

          if (isLast) {
            return (
              <a key={feature.title} className="block w-full" href="/our-fleet">
                {content}
              </a>
            );
          }

          if (feature.hasDialog && feature.title === "ZERO DEPOSIT") {
            return (
              <button 
                key={feature.title} 
                type="button" 
                className="w-full"
                onClick={() => setShowZeroDepositDialog(true)}
              >
                {content}
              </button>
            );
          }

          if (feature.hasDialog && feature.title === "24/7") {
            return (
              <button 
                key={feature.title} 
                type="button" 
                className="w-full"
                onClick={() => setShow247Dialog(true)}
              >
                {content}
              </button>
            );
          }
          if (feature.hasDialog && feature.title === "FULL INSURANCE") {
            return (
              <button 
                key={feature.title} 
                type="button" 
                className="w-full"
                onClick={() => setShowFullInsuranceDialog(true)}
              >
                {content}
              </button>
            );
          }

          return (
            <button key={feature.title} type="button" className="w-full">
              {content}
            </button>
          );
        })}
      </div>

      {/* Zero Deposit Dialog */}
      {showZeroDepositDialog && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div
            className="fixed top-[50%] left-[50%] z-50 grid w-full 
            max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%]
             gap-4 rounded-lg border bg-white p-8 shadow-lg sm:max-w-[200px] md:max-w-lg"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex flex-col text-start">
              <h2 className="text-[32px] md:text-[36px] leading-none font-semibold mb-2">
                Zero Deposit
              </h2>
            </div>

            {/* Body */}
            <div className="py-4 text-[12px] md:text-[18px] leading-relaxed">
              <p className="mt-0">
                Zero Deposit car rentals in Dubai allow you to drive luxury and
                supercars without paying a hefty upfront security amount. At MKV
                Luxury, we offer a hassle-free experience where you simply book
                your dream car, submit valid documents, and make the rental
                payment—no deposit required. This flexible option is ideal for
                tourists and residents who value convenience and speed. Enjoy
                top-tier vehicles like Lamborghini, Ferrari, or Rolls-Royce
                without financial holdbacks. With transparent terms and quick
                approval, Zero Deposit rentals make luxury driving more
                accessible than ever in Dubai. Book now and drive stress-free!
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShowZeroDepositDialog(false)}
                className="cursor-pointer inline-flex items-center justify-center gap-2 
                whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-yellow-500
                 hover:bg-yellow-600 text-white transition-colors"
              >
                Close
              </button>
            </div>

            {/* Close icon */}
            <button
              type="button"
              onClick={() => setShowZeroDepositDialog(false)}
              className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* 24/7 Dialog */}
      {show247Dialog && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div
            className="fixed top-[50%] left-[50%] z-50 grid w-full
             max-w-[calc(100%-2rem)] translate-x-[-50%]
              translate-y-[-50%] gap-4 rounded-lg border
               bg-white p-8 shadow-lg sm:max-w-lg md:max-w-lg"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex flex-col text-start">
              <h2 className="text-[31px] md:text-[36px] leading-none font-semibold mb-0">
                24/7
              </h2>
            </div>

            {/* Body */}
            <div className="py-4 text-[12px] md:text-[18px] leading-relaxed">
              <p className="mt-0 mb-0">
                At MKV Luxury, we understand that premium service goes beyond
                just delivering high-end cars—it's about being there when you
                need us. That's why our dedicated customer support team is
                available 24/7 to assist with bookings, inquiries, roadside
                help, or last-minute changes.
              </p>
              <p className="mt-0">
                Whether you're renting a Rolls-Royce, Ferrari, or Lamborghini,
                our round-the-clock assistance ensures a hassle-free experience
                from start to finish. No delays, no stress—just instant support
                whenever you need it. Enjoy peace of mind knowing MKV Luxury is
                always just a call or message away, any time, day or night.
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShow247Dialog(false)}
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white transition-colors"
              >
                Close
              </button>
            </div>

            {/* Close icon */}
            <button
              type="button"
              onClick={() => setShow247Dialog(false)}
              className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
       {/* 24/7 Dialog */}
       {showFullInsuranceDialog && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div
            className="fixed top-[50%] left-[50%] z-50 grid w-full
             max-w-[calc(100%-2rem)] translate-x-[-50%]
              translate-y-[-50%] gap-4 rounded-lg border
               bg-white p-8 shadow-lg sm:max-w-lg md:max-w-lg"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex flex-col text-start">
              <h2 className="text-[31px] md:text-[36px] leading-none font-semibold mb-0">
                Full Insurance
              </h2>
            </div>

            {/* Body */}
            <div className="py-4 text-[12px] md:text-[18px] leading-relaxed">
              <p className="mt-0 mb-0">
              Enjoy complete peace of mind with our comprehensive 
              insurance facility. Every rental includes loss damage
               waiver (with theft protection), tyre and windscreen cover, interior protection, personal 
              accident cover, and 24/7 roadside assistance—ensuring you drive worry-free.
              </p>
              
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShowFullInsuranceDialog(false)}
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white transition-colors"
              >
                Close
              </button>
            </div>

            {/* Close icon */}
            <button
              type="button"
              onClick={() => setShowFullInsuranceDialog(false)}
              className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

