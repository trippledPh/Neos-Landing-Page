import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  className?: string;
}

const Logo = ({ size = 32, className }: Props) => {
  return (
    <img
      src="/image/logos/Neos-Logo.svg"
      alt="logo"
      className={cn("w-10 h-10", className)}
      style={{ width: size, height: size }}
    />
  );
};

export default Logo;
