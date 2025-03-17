"use client";

import FeatureCard from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import Ticker from "@/components/Ticker";
import { Presentation } from "lucide-react";
import { motion } from "motion/react";

// Svgs - Reusing the booth demos svg for this example
import BoothDemosSvg from "@/components/svg/BoothDemos.svg";

// Booth data
const BOOTH_DATA = [
  {
    title: "AI Project",
    description:
      "An innovative AI project showcasing the latest in machine learning.",
    icon: BoothDemosSvg,
    buttonIcon: Presentation,
    buttonText: "Learn More",
    href: "/booths/ai-project",
    initialRotation: 4.7,
    delay: 0.1,
  },
  {
    title: "Hardware Demo",
    description: "Showcasing cutting-edge hardware innovations and prototypes.",
    icon: BoothDemosSvg,
    buttonIcon: Presentation,
    buttonText: "See Details",
    href: "/booths/hardware-demo",
    initialRotation: -3.2,
    delay: 0.2,
  },
  {
    title: "Web3 Project",
    description:
      "Exploring decentralized applications and blockchain technology.",
    icon: BoothDemosSvg,
    buttonIcon: Presentation,
    buttonText: "Explore",
    href: "/booths/web3-project",
    initialRotation: 5.1,
    delay: 0.3,
  },
  {
    title: "Design Showcase",
    description: "Beautiful design work from talented creators.",
    icon: BoothDemosSvg,
    buttonIcon: Presentation,
    buttonText: "View Designs",
    href: "/booths/design-showcase",
    initialRotation: -4.9,
    delay: 0.4,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="container py-8">
        <motion.h1
          className="text-4xl md:text-5xl font-medium tracking-tight font-tiempos"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Booth Demos
        </motion.h1>
        <motion.h2
          className="text-lg tracking-tight mt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Interactive demos from our talented creators.
        </motion.h2>
      </div>

      <Ticker text="BOOTH DEMOS" className="mt-8" />

      <div className="py-8 md:py-16 bg-zinc-950 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-5xl mx-auto gap-8 md:gap-12 justify-items-center">
          {BOOTH_DATA.map((booth) => (
            <motion.div
              key={booth.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: booth.delay }}
              className="h-full"
            >
              <FeatureCard
                title={booth.title}
                description={booth.description}
                icon={booth.icon}
                buttonIcon={booth.buttonIcon}
                buttonText={booth.buttonText}
                href={booth.href}
                initialRotation={booth.initialRotation}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
