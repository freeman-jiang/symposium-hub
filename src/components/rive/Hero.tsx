"use client";
import { useRiveStore } from "@/stores/riveStore";
import { useRive } from "@rive-app/react-canvas";
import { motion } from "motion/react";

export const Hero = () => {
  const { setRiveLoaded, isRiveLoaded } = useRiveStore();

  const { RiveComponent: RiveDesktop } = useRive(
    {
      src: "/riv/big_up.riv",
      autoplay: true,
      onLoad: () => {
        console.log("Desktop Rive component loaded");
        setTimeout(() => {
          setRiveLoaded(true);
        }, 200); // TODO: max max of this and actual
      },
    },
    {
      fitCanvasToArtboardHeight: true,
    }
  );

  const { RiveComponent: RiveMobile } = useRive(
    {
      src: "/riv/mobiel.riv",
      autoplay: true,
      onLoad: () => {
        console.log("Mobile Rive component loaded");
        setTimeout(() => {
          setRiveLoaded(true);
        }, 200); // TODO: max max of this and actual
      },
    },
    { fitCanvasToArtboardHeight: true }
  );

  return (
    <motion.section
      className="relative w-full h-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white"
      initial={{ opacity: 0.25 }}
      animate={{ opacity: isRiveLoaded ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <RiveDesktop className="w-full h-full hidden sm:block" />
      <RiveMobile className="w-full h-full block sm:hidden" />
    </motion.section>
  );
};
