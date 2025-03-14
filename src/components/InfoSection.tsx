"use client";
import { motion } from "motion/react";
import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { InfoLink } from "./InfoLink";
import { StarsBackground } from "./StarsBackground";
import BurritoSvg from "./svg/burrito.svg";

export type InfoSectionProps = HTMLAttributes<HTMLDivElement>;

export const InfoSection = ({ className, ...props }: InfoSectionProps) => {
  return (
    <section
      className={cn(
        "container mx-auto px-4 py-16 md:py-24 lg:py-32 relative",
        className
      )}
      {...props}
    >
      <StarsBackground />
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
  );
};
