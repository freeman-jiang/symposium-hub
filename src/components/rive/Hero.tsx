"use client";
import { useRiveStore } from "@/stores/riveStore";
import { useRive } from "@rive-app/react-canvas";
import { motion } from "motion/react";

export const Hero = () => {
  const { setRiveLoaded } = useRiveStore();

  const { RiveComponent } = useRive(
    {
      src: "/hero.riv",
      autoplay: true,
      onLoad: () => {
        console.log("Hero Rive component loaded");
        setRiveLoaded(true);
      },
    },
    {
      fitCanvasToArtboardHeight: true,
    }
  );

  return (
    <motion.section
      className="relative w-full h-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <RiveComponent className="w-full h-full" />
    </motion.section>
  );
};
