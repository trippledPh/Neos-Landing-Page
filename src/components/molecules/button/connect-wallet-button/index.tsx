import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Connector } from "wagmi";

interface Props {
  connector: Connector;
  onClick: () => void;
}

const ConnectWalletButton = ({ connector, onClick }: Props) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setIsReady(!!provider);
    })();
  }, [connector]);

  return (
    <button
      key={connector.uid}
      className={cn(
        "bg-muted-foreground/10 rounded-lg px-4 py-2 flex justify-between items-center",
        "hover:bg-muted-foreground/20",
        !isReady && "opacity-50 cursor-not-allowed"
      )}
      disabled={!isReady}
      onClick={onClick}
    >
      {isReady ? (
        <>
          <span className="text-lg font-medium">{connector.name}</span>

          <div className="flex justify-center items-center w-10 h-10 overflow-hidden rounded-md   ">
            <img
              src={connector.icon}
              alt={connector.name}
              className="w-full h-full"
            />
          </div>
        </>
      ) : (
        <span className="text-lg font-medium">Connecting...</span>
      )}
    </button>
  );
};

export default ConnectWalletButton;
