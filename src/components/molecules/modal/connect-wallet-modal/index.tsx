import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useConnect } from "wagmi";
const ConnectWalletModal = () => {
  const { connectors, connect } = useConnect();

  console.log(connectors);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect Wallet</Button>
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
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className={cn(
                "bg-muted-foreground/10 rounded-lg px-4 py-2 flex justify-between items-center",
                "hover:bg-muted-foreground/20"
              )}
            >
              <span className="text-lg font-medium">{connector.name}</span>

              <div className="flex justify-center items-center w-10 h-10 overflow-hidden rounded-md   ">
                <img
                  src={connector.icon}
                  alt={connector.name}
                  className="w-full h-full"
                />
              </div>
            </button>
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
