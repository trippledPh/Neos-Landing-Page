import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GlowingPrimaryButton from "../../button/glowing-primary-button";
import { Button } from "@/components/ui/button";

interface Props {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onLogin: (user: any) => void;
  isPending: boolean;
}

const LoginTelegramModal = ({
  isOpen,
  onOpenChange,
  onLogin,
  isPending,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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

        <DialogFooter className="flex justify-center items-center ">
          <div className="flex justify-center items-center w-full">
            {/* <TelegramButton
              bot="altdev_bot"
              size="large"
              dataOnauth={handleAuth}
            /> */}
            <Button
              size="lg"
              variant="outline"
              className=" bg-[#26A3E2] text-white cursor-pointer w-full"
              disabled={isPending}
              onClick={() => onLogin(true)}
            >
              Continue with Telegram
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginTelegramModal;
