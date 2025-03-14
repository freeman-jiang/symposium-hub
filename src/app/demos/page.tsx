"use client";

import DemoCard from "@/components/DemoCard";
import Ticker from "@/components/Ticker";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <motion.h1
          className="text-4xl font-medium tracking-tight font-tiempos"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Stage Demos
        </motion.h1>
        <motion.h2
          className="text-base tracking-tight mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          12 demos spanning art, tech, engineering.
        </motion.h2>
      </div>

      <Ticker text="STAGE DEMOS" className="mt-8" />

      <div className="py-8 md:py-16 bg-zinc-950">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 6) * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <DemoCard
                  title="Neural Interface for Creative Expression"
                  author="Marcus Lee & Team"
                  description="Experience a groundbreaking neural interface that translates brain activity directly into visual and musical expression. This demo showcases how the gap between imagination and creation can be bridged with non-invasive BCI technology."
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
