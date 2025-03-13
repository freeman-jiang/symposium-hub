"use client";

import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="container">
        <h1 className="text-4xl font-medium tracking-tight font-tiempos">
          Stage Demos
        </h1>
        <h2 className="text-base tracking-tight mt-2">
          12 demos spanning art, tech, engineering.
        </h2>
      </div>

      <div className="w-full bg-black py-3 overflow-hidden">
        <div className="whitespace-nowrap overflow-hidden">
          <motion.div
            className="inline-block"
            animate={{
              x: "-40rem",
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Lol this is not actually infinite but good enough */}
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className="inline-block text-white font-5by7 font-bold tracking-wider px-2"
                >
                  {
                    "STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS • STAGE DEMOS"
                  }
                </span>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
