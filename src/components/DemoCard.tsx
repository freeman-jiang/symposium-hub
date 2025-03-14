import BlueGuy from "@/components/svg/blueguy.svg";
import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface DemoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function DemoCard({
  title,
  author,
  description,
  icon: Icon = BlueGuy,
  className,
  ...props
}: DemoCardProps) {
  return (
    <div className={cn("", className)} {...props}>
      <Icon className="w-28" />

      <div className="bg-black text-white max-w-md rounded-lg mt-4 md:p-4">
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
