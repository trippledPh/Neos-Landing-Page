import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  thumbnail: string;
  description: string;
}

const FeatureCard = ({ title, thumbnail, description }: Props) => {
  return (
    <Card className="relative border-none  flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-[#181818] mb-12 lg:max-w-[400px]">
      <CardContent>
        <div
          className="relative mb-8 h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <span className="text-xl mb-2">{title}</span>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
