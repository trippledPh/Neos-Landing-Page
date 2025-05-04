import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string;
  color: string;
  className?: string;
}

const TokenDetails = ({ label, value, color, className }: Props) => {
  return (
    <span className="flex flex-col gap-2 items-center font-maxima-nouva font-bold">
      <span className="text-3xl font-semibold" style={{ color }}>
        {value}
      </span>
      <span
        className={cn(
          "text-center text-lg  font-inter font-medium text-muted-foreground",
          className
        )}
      >
        {label}
      </span>
    </span>
  );
};

export default TokenDetails;
