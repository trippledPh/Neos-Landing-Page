import GlowingPrimaryButton from "@/components/molecules/button/glowing-primary-button";
import LaunchPadGlowingCard from "@/components/molecules/card/gloawing-card";
import ConnectWalletModal from "@/components/molecules/modal/connect-wallet-modal";
import LoginTelegramModal from "@/components/molecules/modal/login-modal";
import LoginPendingModal from "@/components/molecules/modal/login-pending-modal";
import { LaunchPadArticleData } from "@/data/launchpad/launchpad-article.data";
import useGetUrlQuery from "@/hooks/use-get-url";
import useTelegramLogin from "@/service/auth/hooks/use-telegram-login";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const LaunchPadHeroSection = () => {
  const [isTelegramLoginOpen, setIsTelegramLoginOpen] = useState(false);
  const [isTelegramPending, setIsTelegramPending] = useState(false);
  const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);

  const { urlQuery, removeUrlQuery } = useGetUrlQuery();
  const { address: walletAddress } = useAccount();

  const {
    mutate: telegramLogin,
    isPending: isTelegramLoginPending,
    isSuccess: isTelegramLoginSuccess,
    isError: isTelegramLoginError,
  } = useTelegramLogin();

  const handleTelegramLogin = (user: any) => {
    removeUrlQuery("isAuthenticated");
    telegramLogin(user);
  };

  useEffect(() => {
    if (isTelegramLoginSuccess) {
      setIsTelegramLoginOpen(false);
      setIsTelegramPending(false);
      setIsConnectWalletOpen(true);
    }

    if (isTelegramLoginPending) {
      setIsTelegramPending(true);
      setIsTelegramLoginOpen(false);
    }

    if (isTelegramLoginError) {
      setIsTelegramLoginOpen(false);
      setIsTelegramPending(false);
      setIsConnectWalletOpen(false);
    }

    if (walletAddress) {
      setIsConnectWalletOpen(false);
      removeUrlQuery("isAuthenticated");
    }
  }, [
    isTelegramLoginSuccess,
    isTelegramLoginPending,
    isTelegramLoginError,
    walletAddress,
  ]);

  useEffect(() => {
    if (urlQuery.get("isAuthenticated")) {
      setIsTelegramPending(false);
    }
  }, [urlQuery]);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-[100px] p-4  xl:flex-row xl:gap-8 xl:items-start lg:justify-start">
      <div className="flex flex-col justify-center items-center  gap-[48px] mb-[48px] md:items-center xl:items-start md:justify-center ">
        <div className="flex flex-col items-start gap-6 md:text-center md:justify-center md:items-center xl:text-left xl:justify-start xl:items-start">
          <h3 className="text-[52px] leading-[48px] md:text-5xl md:leading-[56px] text-wrap text-center max-w-[600px] w-fit font-maxima-nouva font-thin md:text-center md:text-[80px] xl:text-left xl:leading-[72px] ">
            <span className="font-bold">Neos</span> Launchpad
          </h3>
          <p className="text-muted-foreground text-base text-left md:text-center  max-w-[600px] md:max-w-[450px] xl:text-left xl:leading-[28px] xl:justify-start xl:items-start">
            Your one-stop platform for discovering, tracking, and acting on the
            hottest crypto narratives—instantly.
          </p>
        </div>

        {walletAddress ? (
          <GlowingPrimaryButton>Launch Narrative</GlowingPrimaryButton>
        ) : (
          <LoginTelegramModal
            isOpen={isTelegramLoginOpen}
            onOpenChange={setIsTelegramLoginOpen}
            onLogin={handleTelegramLogin}
            isPending={isTelegramLoginPending}
          />
        )}

        {isTelegramLoginPending && (
          <LoginPendingModal
            isOpen={isTelegramPending}
            onOpenChange={setIsTelegramPending}
          />
        )}

        {isConnectWalletOpen && (
          <ConnectWalletModal
            isOpen={isConnectWalletOpen}
            onOpenChange={setIsConnectWalletOpen}
            isOveride={true}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8  ">
        <div className="flex flex-col gap-4">
          <LaunchPadGlowingCard
            {...LaunchPadArticleData[0]}
            className=" lg:h-[320px]"
          />
          <LaunchPadGlowingCard
            {...LaunchPadArticleData[2]}
            className="lg:h-[320px]"
          />
        </div>
        <LaunchPadGlowingCard {...LaunchPadArticleData[1]} />
      </div>
    </section>
  );
};

export default LaunchPadHeroSection;
