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
                <svg 
                  viewBox="0 0 89 52.1" 
                  className="h-6 w-auto flex-shrink-0"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M87 14.7C86.9 6 78.8 1.5 75.1.9Q72.7.45 70.3.6v4.6c1.3-.1 2.6 0 4 .3 2.1.4 8 3.3 8.1 9.4.1 5.6-4.1 8.5-4.6 8.8-.3.2-.6.5-.9.8-.6 1.1-.3 2.4.7 3 0 0 .1 0 .1.1.2.1 4.8 3 4.7 8.9-.1 6-6 9-8.1 9.4C68.4 47 62.7 45 57.5 40c-6.3-6-9.6-11.9-10.8-14.3l-2.5-4.9C42.2 17.4 39 12.7 34 8 27.6 1.9 20.6-.5 13.2.9 9.6 1.5 1.5 6 1.4 14.7c-.1 5.3 2.4 8.8 4.4 10.9-2 2-4.5 5.6-4.5 10.9.1 8.7 8.2 13.1 11.8 13.8 1.3.2 2.7.4 4 .4.7 0 1.4 0 2.1-.1V46c-1.7.2-3.5.2-5.2-.1-2.1-.4-8-3.3-8.1-9.4-.1-5.6 4-8.4 4.6-8.8.4-.2.7-.5.9-.8.6-1 .3-2.4-.7-3 0 0-.1 0-.1-.1-.2-.1-4.8-3-4.7-8.9.1-6 6-9 8.1-9.4 5.9-1.1 11.6.9 16.8 5.9 4.6 4.4 7.6 8.6 9.3 11.6l1.4 2.7 2.5 4.8s1.3 2 1.6 2.5l.1.1c2 2.9 4.7 6.4 8.5 10 5.2 5 10.9 7.5 16.8 7.5 1.3 0 2.6-.1 4-.4 3.7-.7 11.7-5.1 11.9-13.8.1-5.3-2.4-8.9-4.5-10.9 2.1-2 4.7-5.5 4.6-10.8" fill="white"/>
                  <path d="M30.9 39.8c-.4.4-.8.8-1.2 1.1l-.3.3c-.3.3-.7.6-1 .8-.1.1-.2.1-.2.2-.4.3-.9.6-1.3.9-.1 0-.1.1-.2.1-.4.2-.8.5-1.2.7-.1 0-.2.1-.2.1-.9.5-1.8.9-2.8 1.2-.1 0-.1 0-.2.1-.5.1-.9.3-1.4.4l-1.5.3v4.6l1.8-.3h.2c.6-.1 1.2-.3 1.8-.4.1 0 .1 0 .2-.1l1.8-.6h.1c.6-.2 1.2-.5 1.8-.8s1.1-.6 1.7-.9c.1 0 .1-.1.2-.1.5-.3 1.1-.7 1.6-1.1.1-.1.2-.1.3-.2.5-.4 1-.8 1.6-1.2l.2-.2c.5-.5 1.1-.9 1.6-1.4 5-4.8 8.2-9.4 10.2-12.7L42 25.8c-1.6 2.2-4.9 8.1-11.1 14m26.6-28.5c4.1-3.9 8.4-5.9 12.9-6.2V.5c-5.6.2-11 2.7-16 7.5s-8.2 9.4-10.2 12.7l2.5 4.9c1.2-2.4 4.5-8.3 10.8-14.3" fill="white"/>
                  <path d="M19.3 45.9c-.2 0-.5 0-.7.1v4.6h1V46c-.1-.1-.2-.1-.3-.1m51-40.8h.7V.5h-1v4.6z" fill="white"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
