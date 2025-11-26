export default function Logo() {
  return (
    <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
      <img
        src="/mkv-logo-main.svg"
        alt="MKV Luxury Car Rental Logo"
        className="h-full w-full rounded-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
