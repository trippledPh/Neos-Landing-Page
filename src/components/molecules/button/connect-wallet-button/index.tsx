import { Button } from "@/components/ui/button";
import { useConnect } from "wagmi";

const ConnectWalletButton = () => {
  const { connectors, connect } = useConnect();

  console.log(connectors);

  return <Button>Connect</Button>;
};

export default ConnectWalletButton;
