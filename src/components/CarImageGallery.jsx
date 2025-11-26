import { getBrandLogo } from "./CarDetails";

export default function CarImageGallery({ 
  car, 
  onViewMore, 
  isGalleryOpen, 
  allImages, 
  currentImageIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onKeyDown 
}) {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-row gap-5 items-center md:items-start mb-8">
        {/* Brand Logo */}
        <div>
          <img
            src={getBrandLogo(car.brand)}
            alt={`${car.title} Logo`}
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            className="w-[80px] h-[80px] object-cover"
          />
        </div>

        {/* Title and Badge */}
        <div className="text-left flex-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 ps-2">
            {car.title}
          </h1>
          {car.categories && car.categories.length > 0 && (
            <div className="flex flex-wrap justify-start ps-2 gap-5">
              {car.categories.map((category, index) => (
                <span
                  key={index}
                  className="cat px-2 py-1 rounded text-sm me-2"
                  style={{
                    backgroundColor: 'rgb(241, 202, 146)',
                    color: 'rgb(121, 85, 72)',
                    marginBottom: '4px'
                  }}
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Share Icon */}
        <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFEFC1] rounded-full flex items-center justify-center hover:bg-[#f0dda8] transition-colors flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A83C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>

      {/* Main Content - Image Gallery */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {/* Large Main Image - Left */}
        <div className="relative">
          {/* Badge overlay - visible on mobile only (hidden on md+) */}
          <div className="flex [@media(min-width:900px)]:hidden absolute top-5 right-5 items-center gap-2 bg-green-500 font-semibold px-3 py-1 rounded-[6px] text-normal z-10">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <span className="flex items-center mt-0.5">2 Digit Plate with Driver</span>
          </div>
          <img
            src={car.mainImage}
            alt={`${car.title} main view`}
            width="1200"
            height="600"
            decoding="async"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Gallery Images - Right Column (2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {car.galleryImages.slice(0, 4).map((image, index) => (
            <div key={index} className="w-full relative px-1">
              <img
                src={image}
                alt={`${car.title} view ${index + 2}`}
                loading="lazy"
                width="600"
                height="300"
                decoding="async"
                className="w-full h-full object-cover rounded-lg"
              />
              {index === 3 && (
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  onClick={onViewMore}
                >
                  <div className="text-center flex flex-col justify-center items-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="white" className="mb-0" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }}>
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                    <div className="text-white font-bold">View More</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {isGalleryOpen && car && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={onClose}
          onKeyDown={onKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full p-2 transition-all"
            aria-label="Close gallery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[currentImageIndex]}
              alt={`${car.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 text-white transition-all z-10"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
