"use client";
import FeatureCards from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { SocraticaLogo } from "@/components/icons/SocraticaLogo";
import { InfoSection } from "@/components/InfoSection";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-black">
      {/* Header section with improved desktop spacing */}
      <div className="bg-[#f8f3e3]">
        {/* Main content with improved desktop layout */}
        <div className="max-w-7xl mx-auto mt-8 px-6 pb-16 md:pb-24 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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

          <motion.div
            className="mt-10 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <div className="glassmorphic-light-button border-[1px] border-[#FFFFFF52] bg-zinc-950 gap-3 justify-center px-12 md:px-16 transition-transform">
              <SocraticaLogo className="w-[16px] md:w-[20px] text-white" />
              <div className="text-[#F5F1E2] tracking-widest font-5by7 font-bold uppercase text-[11px] sm:text-[16px]">
                Get tickets
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Section with Orbital Animation - improved height for desktop */}
      <motion.section
        className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Graphic
      </motion.section>

      {/* Feature Cards Section - Now using the FeatureCards component */}
      <FeatureCards title="Welcome to the World's Best Demo Day." />

      {/* Socratica Section using the InfoSection component */}
      <InfoSection />

      {/* Use the new Footer component */}
      <Footer />
    </main>
  );
}
