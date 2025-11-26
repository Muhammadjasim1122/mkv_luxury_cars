export default function CarSpecifications({ car }) {
  return (
    <div className="p-[15px] md:p-[30px] bg-white rounded-lg overflow-hidden border border-gray-200">
      <h4 className="font-bold mb-4 text-[28px]">Car Specification</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* Year */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Year</div>
              <div>{car.specifications?.year || "2024"}</div>
            </div>
          </div>
        </div>

        {/* Color */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path d="M136.5 77.7l37 67L32 285.7 216.4 464l152.4-148.6 54.4-11.4L166.4 48l-29.9 29.7zm184 208H114.9l102.8-102.3 102.8 102.3zM423.3 304s-56.7 61.5-56.7 92.1c0 30.7 25.4 55.5 56.7 55.5 31.3 0 56.7-24.9 56.7-55.5S423.3 304 423.3 304z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Color</div>
              <div>{car.specifications?.color || "Gray"}</div>
            </div>
          </div>
        </div>

        {/* Luggage */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M17 6h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zm.75-12h-3V3.5h3V6zM16 18h-1.5V9H16v9z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Luggage</div>
              <div>{car.specifications?.luggage || "3 Bags"}</div>
            </div>
          </div>
        </div>

        {/* Doors */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path d="M149.6 41L42.88 254.4c23.8 24.3 53.54 58.8 78.42 97.4 24.5 38.1 44.1 79.7 47.1 119.2h270.3L423.3 41H149.6zM164 64h230l8 192H74l90-192zm86.8 17.99l-141 154.81L339.3 81.99h-88.5zM336 279h64v18h-64v-18z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Doors</div>
              <div>{car.specifications?.doors || "5"}</div>
            </div>
          </div>
        </div>

        {/* 0-100Km/h */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">0-100Km/h</div>
              <div>{car.specifications?.acceleration || "5.6 Sec"}</div>
            </div>
          </div>
        </div>

        {/* Seats */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5.35 5.64c-.9-.64-1.12-1.88-.49-2.79.63-.9 1.88-1.12 2.79-.49.9.64 1.12 1.88.49 2.79-.64.9-1.88 1.12-2.79.49zM16 19H8.93c-1.48 0-2.74-1.08-2.96-2.54L4 7H2l1.99 9.76A5.01 5.01 0 0 0 8.94 21H16v-2zm.23-4h-4.88l-1.03-4.1c1.58.89 3.28 1.54 5.15 1.22V9.99c-1.63.31-3.44-.27-4.69-1.25L9.14 7.47c-.23-.18-.49-.3-.76-.38a2.21 2.21 0 0 0-.99-.06h-.02a2.268 2.268 0 0 0-1.84 2.61l1.35 5.92A3.008 3.008 0 0 0 9.83 18h6.85l3.82 3 1.5-1.5-5.77-4.5z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Seats</div>
              <div>{car.specifications?.seats || "5"}</div>
            </div>
          </div>
        </div>

        {/* Cylinders */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Cylinders</div>
              <div>{car.specifications?.cylinders || "12"}</div>
            </div>
          </div>
        </div>

        {/* Engine */}
        <div className="px-1 mb-2">
          <div className="bg-gray-100 rounded-md p-5 border border-gray-300 h-full flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="me-2 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(231, 143, 19)', fontSize: '1.75rem' }}>
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
            </svg>
            <div>
              <div className="font-bold mb-1">Engine</div>
              <div>{car.specifications?.engine || "6.75 ltr"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

