import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, VariantProps<typeof buttonVariants> {
  className?: string;
}

const TernaryButton = ({ children, className, ...props }: Props) => {
  return (
    <Button
      size="lg"
      className={cn("w-fit bg-[#1f1f1f]  py-6 px-4", className)}
      {...props}
    >
      <span className="text-xl text-white">{children}</span>
    </Button>
  );
};

export default TernaryButton;
