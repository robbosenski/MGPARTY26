import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';

interface AboutProps {
  onJoinClick: () => void;
}

export function About({ onJoinClick }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 px-6"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-black/55 backdrop-blur-sm border border-white/10 rounded-3xl px-10 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white mb-12"
        >
          PARTY is back...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          For over four decades, Mardi Gras PARTY has been the night that brings us together - a celebration of freedom, connection and pure release. In 2026, it returns renewed and reimagined: bigger in spirit, bolder in sound, and brighter in every sense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={onJoinClick}
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-6 text-lg transition-all duration-300"
          >
            Stay Updated
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
