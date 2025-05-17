import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginPendingModal = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-2 justify-center items-center mt-8">
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center w-[64px] h-[64px] mb-4">
              <img
                src="/image/logos/telegram.png"
                alt="telegram"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-lg font-maxima-nouva font-bold">X</div>

            <div className="flex justify-center items-center w-[64px] h-[64px] mb-4">
              <img
                src="/image/logos/Neos-Logo.svg"
                alt="telegram"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <DialogTitle className="font-maxima-nouva font-bold text-2xl text-center">
            Waiting for Telegram authentication
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Please connect your Telegram account to proceed.
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPendingModal;
