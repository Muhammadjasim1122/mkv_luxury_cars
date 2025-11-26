import { useState } from "react";

export default function FAQ({ hideImage = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I book a rental car in MKV?",
      answer: "You can book a rental car through our website by selecting your preferred vehicle, dates, and location. Simply fill out the booking form and complete the payment process."
    },
    {
      id: 2,
      question: "Why do I have to pay a security deposit?",
      answer: "A security deposit is required to cover any potential damages or additional charges during your rental period. The deposit is fully refundable upon return of the vehicle in its original condition."
    },
    {
      id: 3,
      question: "Can I rent a car without a credit card?",
      answer: "Yes, we offer flexible payment options. You can rent a car using a debit card or other accepted payment methods. Please contact our customer service for more details."
    },
    {
      id: 4,
      question: "Can anyone else drive the rental car other than the primary driver?",
      answer: "Additional drivers can be added to your rental agreement for an extra fee. All additional drivers must meet the same requirements as the primary driver and be present at the time of pickup with valid documentation."
    },
    {
      id: 5,
      question: "Can I rent a car with a new driving license in Dubai, UAE?",
      answer: "Yes, you can rent a car with a new driving license in Dubai. However, some restrictions may apply depending on the vehicle category. Please contact our customer service team to discuss your specific requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className={`flex flex-col gap-6 sm:gap-8 ${hideImage ? '' : 'lg:flex-row lg:items-center'} ${hideImage ? 'pl-0' : 'pl-0 sm:pl-4 md:pl-8 lg:pl-14'}`}>
          {/* Left Side - FAQ Section */}
          <div className="flex-1">
            <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold leading-tight text-[#0f172a] uppercase">
              Frequently Asked Questions
            </h2>

            {/* FAQ Items */}
            <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 pb-2 sm:pb-3 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between text-left gap-2 sm:gap-4"
                  >
                    <span className="text-xs sm:text-sm md:text-[15px] font-medium text-[#0f172a] flex-1">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-3 w-3 sm:h-4 sm:w-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Explore More Button */}
            {!hideImage && (
              <button className="rounded-full bg-[#df8c0c] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-[#0f172a] shadow-lg transition-colors hover:bg-[#c27807]">
                Explore More
              </button>
            )}
          </div>

          {/* Right Side - Car Image (Outside grid column, can be larger) */}
          {!hideImage && (
            <div className="flex items-center justify-end">
              <div className="relative overflow-hidden" style={{ maxWidth: '900px' }}>
                <img
                  src="https://www.mkvluxury.com/_next/image?url=%2Fassets%2Ffaqs.jpg&w=1200&q=75"
                  alt="Luxury Sports Car"
                  className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto object-contain object-left mix-blend-multiply"
                  style={{ backgroundColor: 'transparent' }}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

