import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IndicatorBadge from "@/components/ui/indicator-bard";

interface Props {
  number: string;
  title: string;
  thumbnail: string;
  description: string;
}

const ArticleCard = ({ number, title, thumbnail, description }: Props) => {
  return (
    <Card
      className="relative border-none h-[500px] flex flex-col justify-between"
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <CardHeader>
        <IndicatorBadge number={number} title={title} />
      </CardHeader>
      <CardContent>
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <p className="text-muted-foreground text-lg">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
