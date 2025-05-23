import { APP_CONFIG } from "@/config/app.config";
import { useEffect, useRef } from "react";

interface Props {
  bot: string;
  size: "large" | "medium" | "small";
  radius?: number;
  usePic?: boolean;
  dataAuthUrl?: string;
  dataOnauth?: (user: any) => void;
  requestAccess?: boolean;
}

const TelegramButton = ({
  bot,
  size,
  radius,
  usePic,
  dataAuthUrl,
  dataOnauth,
  requestAccess,
  ...rest
}: Props) => {
  const TelegramRef = useRef<any>(null);

  useEffect(() => {
    if (TelegramRef.current === null) return;

    if (
      typeof dataOnauth === "undefined" &&
      typeof dataAuthUrl === "undefined"
    ) {
      throw new Error(
        "One of these props should be defined: dataAuthUrl (redirect URL), dataOnauth (callback fn) should be defined."
      );
    }

    if (typeof dataOnauth === "function") {
      (window as any).TelegramWidget = {
        dataOnauth: (user: any) => dataOnauth(user),
      };
    }

    const script = document.createElement("script");
    script.setAttribute("data-onauth", "TelegramWidget.dataOnauth(user)");

    script.async = true;
    script.src = APP_CONFIG.env.TELEGRAM_WIDGET_URL;
    script.setAttribute("data-telegram-login", bot);
    script.setAttribute("data-size", size);
    script.setAttribute("data-userpic", usePic?.toString() ?? "true");

    if (radius !== undefined) {
      script.setAttribute("data-radius", radius?.toString());
    }

    if (requestAccess) {
      script.setAttribute("data-request-access", "write");
    }

    TelegramRef.current.appendChild(script);
  }, [
    bot,
    size,
    radius,
    dataOnauth,
    requestAccess,
    usePic,
    TelegramRef,
    dataAuthUrl,
  ]);

  return <div ref={TelegramRef} {...rest}></div>;
};

export default TelegramButton;
