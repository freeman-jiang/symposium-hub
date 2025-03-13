import { motion } from "motion/react";
import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface TickerProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  duration?: number;
}

export default function Ticker({
  text,
  backgroundColor = "black",
  textColor = "white",
  duration = 15,
  className,
  ...props
}: TickerProps) {
  return (
    <div
      className={cn("w-full py-3 overflow-hidden", className)}
      style={{ backgroundColor }}
      {...props}
    >
      <div className="whitespace-nowrap overflow-hidden">
        <motion.div
          className="inline-block"
          animate={{
            x: "-40rem",
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* lol this is not actually infinite but good enough */}
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <span
                key={i}
                className="inline-block font-5by7 font-bold tracking-wider px-2"
                style={{ color: textColor }}
              >
                {`${text} • `.repeat(100)}
              </span>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
