import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, VariantProps<typeof buttonVariants> {
  className?: string;
  onClick?: () => void;
}

const GlowingPrimaryButton = ({
  children,
  className,
  onClick,
  ...props
}: Props) => {
  return (
    <div className="relative inline-block ">
      <Button
        className={cn(
          "w-fit text-lg py-6 px-6 text-white relative",
          "before:absolute before:inset-0 before:bg-primary/50 before:blur-xl before:rounded-full before:-z-10",
          "after:absolute after:inset-0 after:bg-primary/30 after:blur-2xl after:rounded-full after:-z-10",
          "hover:before:bg-primary/70 hover:after:bg-primary/50 transition-all duration-300",
          className
        )}
        {...props}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default GlowingPrimaryButton;
