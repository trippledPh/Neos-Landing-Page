import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import NAVIGATION_DATA from "@/data/navigation.data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isSmallMobile } = useScreenBreakpoint();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b border-gray-300/20">
        <Logo size={48} />

        <ul className="hidden md:flex md:items-center md:gap-4 text-lg text-muted-foreground lg:gap-12">
          {NAVIGATION_DATA.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {isMobile || isSmallMobile ? (
          <Button size="icon" variant="ghost" onClick={handleOpen}>
            <Menu style={{ width: "32px", height: "32px" }} />
          </Button>
        ) : (
          <Link to="/" className="">
            <img src="/image/icons/x.svg" alt="x" />
          </Link>
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
              {NAVIGATION_DATA.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
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
