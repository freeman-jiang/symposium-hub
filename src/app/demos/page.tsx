"use client";

import DemoCard from "@/components/DemoCard";
import Ticker from "@/components/Ticker";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <div className="">
          <h1 className="text-4xl font-medium tracking-tight font-tiempos">
            Stage Demos
          </h1>
          <h2 className="text-base tracking-tight mt-2">
            12 demos spanning art, tech, engineering.
          </h2>
        </div>
      </div>

      <Ticker text="STAGE DEMOS" className="mt-8" />

      <div className="py-4 bg-zinc-950">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center space-y-16 mt-8">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <DemoCard
                key={i}
                title="Neural Interface for Creative Expression"
                author="Marcus Lee & Team"
                description="Experience a groundbreaking neural interface that translates brain activity directly into visual and musical expression. This demo showcases how the gap between imagination and creation can be bridged with non-invasive BCI technology."
              />
            ))}
        </div>
      </div>
    </div>
  );
}
