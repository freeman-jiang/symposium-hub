import BlueGuy from "@/components/svg/blueguy.svg";
import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface DemoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  author: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  blurContent?: boolean;
}

export default function DemoCard({
  title,
  author,
  description,
  href,
  icon: Icon = BlueGuy,
  className,
  blurContent,
  ...props
}: DemoCardProps) {
  return (
    <div
      className={cn(
        "",
        className,
        blurContent && "pointer-events-none select-none blur-sm"
      )}
      {...props}
    >
      <a href={href} target="_blank" className="">
        <Icon className="w-28" />
      </a>

      <div className="text-white max-w-md rounded-lg mt-4 md:py-4">
        <a
          target="_blank"
          href={href}
          className="text-[1.7rem] font-tiempos mb-2 text-white block"
          style={{
            lineHeight: "1.15",
          }}
        >
          {title}
        </a>
        <p className="mb-4 text-zinc-100">{author}</p>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
