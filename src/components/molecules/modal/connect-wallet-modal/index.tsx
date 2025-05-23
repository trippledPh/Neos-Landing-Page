import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useConnect } from "wagmi";
import ConnectWalletButton from "../../button/connect-wallet-button";

interface Props {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isOveride?: boolean;
}

const ConnectWalletModal = ({ isOpen, onOpenChange, isOveride }: Props) => {
  const { connectors, connect } = useConnect();

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {!isOveride && <Button>Connect Wallet</Button>}
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
            Connect Wallet
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            We’ll open a new tab to securely authenticate your account.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {connectors.map((connector) => (
            <ConnectWalletButton
              key={connector.uid}
              connector={connector}
              onClick={() => connect({ connector })}
            />
          ))}
        </div>

        <DialogFooter className="flex justify-center items-center">
          <Button
            size="lg"
            variant="ghost"
            className="text-muted-foreground text-center w-full "
          >
            I don't have a wallet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletModal;
