import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IndicatorBadge from "@/components/ui/indicator-bard";
import { Share } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  indicatorLabel: string;
  title: string;
  goal: string;
  deliverablesLabel: string;
  deliverables: string[];
  redirectLink: string;
  className?: string;
}

const RoadMapCard = ({
  title,
  goal,
  deliverablesLabel,
  deliverables,
  indicatorLabel,
  redirectLink,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "relative p-px rounded-xl overflow-hidden md:w-[600px]",
        className
      )}
    >
      {/* Gradient border container */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-lg" />

      {/* Card content */}
      <Card className="relative bg-background border-none h-full bg-gradient-to-r from-[#101010] to-[#181818]">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <IndicatorBadge number={indicatorLabel} />
            <h1 className="text-3xl font-semibold">{title}</h1>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-lg">{goal}</p>
              <div>
                <label className="text-muted-foreground text-lg">
                  {deliverablesLabel}
                </label>
                <ul className="list-disc list-inside">
                  {deliverables.map((deliverable) => (
                    <li
                      className="text-muted-foreground text-lg"
                      key={deliverable}
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={redirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 text-2xl bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent items-center font-semibold"
            >
              Read docs <Share className="text-primary" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadMapCard;
