import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import NAVIGATION_DATA from "@/data/navigation.data";
import { toast } from "sonner";
import useAppStore from "@/store/app.store";
import LAUNCHPAD_NAVIGATION_DATA from "@/data/launchpad.navigation.data";
import PrimaryButton from "@/components/molecules/button/primary-button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isProtected } = useAppStore();
  const { isMobile, isSmallMobile } = useScreenBreakpoint();
  const { pathname } = useLocation();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    if (href.includes("launchpad")) {
      toast.info(
        "Launchpad is Comming Soon, Please stay tuned for more updates"
      );

      return;
    }

    if (href.includes("whitepaper")) {
      const link = document.createElement("a");
      link.href = "/files/Neos-Whitepaper.pdf";
      link.download = "Neos-Whitepaper.pdf";
      link.click();
      toast.success("Whitepaper Downloaded");

      return;
    }

    window.location.href = href;
  };

  return (
    <>
      <header className="flex items-center justify-between lg:gap-4 p-4 border-b border-gray-300/20">
        <div className="flex gap-4 w-full justify-between items-center lg:justify-start lg:gap-12">
          <Logo size={48} />

          <ul className="hidden md:flex md:items-center md:gap-4 text-lg text-muted-foreground lg:gap-12">
            {pathname.includes("launchpad")
              ? LAUNCHPAD_NAVIGATION_DATA.map((item) => (
                  <>
                    {item.as === "anchor" ? (
                      <a
                        href={item.href}
                        key={item.id}
                        className="hover:text-primary hover:underline transition-all duration-200 cursor-pointer underline-offset-4"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        key={item.id}
                        className="hover:text-primary hover:underline transition-all duration-200 cursor-pointer underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    )}
                  </>
                ))
              : NAVIGATION_DATA.map((item) => (
                  <Link
                    to={item.href}
                    key={item.id}
                    className="hover:text-primary hover:underline transition-all duration-200 cursor-pointer underline-offset-4"
                  >
                    {item.label}
                  </Link>
                ))}
          </ul>

          <span></span>
        </div>

        {isMobile || isSmallMobile ? (
          <Button size="icon" variant="ghost" onClick={handleOpen}>
            <Menu style={{ width: "32px", height: "32px" }} />
          </Button>
        ) : (
          <>
            {pathname.includes("launchpad") ? (
              <Button
                onClick={() => handleNavigation("/")}
                className="bg-primary text-white"
              >
                Login
              </Button>
            ) : (
              <Link to="/" className="">
                <img src="/image/icons/x.svg" alt="x" />
              </Link>
            )}
          </>
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
              {isProtected
                ? LAUNCHPAD_NAVIGATION_DATA.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))
                : NAVIGATION_DATA.map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
