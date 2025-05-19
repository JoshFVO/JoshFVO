import { ReactLenis } from 'lenis/react'
import Navbar from "@/components/navbar";
import { Gallery } from "@/components/photography/gallery";
import { ParallaxImages } from "@/components/photography/parallax";
import { CenterImage } from '@/components/photography/center';
import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Singapore from '@/components/photography/singapore';
import Malaysia from '@/components/photography/malaysia';
import Lightbox from '@/components/photography/lightbox';


const SECTION_HEIGHT = 1500;

const slideVariants = {
  initialLeft: { x: -200, opacity: 0 },
  initialRight: { x: 200, opacity: 0 },
  animateCenter: { x: 0, opacity: 1 },
  exitLeft: { x: -200, opacity: 0 },
  exitRight: { x: 200, opacity: 0 },
};




export default function SmoothScrollHero() {

  const [expandedSrc, setExpandedSrc] = useState<string | null>(null);
  const [area, setArea] = useState("main");

  return (
    <div className="bg-zinc-950">
      {/* Slide in/out between main */}
      <AnimatePresence initial={false} mode="wait">
        {area === "main" ? (
          <div className="bg-zinc-950">
            <motion.div
              key="main"
              variants={slideVariants}
              initial="initialLeft"
              animate="animateCenter"
              exit="exitLeft"
            >
              <ReactLenis
                root
                options={{
                  lerp: 0.05,
                }}
              >
                <Navbar />
                <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
                  <CenterImage />
                  <ParallaxImages />
                  <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
                </div>
                <Gallery setArea={setArea} />
              </ReactLenis>
            </motion.div>
          </div>
        ) : area === "singapore" ? (
          <motion.div
            key="singapore"
            variants={slideVariants}
            initial="initialRight"
            animate="animateCenter"
            exit="exitRight"
            className="h-screen bg-[#2F5233] flex-col justify-center px-4 overflow-x-auto relative"
          >
            <Singapore setArea={setArea} setExpandedSrc={setExpandedSrc} />
          </motion.div>

        ) : area === "malaysia" ? (
          <motion.div
            key="malaysia"
            variants={slideVariants}
            initial="initialRight"
            animate="animateCenter"
            exit="exitRight"
            className="h-screen bg-[#732636]  flex-col justify-center px-4 overflow-x-auto relative"
          >
            <Malaysia setArea={setArea} setExpandedSrc={setExpandedSrc} />
          </motion.div>
        ) : (
          <div>

          </div>
        )

        }
      </AnimatePresence>

      <Lightbox
        expandedSrc={expandedSrc}
        setExpandedSrc={setExpandedSrc}
        isPortrait={false}
        setIsPortrait={() => {}}
      />
      
    </div>
  );
}
