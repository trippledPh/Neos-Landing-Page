import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, VariantProps<typeof buttonVariants> {
  className?: string;
}

const PrimaryButton = ({ children, className, ...props }: Props) => {
  return (
    <Button className={cn("w-fit text-xl py-6 px-6", className)} {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
