"use client";
import FeatureCards from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { SocraticaLogo } from "@/components/icons/SocraticaLogo";
import { InfoSection } from "@/components/InfoSection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/rive/Hero";
import { useRiveStore } from "@/stores/riveStore";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  const { isRiveLoaded, reset } = useRiveStore();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <main className="min-h-screen bg-gradient-to-b text-black">
      <AnimatePresence>{!isRiveLoaded && <LoadingScreen />}</AnimatePresence>
      {/* Header section with improved desktop spacing */}
      <div className="bg-[#f8f3e3] pb-16">
        {/* Main content with improved desktop layout */}
        <div className="max-w-7xl mx-auto mt-8 px-6 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-tiempos tracking-tight font-normal">
              Symposium Hub
            </h1>
            {/* <p className="text-lg mt-2">info, for the love of making ;)</p> */}
            <div className="mt-8 space-y-6 md:space-y-8 font-5by7 font-bold uppercase tracking-wider opacity-90 text-[0.95rem] md:text-base">
              <motion.div
                className="uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                MARCH 19, 2025
                <br />
                <div className="text-zinc-500">WATERLOO REC CENTER</div>
              </motion.div>
              <motion.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                WATERLOO MEMORIAL RECREATION COMPLEX
                <br />
                <div className="text-zinc-500">IN-PERSON & VIRTUAL</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.a
            className="mt-10 md:mt-0 block"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.63, duration: 0.5, ease: "easeOut" }}
            href="https://www.youtube.com/watch?v=mkJjbCQC_Qs"
          >
            <motion.div
              whileTap={{ scale: 0.98 }}
              whileHover={{
                scale: 1.01,
                transition: {
                  ease: "easeOut",
                  duration: 0.1,
                },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="glassmorphic-light-button border-[1px] border-[#FFFFFF52] bg-zinc-950 gap-3 justify-center px-12 md:px-16 flex items-center">
                <SocraticaLogo className="w-[16px] md:w-[20px] text-white" />
                <div className="text-[#F5F1E2] tracking-widest font-5by7 font-bold uppercase text-sm">
                  Watch livestream
                </div>
              </div>
            </motion.div>
          </motion.a>
        </div>
      </div>

      {/* Hero Section with Orbital Animation - improved height for desktop */}
      {/* <motion.section
        className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Graphic
      </motion.section> */}
      <div className="bg-gradient-to-b from-black to-zinc-900">
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/dither.png')] bg-cover opacity-25 z-0"></div>
          <div className="relative z-10">
            <Hero />
            {isRiveLoaded && (
              <>
                <FeatureCards title="Welcome to the World's Best Demo Day." />
                <InfoSection />
                <Footer />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
