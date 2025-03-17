import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface BoothCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: string[];
}

export default function BoothCard({
  title,
  description,
  members,
  className,
  ...props
}: BoothCardProps) {
  const truncatedDescription =
    description.length > 300 ? description.slice(0, 300) + "..." : description;

  return (
    <div className={cn("", className)} {...props}>
      <div className="hover:bg-zinc-900/80 transition-colors text-white max-w-md rounded mt-4 md:p-8 w-full h-full duration-300">
        <h3
          className="text-[1.5rem] font-tiempos mb-2 text-white"
          style={{
            lineHeight: "1.15",
          }}
        >
          {title}
        </h3>
        <p className="mb-4 text-zinc-100">{members.join(", ")}</p>
        <p className="text-sm text-zinc-400">{truncatedDescription}</p>
      </div>
    </div>
  );
}
