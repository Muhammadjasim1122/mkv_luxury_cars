export default function CarPricing({ car }) {
  return (
    <div className="p-[15px] md:p-[30px] rounded-lg border border-gray-200 bg-white">
      <h4 className="font-bold mb-4 text-[28px]">Rental Duration &amp; Pricing</h4>
      <div className="flex text-center flex-wrap">
        <div className="flex flex-grow flex-col py-3 px-4" style={{ backgroundColor: 'rgb(255, 248, 240)', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', cursor: 'pointer' }}>
          <div className="font-bold" style={{ color: 'rgb(183, 110, 0)', fontSize: '20px' }}>{car.pricing?.daily || car.price} AED</div>
          <div style={{ fontSize: '14px', color: 'rgb(51, 51, 51)' }}>/ day</div>
        </div>
        <div className="flex flex-grow flex-col py-3 px-4" style={{ backgroundColor: 'rgb(255, 193, 7)', cursor: 'pointer' }}>
          <div className="font-bold" style={{ color: 'rgb(183, 110, 0)', fontSize: '20px' }}>{car.pricing?.weekly || (car.price * 6)} AED</div>
          <div style={{ fontSize: '14px', color: 'rgb(51, 51, 51)' }}>/ week</div>
        </div>
        <div className="flex flex-grow flex-col py-3 px-4" style={{ backgroundColor: 'rgb(255, 248, 240)', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', cursor: 'pointer' }}>
          <div className="font-bold" style={{ color: 'rgb(183, 110, 0)', fontSize: '20px' }}>{car.pricing?.monthly || (car.price * 21)} AED</div>
          <div style={{ fontSize: '14px', color: 'rgb(51, 51, 51)' }}>/ month</div>
        </div>
      </div>
      <div className="border border-gray-200 mt-3 p-3 rounded-lg" style={{ borderColor: 'rgb(224, 224, 224)' }}>
        <div className="flex justify-between">
          <span className="text-gray-500">Included mileage limit</span>
          <span className="font-medium">{car.pricing?.includedMileage || `${car.kmIncluded} KM`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Additional mileage charge</span>
          <span className="font-medium">{car.pricing?.additionalMileageCharge || "30 AED / KM"}</span>
        </div>
      </div>
    </div>
  );
}

