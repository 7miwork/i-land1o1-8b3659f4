export function OceanBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="ocean-bg relative">
      {/* Floating pixel clouds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-[8%] top-[12%] float-slow opacity-90">
          <PixelCloud className="w-24 md:w-36" />
        </div>
        <div className="absolute right-[10%] top-[6%] float-slow opacity-80" style={{ animationDelay: "1.5s" }}>
          <PixelCloud className="w-32 md:w-48" />
        </div>
        <div className="absolute left-[35%] top-[22%] float-slow opacity-70" style={{ animationDelay: "3s" }}>
          <PixelCloud className="w-20 md:w-28" />
        </div>
      </div>
      {children}
      {/* Waves at bottom */}
      <div className="ocean-bg-waves" aria-hidden />
    </div>
  );
}

function PixelCloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <g fill="#ffffff">
        <rect x="10" y="15" width="60" height="15" />
        <rect x="15" y="10" width="45" height="5" />
        <rect x="20" y="5" width="30" height="5" />
        <rect x="5" y="20" width="5" height="10" />
        <rect x="70" y="20" width="5" height="10" />
      </g>
    </svg>
  );
}
