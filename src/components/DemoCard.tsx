import BlueGuy from "@/components/svg/blueguy.svg";
import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

interface DemoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  description: string;
}

export default function DemoCard({
  title,
  author,
  description,
  className,
  ...props
}: DemoCardProps) {
  return (
    <div className={cn("", className)} {...props}>
      <BlueGuy className="w-28" />

      <div className="bg-black text-white max-w-md rounded-lg mt-4 p-4">
        <h3
          className="text-[1.7rem] font-tiempos mb-2 text-white"
          style={{
            lineHeight: "1.15",
          }}
        >
          {title}
        </h3>
        <p className="mb-4 text-zinc-100">{author}</p>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
