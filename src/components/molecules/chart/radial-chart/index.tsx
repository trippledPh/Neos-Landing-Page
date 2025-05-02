import { PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Props {
  readonly endAngle?: number;
  readonly innerRadius?: number;
  readonly outerRadius?: number;
  readonly width?: number;
}

const chartData = [
  {
    liquidityPool: 84.8,
    privateSale: 10.2,
    treasury: 5,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TokenomicsChart({
  endAngle = 180,
  innerRadius = 140,
  outerRadius = 240,
  width = 500,
}: Props) {
  return (
    <div className="">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square">
        <RadialBarChart
          width={width}
          height={width}
          data={chartData}
          endAngle={endAngle}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}
          ></PolarRadiusAxis>
          <RadialBar
            dataKey="treasury"
            fill="#FFAB82"
            stackId="a"
            cornerRadius={5}
          />

          <RadialBar
            dataKey="privateSale"
            fill="#FF7400"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />

          <RadialBar
            dataKey="liquidityPool"
            stackId="a"
            cornerRadius={5}
            fill="#FF0000"
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
