import {
  HouseIcon,
  PresentationIcon,
  SparklesIcon,
  UsersIcon,
  WaypointsIcon,
} from "lucide-react";
import Link from "next/link";
import { SocraticaLogo } from "./icons/SocraticaLogo";
import NavIcon from "./NavIcon";

export default function NavigationBar() {
  return (
    <div className="flex justify-between items-center w-full px-6 py-6 container">
      {/* Logo */}
      <Link href="/">
        <SocraticaLogo className="size-7" />
      </Link>

      {/* Navigation icons */}
      <div className="flex gap-2">
        <NavIcon href="#" active={true}>
          <HouseIcon className="size-5" />
        </NavIcon>

        <NavIcon href="#">
          <UsersIcon className="size-5" />
        </NavIcon>

        <NavIcon href="#">
          <SparklesIcon className="size-5" />
        </NavIcon>

        <NavIcon href="#">
          <WaypointsIcon className="size-5" />
        </NavIcon>

        <NavIcon href="#">
          <PresentationIcon className="size-5" />
        </NavIcon>
      </div>
    </div>
  );
}
