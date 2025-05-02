interface Props {
  height?: number;
  squareSize?: number;
  gap?: number;
}

const StraightDownDottedLine = ({
  height = 24,
  squareSize = 4,
  gap = 4,
}: Props) => {
  const numberOfSquares = Math.floor(height / (squareSize + gap));

  return (
    <div
      className="flex flex-col items-center "
      style={{ height: `${height}px` }}
    >
      {Array.from({ length: numberOfSquares }).map((_, index) => (
        <div
          key={index + "square"}
          className="bg-primary"
          style={{
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            marginBottom: index === numberOfSquares - 1 ? 0 : `${gap}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StraightDownDottedLine;
