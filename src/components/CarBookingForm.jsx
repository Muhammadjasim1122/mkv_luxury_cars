import { useState } from "react";

export default function CarBookingForm({ car }) {
  const [showRequirements, setShowRequirements] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupCity, setPickupCity] = useState("Dubai");
  const [dropoffCity, setDropoffCity] = useState("Dubai");

  return (
    <div className="w-full border border-gray-200 rounded-lg order-first lg:order-last p-[15px] md:p-[30px]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[28px]">
          <span className="font-bold">Rental </span>/ Day
        </h3>
        <h3 className="text-[28px] font-bold">{car.price} AED</h3>
      </div>

      {/* Conditions */}
      <div>
        <h4 className="font-bold mb-3 mt-4 text-[28px]">Conditions</h4>
        <div className="flex gap-4 flex-wrap mt-2">
          <div className="flex-grow flex justify-between items-center font-bold ps-2" style={{ backgroundColor: 'rgb(248, 242, 229)', borderRadius: '6px' }}>
            <div className="">Minimum Rental Days</div>
            <strong className="text-white rounded bg-[#e78f13] py-2.5 px-4 font-bold">1</strong>
          </div>
          <div className="flex-grow flex justify-between items-center font-bold ps-2" style={{ backgroundColor: 'rgb(248, 242, 229)', borderRadius: '6px' }}>
            <div className="">Required Documents</div>
            <button
              type="button"
              className="m-0 text-white rounded bg-[#e78f13] py-2.5 px-4 font-bold"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowRequirements(true)}
            >
              See the list
            </button>
          </div>
        </div>
      </div>

      {/* Choose Rental Dates */}
      <h3 className="font-bold mt-5 mb-3 text-[28px]">Choose Rental Dates</h3>
      <div className="justify-between items-center flex">
        <div>
          <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            <span className="font-bold text-[24px]">Rental date &amp; price </span>
            <br />Incl VAT
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[24px] mb-0">AED 0 <span style={{ fontWeight: 400, fontSize: '1rem' }}> / 0 Days</span></h4>
        </div>
      </div>

      {/* Date and City Selection */}
      <div className="mb-3 mt-2 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between gap-x-3 flex-wrap">
          <div className="flex flex-col flex-1">
            <div className="mb-3 ps-3 flex flex-row items-center rounded-md bg-[#fff7ef] gap-[10px]">
              <label className="form-label font-bold mb-1 sm:mb-0 sm:py-4 sm:px-2 w-[110px] whitespace-nowrap">
                Pick-up Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="cursor-pointer rounded-md text-sm outline-none border bg-[#f18a1d] hover:bg-[#db7d18] text-white font-semibold h-[50px] px-4 w-full"
              />
            </div>
            <div className="mb-3 ps-3 flex flex-row items-center relative rounded-md bg-[#fff7ef] gap-[10px]">
              <label className="form-label font-bold mb-1 sm:mb-0 sm:py-4 sm:px-2 w-[110px] whitespace-nowrap">Pickup City</label>
              <div className="relative flex-1">
                <select
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="appearance-none border-input w-full items-center justify-between gap-2 rounded-md border bg-transparent text-sm shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 py-4 px-2 h-[50px] !bg-[#f18a1d] hover:!bg-[#db7d18] font-bold text-white pr-10"
                >
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm Al Quwain</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="mb-3 ps-3 flex flex-row items-center rounded-md bg-[#fff7ef] gap-[10px]">
              <label className="form-label font-bold mb-1 sm:mb-0 sm:py-4 sm:px-2 w-[110px] whitespace-nowrap">
                Drop Off Date
              </label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="cursor-pointer rounded-md text-sm outline-none border bg-[#f18a1d] hover:bg-[#db7d18] text-white font-semibold h-[50px] px-4 w-full"
              />
            </div>
            <div className="mb-3 ps-3 flex flex-row items-center relative rounded-md bg-[#fff7ef] gap-[10px]">
              <label className="form-label font-bold mb-1 sm:mb-0 sm:py-4 sm:px-2 w-[110px] whitespace-nowrap">Drop Off City</label>
              <div className="relative flex-1">
                <select
                  value={dropoffCity}
                  onChange={(e) => setDropoffCity(e.target.value)}
                  className="appearance-none border-input w-full items-center justify-between gap-2 rounded-md border bg-transparent text-sm shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 py-4 px-2 h-[50px] !bg-[#f18a1d] hover:!bg-[#db7d18] font-bold text-white pr-10"
                >
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm Al Quwain</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Selection */}
      <div className="flex justify-center text-center mb-3 flex-wrap bg-[#fff7ef] rounded-md">
        <div className="p-3 flex-1">
          <h6 className="font-bold mb-2">Start Time</h6>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center border rounded w-full bg-white">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#f18a1d] text-[1.5rem] mx-[10px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
              </svg>
              <input className="w-full p-2 font-bold border-0 focus:outline-none focus:ring-0 bg-transparent" type="time" defaultValue="16:39" />
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <h6 className="font-bold mb-2">End Time</h6>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center border rounded w-full bg-white">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#f18a1d] text-[1.5rem] mx-[10px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
              </svg>
              <input className="w-full p-2 font-bold border-0 focus:outline-none focus:ring-0 bg-transparent" type="time" defaultValue="16:39" />
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Option */}
      <div className="mb-3 mt-5 py-3 px-5 bg-[#FFF7EF] rounded-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold text-[clamp(19px, 3vw, 28px)] leading-normal">Enjoy a Deposit free ride for 360 AED / day</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" className="cursor-pointer text-[#F18A1D]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g id="Circle_Info"><g><g><path d="M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z"></path><circle cx="12" cy="8.999" r="0.5"></circle></g><path d="M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z"></path></g></g></svg>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
        </div>
        <div className="bg-white py-1 px-6 rounded-lg mt-3 flex justify-between items-center">
          <span className="text-[16px] font-semibold flex items-center gap-3">
            <img alt="Deposit" loading="lazy" width="20" height="20" decoding="async" src="/assets/deposit-icon.svg" style={{ color: 'transparent' }} /> Deposit
          </span>
          <span className="text-[16px] font-semibold">AED 15000</span>
        </div>
      </div>

      {/* Extra KM Option */}
      <div className="mb-3 mt-5 py-3 px-5 rounded-md bg-[#fff7ef]">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold text-[clamp(19px, 3vw, 28px)]">Add Extra KM</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" className="cursor-pointer text-[#F18A1D]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g id="Circle_Info"><g><g><path d="M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z"></path><circle cx="12" cy="8.999" r="0.5"></circle></g><path d="M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z"></path></g></g></svg>
          </div>
        </div>
        <div className="bg-white py-1 px-6 rounded-lg mt-3 flex justify-between items-center">
          <span className="text-[16px] font-semibold flex items-center gap-3">
            <img alt="KM" loading="lazy" width="20" height="20" decoding="async" src="/assets/km-icon.svg" style={{ color: 'transparent' }} /> Kilometer Limit
          </span>
          <span className="text-[16px] font-semibold">{car.kmIncluded} KM</span>
        </div>
        <div className="bg-[#F18A1D] p-4 rounded-lg mt-4 font-semibold flex justify-between items-center">
          <span>250 KM / Day</span>
          <label className="inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
        </div>
        <div className="bg-[#F18A1D] p-4 rounded-lg mt-4 font-semibold flex justify-between items-center">
          <span>Unlimited KM - 4499 AED / day</span>
          <label className="inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
        </div>
      </div>

      {/* Protection Option */}
      <div className="mb-5 mt-5 py-3 px-5 bg-[#FFF7EF] rounded-lg">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold text-[clamp(19px, 3vw, 28px)]">MKV Luxury Total Protect</span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="20" className="cursor-pointer text-[#F18A1D]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g id="Circle_Info"><g><g><path d="M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z"></path><circle cx="12" cy="8.999" r="0.5"></circle></g><path d="M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z"></path></g></g></svg>
          </div>
        </div>
        <div className="bg-white py-1 px-6 rounded-lg mt-3 flex justify-between items-center">
          <span className="text-[16px] font-semibold flex items-center gap-3">
            <img alt="Protection" loading="lazy" width="20" height="20" decoding="async" src="/assets/protection-icon.svg" style={{ color: 'transparent' }} />Protection
          </span>
          <span className="text-[16px] font-semibold">Basic</span>
        </div>
        <div className="bg-[#F18A1D] p-4 rounded-lg mt-4 font-semibold flex justify-between items-center">
          <span>Rim, Tire &amp; Windscreen Protection - 1875 AED / day</span>
          <label className="inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
        </div>
        <div className="bg-[#F18A1D] p-4 rounded-lg mt-4 font-semibold flex justify-between items-center">
          <span>Total Protection - 3000 AED / day</span>
          <label className="inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
        </div>
      </div>

      {/* Baby Seat Option */}
      <div className="mb-5 mt-5 py-3 px-5 bg-[#FFF7EF] rounded-lg">
        <div className="bg-[#F18A1D] p-4 rounded-lg mt-4 font-semibold flex justify-between items-center">
          <span>Baby Seat - 50 AED / day</span>
          <label className="inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
          </label>
        </div>
      </div>

      {/* Promo Code */}
      <div className="w-full mb-5 border border-gray-200 rounded-lg order-first lg:order-last py-[10px] px-[15px] md:py-[20px] md:px-[30px]">
        <h4 className="font-bold mt-2 mb-4">Promo Code</h4>
        <div className="flex items-center gap-2">
          <input className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter Promo Code" required type="text" defaultValue="" name="promoCode" />
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none outline-none focus-visible:ring-[3px] h-9 px-4 has-[>svg]:px-3 text-white py-3 font-bold rounded-lg disabled:opacity-50 cursor-pointer" type="button" style={{ backgroundColor: 'rgb(231, 143, 19)' }}>Apply Promo Code</button>
        </div>
      </div>

      {/* Price Details */}
      <div className="mb-4 border border-gray-200 rounded-lg p-[15px] md:p-[30px] bg-white">
        <h4 className="font-bold my-4">Price Details</h4>
        <div className="font-bold flex justify-between items-center my-3">
          <h5 className="mb-0 opacity-70">Rental Cost (0 days)</h5>
          <h5 className="mb-0"> 0 AED</h5>
        </div>
        <div className="font-bold flex justify-between items-center my-3">
          <h5 className="mb-0 opacity-70">Delivery Fee</h5>
          <h5 className="mb-0">0 AED</h5>
        </div>
        <div className="font-bold flex justify-between items-center my-3">
          <h5 className="mb-0 opacity-70 flex items-center gap-1">Deposit
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="ms-2 cursor-pointer text-[#ff007f]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g id="Circle_Info"><g><g><path d="M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z"></path><circle cx="12" cy="8.999" r="0.5"></circle></g><path d="M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z"></path></g></g></svg>
          </h5>
          <h5 className="mb-0">0 AED</h5>
        </div>
        <div className="font-bold flex justify-between items-center my-3">
          <h5 className="mb-0 opacity-70">VAT (5%)</h5>
          <h5 className="mb-0">0 AED</h5>
        </div>
        <div className="font-bold flex justify-between items-center my-3">
          <h5 className="mb-0 opacity-70">Total Payable Amount</h5>
          <h5 className="mb-0">0 AED</h5>
        </div>
        <hr className="forMobile" />
        <div className="font-bold flex justify-between items-center my-3 forMobile">
          <h5 className="mb-0 opacity-70">Total cost upon car delivery</h5>
          <h5 className="mb-0">0 AED</h5>
        </div>
        <div className="font-bold flex justify-between items-center my-3">
          <h5 className="mobilemargin opacity-70">Due Now</h5>
          <h5 className="mobilemargin">0 AED </h5>
        </div>
      </div>

      {/* Contact Form */}
      <div className="border border-gray-200 rounded-lg p-[15px] md:p-[30px]">
        <form>
          <div className="flex flex-wrap mx-0 mt-1">
            <div className="w-full md:w-1/2 px-2 mb-2">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">First Name</label>
                <input className="w-full p-2 border border-gray-300 rounded" placeholder="First Name" required type="text" defaultValue="" name="firstName" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-2">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Last Name</label>
                <input className="w-full p-2 border border-gray-300 rounded" placeholder="Last Name" required type="text" defaultValue="" name="lastName" />
              </div>
            </div>
          </div>
          <div className="mb-4 px-2">
            <label className="block text-sm font-bold mb-1">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email address" required type="email" defaultValue="" name="email" />
          </div>
          <div className="mb-4 px-2">
            <label className="block text-sm font-bold mb-1">WhatsApp Number</label>
            <input className="w-full p-2 border border-gray-300 rounded" placeholder="+971 xx xxx xxxx" required type="tel" defaultValue="" name="whatsappNumber" />
          </div>
        </form>
        <div className="px-2">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none outline-none focus-visible:ring-[3px] h-9 px-4 has-[>svg]:px-3 text-white w-full mt-4 py-3 font-bold rounded-lg disabled:opacity-50 cursor-pointer" type="button" style={{ backgroundColor: 'rgb(231, 143, 19)' }}>Reserve for free</button>
          <div className="flex justify-center items-center mt-2 forMobile">
            <u className="text-lg opacity-50" style={{ cursor: 'pointer', color: 'black' }}>Free Cancellation</u>
          </div>
        </div>
      </div>

      {/* Rental Booking Requirements Modal */}
      {showRequirements && (
        <div className="fixed inset-0 z-50 bg-black/60">
          <div
            className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-white p-6 shadow-lg sm:max-w-md"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h2 className="text-lg leading-none font-semibold">
                Rental Booking Requirements
              </h2>
            </div>

            {/* Body */}
            <div className="py-3 text-slate-900 space-y-4 text-sm">
              <div>
                <h3 className="font-bold">For UAE Residents</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>UAE Driving License</li>
                  <li>Emirates ID (Residential Visa may be acceptable)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">For Tourists Visiting the UAE</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Passport</li>
                  <li>Home Country Driving License</li>
                  <li>International Driving Permit (IDP), if required</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">Contact Info</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Email ID</li>
                  <li>Phone Number</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShowRequirements(false)}
                className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white transition-colors"
              >
                Close
              </button>
            </div>

            {/* Close icon */}
            <button
              type="button"
              onClick={() => setShowRequirements(false)}
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

