import { motion } from 'motion/react';
import { Button } from './ui/button';

interface HeroProps {
  onSignupClick: () => void;
}

export function Hero({ onSignupClick }: HeroProps) {
  const edgePadding = 'clamp(1px, 0.5vw, 8px)';
  const bottomPadding = 'calc(env(safe-area-inset-bottom, 0px) + clamp(1px, 0.5vw, 8px))';

  return (
    <section
      className="relative flex flex-col overflow-hidden hero-section pb-safe"
      style={{ marginTop: '112px' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/video/MGAP_WebVideo_9x16.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/video/langing-bg-v2.mp4" type="video/mp4" />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-people-dancing-in-a-nightclub-with-colored-lights-42849-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/15 via-transparent to-pink-900/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 w-full flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-full"
          style={{ paddingLeft: edgePadding, paddingRight: edgePadding, paddingTop: `calc(${edgePadding} + clamp(8px, 1.4vw, 20px))` }}
        >
          <img
            src="/logos/ECSTATICA-MARDI-GRAS_LOGOSEcstatica_Hot-Pink.svg"
            alt="Ecstatica Mardi Gras logo"
            className="w-full h-auto"
          />
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-0 sm:px-8 lg:px-16 gap-4 sm:gap-6">
          <div className="flex flex-col items-center gap-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-white text-[clamp(1.1rem,5.4vw,2rem)] md:text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold tracking-[0.002em] uppercase leading-[0.9] whitespace-nowrap"
            >
              MARDI GRAS PARTY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-white text-[clamp(1.2rem,5.6vw,2.1rem)] md:text-[clamp(1.8rem,2.8vw,2.6rem)] font-semibold tracking-[0.001em] uppercase leading-[0.9]"
            >
              FEB 28 2026
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <Button
              onClick={onSignupClick}
              size="lg"
              className="bg-[#d900ed] hover:bg-[#e238ff] text-white px-6 py-3 sm:px-10 sm:py-5 text-sm sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Stay in the loop
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-shrink-0 w-full"
          style={{ paddingLeft: edgePadding, paddingRight: edgePadding, paddingBottom: bottomPadding }}
        >
          <img
            src="/logos/ECSTATICA-MARDI-GRAS_LOGOSMardi-Gras_Hot-Pink.svg"
            alt="Mardi Gras wordmark"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Scroll indicator removed for tighter layout */}
    </section>
  );
}
