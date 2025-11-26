import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-8xl">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-black mb-6">
              Let's Talk
            </h1>
            <p className="text-base sm:text-lg md:text-[17px]  text-black max-w-9xl mx-auto leading-relaxed">
              Looking to rent luxury and supercars in Dubai? You're in the right place. Enjoy the ultimate driving experience with our exclusive fleet of high-end vehicles. From exotic supercars to premium luxury models, our rentals deliver unforgettable thrills you'll want to relive again and again.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-1xl sm:text-2xl font-bold text-black mb-6">
                Get in touch
              </h2>
              <form onSubmit={handleSubmit}>
                {/* First Name and Last Name in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 mb-3 gap-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-black">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Add your first name"
                      className="h-9 w-full min-w-0 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-[#df8c0c] focus-visible:ring-[#df8c0c]/50 focus-visible:ring-[3px] text-black placeholder:text-gray-400 placeholder:italic"
                      style={{ fontStyle: 'italic' }}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-black">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Add your last name"
                      className="h-9 w-full min-w-0 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-[#df8c0c] focus-visible:ring-[#df8c0c]/50 focus-visible:ring-[3px] text-black placeholder:text-gray-400 placeholder:italic"
                      style={{ fontStyle: 'italic' }}
                      required
                    />
                  </div>
                </div>

                {/* Email - full width */}
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="email" className="text-black">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-9 w-full min-w-0 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-[#df8c0c] focus-visible:ring-[#df8c0c]/50 focus-visible:ring-[3px] text-black placeholder:text-gray-400 placeholder:italic"
                    style={{ fontStyle: 'italic' }}
                    required
                  />
                </div>

                {/* Message - full width */}
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="message" className="text-black">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    className="flex min-h-16 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:border-[#df8c0c] focus-visible:ring-[#df8c0c]/50 focus-visible:ring-[3px] text-black placeholder:text-gray-400 placeholder:italic resize-y"
                    style={{ fontStyle: 'italic' }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-[20px] text-sm font-medium transition-all w-full text-white cursor-pointer h-9 px-4 py-2 bg-[#f0a83c] hover:bg-[#f0a83c]/90"
                  style={{ backgroundColor: 'rgb(240, 168, 60)', borderRadius: '20px', padding: '10px' }}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div>
              <h4 className="mb-0 mt-4 font-bold text-[22px] text-black">
                Contact Information
              </h4>
              
              <div className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Headquarters */}
                  <div>
                    <div className="flex items-start">
                      <div className="me-3 p-2 rounded-full bg-[#FFEFC1] flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A83C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h6 className="mb-1 font-bold text-black">Headquarters</h6>
                        <p className="mb-0 text-black">
                          No1, Plot 368-423,<br />
                          Al Quoz Industrial Area 3<br />
                          Dubai - UAE
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Branch */}
                  <div>
                    <div className="flex items-start">
                      <div className="me-3 p-2 rounded-full bg-[#FFEFC1] flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A83C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h6 className="mb-1 font-bold text-black">Branch</h6>
                        <p className="mb-0 text-black" style={{ width: '230px' }}>
                          Ground Floor, Adagio Premium West Beach The Palm Jumeirah Dubai - UAE
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-start">
                      <div className="me-3 p-2 rounded-full bg-[#FFEFC1] flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A83C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                      </div>
                      <div>
                        <h6 className="mb-1 font-bold text-black">Email Us</h6>
                        <p className="mb-0 text-black">contact@mkvluxury.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div>
                    <div className="flex items-start">
                      <div className="me-3 p-2 rounded-full bg-[#FFEFC1] flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A83C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                        </svg>
                      </div>
                      <div>
                        <h6 className="mb-1 font-bold text-black">Contact Number</h6>
                        <p className="mb-0 text-black">+971 56 279 4545</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-1" style={{ position: 'relative', paddingBottom: '35%', height: '0px', overflow: 'hidden', borderRadius: '10px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9559.161925762517!2d55.21482371943514!3d25.130729685759622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6939c70c2a57%3A0x1b13f0e789cf1955!2sMKV%20LUXURY%20CAR%20RENTAL!5e0!3m2!1sen!2s!4v1745568860373!5m2!1sen!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '90%', border: '0px', borderRadius: '10px' }}
                  title="MKV Luxury Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

