export default function CarFeatures({ car }) {
  return (
    <div className="p-[15px] md:p-[30px] rounded-lg border border-gray-200 bg-white">
      <h4 className="font-bold mb-4 text-[28px]">Car Features</h4>
      <div className="w-full">
        <ul className="list-none flex flex-wrap">
          {(car.features || []).map((feature, index) => (
            <li key={index} className="mb-2 flex items-center w-1/2">
              <span className="me-3" style={{ color: 'rgb(141, 141, 141)', fontWeight: '900' }}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

