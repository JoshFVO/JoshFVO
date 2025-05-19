import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Lightbox({
    expandedSrc,
    setExpandedSrc,
    isPortrait,
    setIsPortrait,
    }: {
    expandedSrc: string | null;
    setExpandedSrc: (src: string | null) => void;
    isPortrait: boolean;
    setIsPortrait: (isPortrait: boolean) => void;
    }) {
    return (
       <AnimatePresence>
        {expandedSrc && (
          <motion.div
            key="lightbox-overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, when: "afterChildren" }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setExpandedSrc(null)}
          >
            <motion.img
              layoutId={expandedSrc}
              src={expandedSrc}
              alt="Expanded"
              onLoad={e => {
                const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                setIsPortrait(h > w);
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={isPortrait ? "max-h-full" : "max-w-full"}
            />
            <Button
              onClick={() => setExpandedSrc(null)}
              className=" absolute top-16 right-16 rounded-full w-14 h-14 text-12 bg-[#2F5233] text-[#B1D8B7] transition-colors duration-400 ease-in-out hover:bg-[#28452b]"
            >
              <X /> {/* Use the 'size' prop for Lucide icons */}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    );
    }