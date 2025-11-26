const featureCards = [
  {
    title: "ZERO DEPOSIT",
    subtitle: "Option Available",
    iconSrc: "https://www.mkvluxury.com/assets/zero-deposit.svg",
    iconAlt: "Zero deposit icon",
  },
  {
    title: "24/7",
    subtitle: "Customer Support",
    iconSrc: "https://www.mkvluxury.com/assets/247-support.svg",
    iconAlt: "24/7 customer support icon",
  },
  {
    title: "FULL INSURANCE",
    subtitle: "Available Low Deposits",
    iconSrc: "https://www.mkvluxury.com/assets/full-insurance.svg",
    iconAlt: "Full insurance icon",
  },
  {
    title: "EXCLUSIVE OFFERS",
    subtitle: "On Monthly Booking",
    iconSrc: "https://www.mkvluxury.com/assets/offer.svg",
    iconAlt: "Exclusive offers icon",
  },
];

export default function FeatureGrid() {
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
              <a key={feature.title} className="block w-full" href="/cars">
                {content}
              </a>
            );
          }

          return (
            <button key={feature.title} type="button" className="w-full">
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}

