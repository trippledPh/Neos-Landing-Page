import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface Props {
  size?: number;
  className?: string;
}

const Logo = ({ size = 32, className }: Props) => {
  const { pathname } = useLocation();

  return (
    <Link to={pathname === "/" ? "/" : "/launchpad"}>
      <img
        src="/image/logos/Neos-Logo.svg"
        alt="logo"
        className={cn("w-10 h-10", className)}
        style={{ width: size, height: size }}
      />
    </Link>
  );
};

export default Logo;
