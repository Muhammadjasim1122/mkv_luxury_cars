export default function CarDescription({ car }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200" style={{ padding: '30px' }}>
      <h4 className="font-bold mb-4 text-[28px]">Description</h4>
      {car.description ? (
        <div 
          className="text-slate-700 mb-0 text-[18px] description-styles"
          dangerouslySetInnerHTML={{ __html: car.description }}
        />
      ) : (
        <div className="text-slate-700 mb-0 text-[18px]">
          <p>No description available for this vehicle.</p>
        </div>
      )}
    </div>
  );
}

