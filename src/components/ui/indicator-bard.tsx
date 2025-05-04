export interface IndicatorBadgeProps {
  number: string;
  title?: string;
}

const IndicatorBadge = ({ number, title }: IndicatorBadgeProps) => {
  return (
    <div className="flex items-center gap-4 font-maxima-nouva font-bold">
      <span className="rounded-full font-semibold bg-primary text-black w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#ff2300] to-primary">
        <span className="text-lg font-semibold">{number}</span>
      </span>
      {title && <span className="text-2xl font-semibold">{title}</span>}
    </div>
  );
};

export default IndicatorBadge;
