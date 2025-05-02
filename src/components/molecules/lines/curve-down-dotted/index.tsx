import { cn } from "@/lib/utils";

interface Props {
  direction?: "left" | "right";
  horizontalLength?: number;
  verticalLength?: number;
  squareSize?: number;
  gap?: number;
  className?: string;
  verticalOffset?: number; // Add vertical offset to control where the vertical line starts
}

const CurveDownDottedLine = ({
  direction = "right",
  horizontalLength = 100,
  verticalLength = 100,
  squareSize = 4,
  gap = 4,
  className,
  verticalOffset = 0, // Default to 0, can be adjusted to move the vertical line up or down
}: Props) => {
  const numberOfHorizontalSquares = Math.floor(
    horizontalLength / (squareSize + gap)
  );
  const numberOfVerticalSquares = Math.floor(
    verticalLength / (squareSize + gap)
  );

  return (
    <div
      className={cn("relative", className)}
      style={{ width: `${horizontalLength}px`, height: `${verticalLength}px` }}
    >
      {/* Horizontal line */}
      <div
        className="flex flex-row absolute"
        style={{
          left: direction === "right" ? 0 : "auto",
          right: direction === "left" ? 0 : "auto",
          top: verticalOffset, // Apply vertical offset to the horizontal line
        }}
      >
        {Array.from({ length: numberOfHorizontalSquares }).map((_, index) => (
          <div
            key={`horizontal-${direction}-${index}`}
            className="bg-primary"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              marginRight:
                index === numberOfHorizontalSquares - 1 ? 0 : `${gap}px`,
            }}
          />
        ))}
      </div>

      {/* Vertical line */}
      <div
        className="flex flex-col absolute"
        style={{
          top: `${verticalOffset + squareSize}px`, // Start after the horizontal line, with offset
          left:
            direction === "right" ? `${horizontalLength - squareSize}px` : 0,
          height: `${verticalLength - (verticalOffset + squareSize)}px`, // Adjust height to account for offset
        }}
      >
        {Array.from({ length: numberOfVerticalSquares }).map((_, index) => (
          <div
            key={`vertical-${direction}-${index}`}
            className="bg-primary"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              marginBottom:
                index === numberOfVerticalSquares - 1 ? 0 : `${gap}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CurveDownDottedLine;
