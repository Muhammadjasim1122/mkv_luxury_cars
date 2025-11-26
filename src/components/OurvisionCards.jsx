export default function OurvisionCards() {
  return (
    <>
      {/* Mission & Vision Cards Section */}
      <section className="flex flex-wrap justify-center items-stretch gap-8 w-full pt-0 pb-10 max-[575.98px]:p-2 max-[575.98px]:gap-3">
        {/* Our Mission Card */}
        <div className="flex flex-col rounded-[50px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] p-8 flex-1 min-w-[300px] max-w-[500px] max-[991.98px]:flex-1 max-[991.98px]:basis-[45%] max-[991.98px]:p-6 max-[767.98px]:flex-1 max-[767.98px]:basis-full max-[767.98px]:max-w-full max-[767.98px]:rounded-[30px] max-[767.98px]:p-5 max-[575.98px]:p-4 max-[575.98px]:rounded-[25px]">
          <div className="flex items-center w-full mb-6 max-[767.98px]:mb-4">
            <img 
              alt="mission" 
              loading="lazy" 
              width="70" 
              height="70" 
              decoding="async" 
              className="mr-3 max-[767.98px]:w-[50px]" 
              src="https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fmission.png&w=256&q=75" 
              style={{color: 'transparent'}}
            />
            <h2 className="font-bold text-[32px] !m-0 max-[575.98px]:text-[1.5rem]">Our Mission</h2>
          </div>
          <p className="text-[#947138] leading-[1.7] text-[1.1rem] m-0 max-[767.98px]:text-[1rem]">
            To consistantly offer a premium, seamless car rental experience with a focus on quality, innovation and customer satisfaction, ensuring every clients journey is truly luxurious
          </p>
        </div>

        {/* Our Vision Card */}
        <div className="flex flex-col rounded-[50px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] p-8 flex-1 min-w-[300px] max-w-[500px] max-[991.98px]:flex-1 max-[991.98px]:basis-[45%] max-[991.98px]:p-6 max-[767.98px]:flex-1 max-[767.98px]:basis-full max-[767.98px]:max-w-full max-[767.98px]:rounded-[30px] max-[767.98px]:p-5 max-[575.98px]:p-4 max-[575.98px]:rounded-[25px]">
          <div className="flex items-center w-full mb-6 max-[767.98px]:mb-4">
            <img 
              alt="vision" 
              loading="lazy" 
              width="70" 
              height="70" 
              decoding="async" 
              className="mr-3 max-[767.98px]:w-[50px]" 
              src="https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fvision.png&w=256&q=75" 
              style={{color: 'transparent'}}
            />
            <h2 className="font-bold text-[32px] !m-0 max-[575.98px]:text-[1.5rem]">Our Vision</h2>
          </div>
          <p className="text-[#947138] leading-[1.7] text-[1.1rem] m-0 max-[767.98px]:text-[1rem]">
            By 2027, we aim to be the top luxury rental provider in UAE. renowned for delivering an unparrelled customer experience and maintaining the most exclusive fleet in the region
          </p>
        </div>
      </section>
    </>
  );
}
