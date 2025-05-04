import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
interface Props {
  label: string;
  hasBullet?: boolean;
  className?: string;
}

const PrimaryBadge = ({ label, hasBullet = true, className }: Props) => {
  return (
    <Badge
      className={cn(
        "bg-[#1C1B1B] space-x-2 px-6 py-2 font-maxima-nouva",
        className
      )}
    >
      {hasBullet && (
        <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
      )}
      <span className="text-[17px] font-thin text-primary-foreground">
        {label}
      </span>
    </Badge>
  );
};

export default PrimaryBadge;
