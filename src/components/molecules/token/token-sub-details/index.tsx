interface Props {
  label: string;
  value: string;
}

const TokenSubDetails = ({ label, value }: Props) => {
  return (
    <span className="flex items-center gap-2">
      <span className="text-2xl font-semibold">{value}</span>
      <span className="text-xl text-muted-foreground">{label}</span>
    </span>
  );
};

export default TokenSubDetails;
