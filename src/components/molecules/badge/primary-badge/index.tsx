import { Badge } from "@/components/ui/badge";

interface Props {
  label: string;
  hasBullet?: boolean;
}

const PrimaryBadge = ({ label, hasBullet = true }: Props) => {
  return (
    <Badge className="bg-[#1C1B1B] space-x-2 px-6 py-2">
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
