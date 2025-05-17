import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";
import { INarrativeCardProps } from "./interface";

interface Props extends INarrativeCardProps {}

const NarrativeCard = ({ title, author, date, upvotes }: Props) => {
  return (
    <Card className="bg-transparent p-2 max-h-[140px]">
      <CardContent className="p-2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold font-maxima-nouva">{title}</h3>
          <span className="text-md text-muted-foreground font-intern">
            {author}
          </span>
        </div>
        <div className="flex justify-between items-center text-muted-foreground">
          <span>{date}</span>
          <div className="flex items-center gap-2">
            <ArrowUp size={16} />
            {upvotes}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NarrativeCard;
