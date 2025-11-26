export default function CarDeliveryFees({ car }) {
  return (
    <div className="p-[15px] md:p-[30px] rounded-lg border border-gray-200 bg-white">
      <h4 className="font-bold mb-4 text-[28px]">Delivery &amp; Pickup Fee</h4>
      <div className="flex font-medium px-3 mb-2" style={{ color: 'rgb(85, 85, 85)' }}>
        <div style={{ flexBasis: '40%' }}>City</div>
        <div style={{ flexBasis: '30%', textAlign: 'center' }}>Delivery Fee</div>
        <div style={{ flexBasis: '30%', textAlign: 'right' }}>Pickup Fee</div>
      </div>
      {(car.deliveryFees || []).map((fee, index) => (
        <div key={index} className="flex px-3 py-2" style={{ backgroundColor: 'rgb(245, 245, 245)', borderRadius: '6px', marginBottom: '8px' }}>
          <div style={{ flexBasis: '40%' }}>{fee.city}</div>
          <div style={{ flexBasis: '30%', textAlign: 'center' }}>{fee.delivery}</div>
          <div style={{ flexBasis: '30%', textAlign: 'right' }}>{fee.pickup}</div>
        </div>
      ))}
    </div>
  );
}

