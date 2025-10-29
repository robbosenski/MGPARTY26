export function TickerBanner() {
  const message = "MARDI GRAS PARTY RETURNS. FEB 28 2026.";
  
  // Repeat the message multiple times for seamless scrolling
  const items = Array(20).fill(message);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ticker-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .ticker-content {
            display: flex;
            align-items: center;
            animation: ticker-scroll 60s linear infinite;
            will-change: transform;
          }

          @media (max-width: 768px) {
            .ticker-content {
              animation-duration: 36s;
            }
          }
          
          .ticker-content:hover {
            animation-play-state: paused;
          }
        `
      }} />
      
      <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 overflow-hidden h-12">
        <div className="overflow-hidden h-full">
          <div className="ticker-content h-full">
            {items.map((item, index) => (
              <div key={index} className="inline-flex items-center gap-4 px-4 flex-shrink-0 h-full">
                <span className="text-white font-semibold whitespace-nowrap">{item}</span>
                <img
                  src="/logos/MG26_Logo_White%20Icon.svg"
                  alt="MG26 icon"
                  className="h-6 w-auto flex-shrink-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
