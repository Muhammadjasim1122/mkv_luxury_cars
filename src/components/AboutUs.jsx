import Header from "./Header";
import Footer from "./Footer";
import FeatureGrid from "./FeatureGrid";
import OurvisionCards from "./OurvisionCards";
import SuperCarsGrid from "./SuperCarsGrid";

function TwoColumnSection({ heading, heading2, text, paragraphs, imageUrl, imageAlt, reverse = false }) {
  // If paragraphs array is provided, use it; otherwise use text as single paragraph
  const textContent = paragraphs || (text ? [text] : []);
  
  return (
    <section className="px-6 sm:px-8 md:px-16 my-2 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Left Column - Text Content */}
          <div className={reverse ? 'md:order-2' : ''}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#314158] mb-2">
              {heading}
            </h2>
            
            {/* Second Heading - Only shows if heading2 is provided */}
            {heading2 && (
              <h3 className="text-[40px] sm:text-[40px] md:text-[40px] font-[500] text-[#475569] mb-4 sm:mb-2 mt-10">
                {heading2}
              </h3>
            )}
            
            <div className="space-y-4 sm:space-y-6 text-[#2c3e50]">
              {textContent.map((paragraph, index) => (
                <p key={index} className="text-slate-800 mb-0 !text-[17px] description-styles about-us">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Car Image */}
          <div className={`w-full ${reverse ? 'md:order-1' : ''}`}>
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Welcome Section */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-10">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-[46px] sm:text-4xl md:text-[56px] lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Welcome to MKV Luxury
            </h1>
            <p className="text-[#999999] font-normal text-[20px] md:text-[28px]">Welcome to Dubai's Supercar Playground, where Luxury Car Rental In Dubai 
              <br/> bows to the unmatched prowess of MKV Luxury</p>
          </div>
        </section>
      

        {/* Feature Cards Section */}
        <FeatureGrid />
        <section className="justify-center flex mt-10 w-[45%] h-[45%] mx-auto ">
          <img src="https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fwelcome.png&w=3840&q=75" alt="" />
        </section>

        {/* Banner Section */}
        <section className="relative w-full px-4 sm:px-6 md:px-8 py-4 sm:py-8 md:py-14 mt-3 sm:mt-4 md:mt-4">
          <div className="mx-auto max-w-7xl">
            <div className="relative w-full h-[300px] sm:h-[80px] md:h-[320px] lg:h-[220px] rounded-[20px] sm:rounded-[40px] overflow-hidden ">
              {/* Background Image with Orange Sports Car */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(	https://www.mkvluxury.com/_next/image?url=%2Fassets%2FAboutbanner.png&w=3840&q=75 )',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark Overlay for better text readability */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.6))'
                  }}
                ></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="text-center ">
                  <h2 className="font-bold mb-7 w-full text-[20px] md:text-[32px] text-white" style={{textShadow: 'rgba(0, 0, 0, 0.5) 2px 2px 4px'}}>
                    Find Best Luxury &amp; Supercars For Renting in Dubai
                  </h2>
                  <a className="no-underline inline-block px-6 py-3 bg-[rgb(231,143,19)] text-white rounded-full font-semibold hover:bg-[rgb(231,143,19)]/90 transition-colors" href="/our-fleet">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - TOP (Only 1 heading) */}
        <TwoColumnSection
          heading="Who we are"
          text="MKV Luxury has the largest collection of luxury cars for rent in Dubai. All of our cars are kept in perfect condition. We are the best choice for super car rentals, whether for a special event or just for fun. We work hard to offer the best rental prices in the city. We are available 24 hours a day, 7 days a week. Our service is excellent, and we make renting a car easy and stress-free."
          imageUrl="https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fwhoweare.png&w=3840&q=75"
          imageAlt="Luxury Car - MKV Luxury"
        />

        {/* Experience Section */}
        <section className="px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-2 bg-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c3e50] mb-6 sm:mb-10 leading-tight">
              Experience the fun of luxury car
              <br />
              <span className="block mt-8 sm:mt-10 md:mt-10">rental in Dubai</span>
            </h2>
            <div>
              <p className="text-base sm:text-lg md:text-xl text-[#475569] leading-relaxed">
                Many people dream of driving amazing cars like Lamborghinis and Ferraris, just like in the movies. But buying these cars is too expensive for most. That's where MKV luxury car rentals come in. Renting lets you live your dream and drive these special cars.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-[#475569] leading-relaxed">
                MKV Luxury, based in Dubai, is a top company for luxury and super car rentals without deposit. We make it easy for you to rent and enjoy your dream car in Dubai.
              </p>
            </div>
          </div>
        </section>

        <div>
          <OurvisionCards />
        </div>

        {/* Why Choose Us Section - BOTTOM (2 headings) */}
        <TwoColumnSection
          heading="Why Choose Us"
          heading2="Dubai's Premier Car Rental!"
          paragraphs={[
            "Experience effortless luxury with our elite fleet of sports cars, GTs, and convertibles. Enjoy 100% insurance coverage, no deposit required, and absolute pricing transparency. We offer hassle-free door-to-door service, multiple payment options (crypto, cash, cards), and 25% off monthly bookings.",
            "Choose from Ferrari, Rolls-Royce, Lamborghini, McLaren, and more, with free delivery & pickup. Our multilingual website ensures a seamless booking experience. Drive in style with MKV Luxury - where every journey is extraordinary!"
          ]}
          imageUrl="https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fwhychooseus.png&w=3840&q=75"
          imageAlt="Luxury Car - MKV Luxury"
        />
        <div>
          <SuperCarsGrid />
        </div>
       
      </main>

      <Footer />
    </div>
  );
}