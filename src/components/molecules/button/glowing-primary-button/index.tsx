import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, VariantProps<typeof buttonVariants> {
  className?: string;
}

const GlowingPrimaryButton = ({ children, className, ...props }: Props) => {
  return (
    <Button
      className={cn(
        "w-fit text-xl py-6 px-6 text-white relative",
        "before:absolute before:inset-0 before:bg-primary/50 before:blur-xl before:rounded-full before:-z-10",
        "after:absolute after:inset-0 after:bg-primary/30 after:blur-2xl after:rounded-full after:-z-10",
        "hover:before:bg-primary/70 hover:after:bg-primary/50 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GlowingPrimaryButton;
