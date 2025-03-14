"use client";
import FeatureCards from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { SocraticaLogo } from "@/components/icons/SocraticaLogo";
import { InfoLink } from "@/components/InfoLink";
import { motion } from "motion/react";

// Svgs

import BurritoSvg from "@/components/svg/burrito.svg";

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

      {/* Socratica Section with improved grid for desktop */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <BurritoSvg className="w-full px-4 md:px-0 md:max-w-4xl md:mx-auto" />
          </motion.div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <InfoLink
                title="Getting to Waterloo"
                description="In-person & Virtual"
                url="https://www.google.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <InfoLink
                title="Accommodation"
                description="Places to stay in Waterloo."
                url="https://www.google.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <InfoLink
                title="Calendar"
                description="Events board"
                url="https://calendar.symposium.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <InfoLink
                title="Local Attractions & Dining"
                description="Things to do and eat in Waterloo."
                url="https://local.symposium.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <InfoLink
                title="About Socratica"
                description="Learn more about Socratica and the Socratica Commons"
                url="https://socratica.org"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <InfoLink
                title="Our Code of Conduct"
                description="Set of guidelines you'll need to adhere to at our events."
                url="https://symposium.com/code-of-conduct"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use the new Footer component */}
      <Footer />
    </main>
  );
}
