import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string;
  color: string;
  className?: string;
}

const TokenDetails = ({ label, value, color, className }: Props) => {
  return (
    <span className="flex flex-col gap-2 items-center">
      <span className="text-3xl font-semibold" style={{ color }}>
        {value}
      </span>
      <span className={cn("text-center text-lg text-white", className)}>
        {label}
      </span>
    </span>
  );
};

export default TokenDetails;
