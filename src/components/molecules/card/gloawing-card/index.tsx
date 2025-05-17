import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ILaunchPadArticleData } from "@/data/launchpad/launchpad-article.data";

interface Props extends Omit<ILaunchPadArticleData, "id"> {
  className?: string;
}

const LaunchPadGlowingCard = ({
  thumbnail,
  title,
  description,
  className,
  descriptionPlacement = "bottom",
}: Props) => {
  return (
    <div
      className={cn(
        "relative p-px rounded-xl overflow-hidden md:w-[600px] lg:w-auto",
        className
      )}
    >
      {/* Gradient border container */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-lg" />

      {/* Card content */}
      <Card className="relative bg-background border-none h-full bg-gradient-to-r from-[#101010] to-[#181818]">
        <CardContent>
          {descriptionPlacement === "top" && (
            <p className="text-muted-foreground text-base w-[200px] text-left">
              {description}
            </p>
          )}
          <div>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full mt-4 mb-8"
            />
          </div>
          {descriptionPlacement === "bottom" && (
            <p className="text-muted-foreground text-base w-[200px] text-left">
              {description}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LaunchPadGlowingCard;
