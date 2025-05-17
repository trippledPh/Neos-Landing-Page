import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GlowingPrimaryButton from "../../button/glowing-primary-button";
import { useState } from "react";

interface Props {
  onPending: (open: boolean) => void;
}

const LoginTelegramModal = ({ onPending }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePending = () => {
    onPending(true);
    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <GlowingPrimaryButton>Login to Start</GlowingPrimaryButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-2 justify-center items-center mt-8">
          <div className="flex justify-center items-center w-[64px] h-[64px] mb-4">
            <img
              src="/image/logos/telegram.png"
              alt="telegram"
              className="object-cover w-full h-full"
            />
          </div>
          <DialogTitle className="font-maxima-nouva font-bold text-2xl">
            Login in with Telegram
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            We’ll open a new tab to securely authenticate your account.
          </p>
        </DialogHeader>

        <DialogFooter className="flex justify-center items-center">
          <Button
            size="lg"
            variant="outline"
            className=" bg-[#26A3E2] text-white cursor-pointer w-full"
            onClick={handlePending}
          >
            Continue with Telegram
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginTelegramModal;
