import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IndicatorBadge from "@/components/ui/indicator-bard";
import { cn } from "@/lib/utils";
import { IRoadMapData } from "@/data/roadmap.data";

interface Props extends IRoadMapData {
  className?: string;
}

const RoadMapCard = ({
  title,
  goal,
  deliverables,
  indicatorLabel,
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
            <h1 className="text-[24px] leading-[34px] font-maxima-nouva font-thin">
              {title}
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-lg">Goal{goal}</p>

              {/* <div>
                <div className="text-muted-foreground text-lg">
                  Key Milestones
                </div>
               {milestones &&  <div className="list-disc list-inside">
                  {milestones?.map((milestone, index) => (
                    <div
                      className="text-muted-foreground text-lg ml-4"
                      key={milestone.title}
                    >
                      <div>
                        {index + 1}. {milestone.title}
                      </div>
                      <ul className="list-disc list-inside ml-6">
                        {milestone.subMilestones && (
                          <div className="text-muted-foreground text-lg">
                            {milestone.subMilestones.map((subMilestone) => (
                              <li key={subMilestone}>{subMilestone}</li>
                            ))}
                          </div>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>}
              </div> */}

              <div>
                <label className="text-muted-foreground text-lg">
                  Deliverables for {indicatorLabel}
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadMapCard;
