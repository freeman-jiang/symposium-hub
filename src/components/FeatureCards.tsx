import { Button } from "@/components/Button";
import { Presentation, Sparkles, Users, Waypoints } from "lucide-react";
import { motion } from "motion/react";
import { HTMLAttributes, useState } from "react";
import { cn } from "../lib/utils";

// Svgs
import BoothDemosSvg from "@/components/svg/BoothDemos.svg";
import FindPeopleSvg from "@/components/svg/FindPeople.svg";
import MatchmakingGraphSvg from "@/components/svg/MatchmakingGraph.svg";
import StageDemosSvg from "@/components/svg/StageDemos.svg";

interface FeatureCardsProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

// Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
const DAMPING = 12;

// Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
const STIFFNESS = 400;

export default function FeatureCards({
  title = "Welcome to the World's Best Demo Day.",
  className,
  ...props
}: FeatureCardsProps) {
  const [card1Hovered, setCard1Hovered] = useState(false);
  const [card2Hovered, setCard2Hovered] = useState(false);
  const [card3Hovered, setCard3Hovered] = useState(false);
  const [card4Hovered, setCard4Hovered] = useState(false);

  return (
    <section
      className={cn("container py-16 md:py-24 lg:py-32 text-white", className)}
      {...props}
    >
      {title && (
        <motion.h2
          className="font-tiempos text-3xl md:text-4xl lg:text-5xl text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
      )}
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-8 max-w-7xl mx-auto">
          {/* Feature card 1 */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onHoverStart={() => setCard1Hovered(true)}
            onTap={() => setCard1Hovered(!card1Hovered)}
          >
            <motion.div
              initial={{ rotate: card1Hovered ? 0 : -4.5 }}
              transition={{
                type: "spring",
                stiffness: STIFFNESS,
                damping: DAMPING,
              }}
              whileHover={{ rotate: 0 }}
            >
              <FindPeopleSvg className="px-8 md:px-6 w-full max-w-[300px]" />
            </motion.div>
            <div className="mt-5 text-center md:text-left">
              <h3 className="font-tiempos text-2xl md:text-3xl">Find People</h3>
              <p className="mt-2 text-zinc-300">Short blurb.</p>
              <a href="/people">
                <Button
                  icon={<Users className="size-4" />}
                  text="Find people"
                  className="mt-4"
                />
              </a>
            </div>
          </motion.div>

          {/* Feature card 2 */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onHoverStart={() => setCard2Hovered(true)}
            onTap={() => setCard2Hovered(!card2Hovered)}
          >
            <motion.div
              initial={{ rotate: card2Hovered ? 0 : 6.2 }}
              transition={{
                type: "spring",
                stiffness: STIFFNESS,
                damping: DAMPING,
              }}
              whileHover={{ rotate: 0 }}
            >
              <StageDemosSvg className="px-8 md:px-6 w-full max-w-[300px]" />
            </motion.div>
            <div className="mt-5 text-center md:text-left">
              <h3 className="font-tiempos text-2xl md:text-3xl">Stage Demos</h3>
              <p className="mt-2 text-zinc-300">Short blurb.</p>
              <a href="/demos">
                <Button
                  icon={<Sparkles className="size-4" />}
                  text="Stage Demos"
                  className="mt-4"
                />
              </a>
            </div>
          </motion.div>

          {/* Feature card 3 */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onHoverStart={() => setCard3Hovered(true)}
            onTap={() => setCard3Hovered(!card3Hovered)}
          >
            <motion.div
              initial={{ rotate: card3Hovered ? 0 : -5.8 }}
              transition={{
                type: "spring",
                stiffness: STIFFNESS,
                damping: DAMPING,
              }}
              whileHover={{ rotate: 0 }}
            >
              <MatchmakingGraphSvg className="px-8 md:px-6 w-full max-w-[300px]" />
            </motion.div>
            <div className="mt-5 text-center md:text-left">
              <h3 className="font-tiempos text-2xl md:text-3xl">
                Matchmaking Graph
              </h3>
              <p className="mt-2 text-zinc-300">Short blurb.</p>
              <a href="/graph">
                <Button
                  icon={<Waypoints className="size-4" />}
                  text="Graph"
                  className="mt-4"
                />
              </a>
            </div>
          </motion.div>

          {/* Feature card 4 */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            onHoverStart={() => setCard4Hovered(true)}
            onTap={() => setCard4Hovered(!card4Hovered)}
          >
            <motion.div
              initial={{ rotate: card4Hovered ? 0 : 4.7 }}
              transition={{
                type: "spring",
                stiffness: STIFFNESS,
                damping: DAMPING,
              }}
              whileHover={{ rotate: 0 }}
            >
              <BoothDemosSvg className="px-8 md:px-6 w-full max-w-[300px]" />
            </motion.div>
            <div className="mt-5 text-center md:text-left">
              <h3 className="font-tiempos text-2xl md:text-3xl">Booth Demos</h3>
              <p className="mt-2 text-zinc-300">Short blurb.</p>
              <a href="/booths">
                <Button
                  icon={<Presentation className="size-4" />}
                  text="Booth Demos"
                  className="mt-4"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
