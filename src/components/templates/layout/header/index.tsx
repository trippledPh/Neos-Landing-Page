import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { INavigationData } from "@/interface/static.interface";
import { useAccount } from "wagmi";
import ProfileMenu from "@/components/organism/profile/profile-menu";
import ConnectWalletModal from "@/components/molecules/modal/connect-wallet-modal";

interface Props {
  routes: INavigationData[];
}

const Header = ({ routes }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isMobile, isSmallMobile } = useScreenBreakpoint();
  const { address } = useAccount();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between lg:gap-4 p-4 border-b border-gray-300/20">
        <div className="flex gap-4 w-full justify-between items-center lg:justify-start lg:gap-12">
          <Logo size={48} />

          <ul className="hidden md:flex md:items-center md:gap-4 text-lg text-muted-foreground lg:gap-12">
            {routes.map((item) => {
              if (item.as === "anchor") {
                return (
                  <a href={item.href} key={item.id}>
                    {item.label}
                  </a>
                );
              }

              return (
                <Link to={item.href} key={item.id}>
                  {item.label}
                </Link>
              );
            })}
          </ul>

          <span></span>
        </div>

        {isMobile || isSmallMobile ? (
          <Button size="icon" variant="ghost" onClick={handleOpen}>
            <Menu style={{ width: "32px", height: "32px" }} />
          </Button>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Link to="/" className="w-4 h-4">
              <img src="/image/icons/x.svg" alt="x" className="w-full h-full" />
            </Link>

            {address ? <ProfileMenu /> : <ConnectWalletModal />}
          </div>
        )}
      </header>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 lg:hidden">
          <div className="p-4 h-full">
            <div className="flex justify-between items-center">
              <Logo size={48} />
              <Button variant="ghost" size="icon" onClick={handleOpen}>
                <X style={{ width: "32px", height: "32px" }} />
              </Button>
            </div>

            <ul className="text-2xl flex flex-col gap-4 justify-start items-start mt-8 text-muted-foreground">
              {routes.map((item) => {
                if (item.as === "anchor") {
                  return (
                    <a href={item.href} key={item.id}>
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link to={item.href} key={item.id}>
                    {item.label}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
