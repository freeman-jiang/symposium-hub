"use client";
import { Button } from "@/components/Button";
import { SocraticaLogo } from "@/components/icons/SocraticaLogo";
import { InfoLink } from "@/components/InfoLink";
import { Presentation, Sparkles, Users, Waypoints } from "lucide-react";
import { motion } from "motion/react";

// Svgs
import BoothDemosSvg from "@/components/svg/BoothDemos.svg";
import FindPeopleSvg from "@/components/svg/FindPeople.svg";
import MatchmakingGraphSvg from "@/components/svg/MatchmakingGraph.svg";
import StageDemosSvg from "@/components/svg/StageDemos.svg";

import BurritoSvg from "@/components/svg/burrito.svg";
import ShopifyGuySvg from "@/components/svg/ShopifyGuy.svg";
import VapiSvg from "@/components/svg/VAPI.svg";
import VercelSvg from "@/components/svg/VercelLogo.svg";

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

      {/* Feature Cards with improved desktop spacing */}
      <section className="container px-4 mx-auto py-16 md:py-24 lg:py-32 text-white">
        <motion.h2
          className="font-tiempos text-3xl md:text-4xl lg:text-5xl text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Welcome to the World&apos;s Best Demo Day.
        </motion.h2>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-8 max-w-7xl mx-auto">
            {/* Feature card 1 */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.div
                initial={{ rotate: -4.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ rotate: 0 }}
              >
                <FindPeopleSvg className="px-8 md:px-6 w-full max-w-[300px]" />
              </motion.div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Find People
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Users className="size-4" />}
                  text="Find people"
                  className="mt-4"
                />
              </div>
            </motion.div>

            {/* Feature card 2 */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                initial={{ rotate: 6.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ rotate: 0 }}
              >
                <StageDemosSvg className="px-8 md:px-6 w-full max-w-[300px]" />
              </motion.div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Stage Demos
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Sparkles className="size-4" />}
                  text="Stage Demos"
                  className="mt-4"
                />
              </div>
            </motion.div>

            {/* Feature card 3 */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                initial={{ rotate: -5.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ rotate: 0 }}
              >
                <MatchmakingGraphSvg className="px-8 md:px-6 w-full max-w-[300px]" />
              </motion.div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Matchmaking Graph
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Waypoints className="size-4" />}
                  text="Graph"
                  className="mt-4"
                />
              </div>
            </motion.div>

            {/* Feature card 4 */}
            <motion.div
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div
                initial={{ rotate: 4.7 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ rotate: 0 }}
              >
                <BoothDemosSvg className="px-8 md:px-6 w-full max-w-[300px]" />
              </motion.div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Booth Demos
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Presentation className="size-4" />}
                  text="Booth Demos"
                  className="mt-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* Sponsors with improved desktop spacing */}
      <div className="bg-[#f8f3e3] grid-pattern-vignette">
        <footer className="container mx-auto px-4 py-16 md:py-24 text-center">
          <motion.p
            className="uppercase text-xs md:text-sm text-zinc-600 mb-8 md:mb-12 font-5by7 font-bold tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            This event would not be possible without...
          </motion.p>
          <motion.a
            href="https://shopify.com"
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ShopifyGuySvg className="mx-auto h-[6.3rem] md:h-[8rem] w-auto" />
          </motion.a>
          <div className="items-center justify-between md:justify-center md:gap-10 lg:gap-16 flex flex-row px-2 mt-10 md:mt-16">
            <motion.a
              href="https://vapi.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <VapiSvg className="h-[18px] md:h-[22px]" />
            </motion.a>
            <motion.div
              className="bg-zinc-400 h-[24px] w-[1px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            ></motion.div>
            <motion.a
              href="https://www.velocityincubator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="/velocity.png"
                className="h-[27px] md:h-[33px] invert-0 brightness-0 mb-1"
              />
            </motion.a>
            <motion.div
              className="bg-zinc-400 h-[24px] w-[1px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
            ></motion.div>
            <motion.a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <VercelSvg className="h-[20px] md:h-[23px] invert-0 brightness-0" />
            </motion.a>
          </div>
          <motion.div
            className="mt-12 md:mt-16 px-4 py-2.5 border border-[#A4A4A4]/30 bg-white transition-shadow duration-300 font-5by7 font-medium uppercase tracking-wider w-fit mx-auto text-zinc-600"
            style={{
              boxShadow:
                "0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 7px rgba(0, 0, 0, 0.08);",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p className="text-xs md:text-sm">
              DEV{" "}
              <a
                href="https://twitter.com/freemanjiangg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold relative inline-block transition-colors hover:text-zinc-500/90"
              >
                <span className="relative inline-block">FREEMAN</span>
              </a>{" "}
              ✗ DESIGN{" "}
              <a
                href="https://twitter.com/userisgrotesque"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold relative inline-block transition-colors hover:text-zinc-500/90"
              >
                <span className="relative inline-block">AILEEN</span>
              </a>
            </p>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
