import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description?: string;
  url: string;
}

export const InfoLink = ({ title, description, url }: Props) => {
  return (
    <a
      href={url}
      className="px-4 py-4 hover:bg-white/5 transition-colors block w-full h-full"
    >
      <h3 className="font-5by7 font-bold text-lg uppercase tracking-wide flex items-center text-white">
        {title}{" "}
        <span className="ml-2">
          <ArrowUpRight className="size-4" />
        </span>
      </h3>
      {description && (
        <p className="text-zinc-500 uppercase font-bold text-sm font-5by7 mt-0.5 tracking-wide">
          {description}
        </p>
      )}
    </a>
  );
};
