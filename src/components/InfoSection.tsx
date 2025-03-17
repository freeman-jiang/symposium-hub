"use client";
import { motion } from "motion/react";
import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { InfoLink } from "./InfoLink";
import { StarsBackground } from "./StarsBackground";
import BurritoSvg from "./svg/burrito.svg";

export const infoLinks: InfoLinkItem[] = [
  {
    title: "Getting to Waterloo",
    description: "In-person & Virtual",
    url: "https://www.google.com",
  },
  {
    title: "Accommodation",
    description: "Places to stay in Waterloo.",
    url: "https://www.google.com",
  },
  {
    title: "Calendar",
    description: "Events board",
    url: "https://calendar.symposium.com",
  },
  {
    title: "Local Attractions & Dining",
    description: "Things to do and eat in Waterloo.",
    url: "https://local.symposium.com",
  },
  {
    title: "About Socratica",
    description: "Learn more about Socratica and the Socratica Commons",
    url: "https://socratica.org",
  },
  {
    title: "Our Code of Conduct",
    description: "Set of guidelines you'll need to adhere to at our events.",
    url: "https://symposium.com/code-of-conduct",
  },
];

export type InfoLinkItem = {
  title: string;
  description: string;
  url: string;
};

export type InfoSectionProps = HTMLAttributes<HTMLDivElement> & {
  links: InfoLinkItem[];
  animationDuration?: number;
};

export const InfoSection = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={cn(
        "container mx-auto px-4 py-16 md:py-24 lg:py-32 relative",
        className
      )}
      {...rest}
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
          {infoLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
              }}
            >
              <InfoLink
                title={link.title}
                description={link.description}
                url={link.url}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
