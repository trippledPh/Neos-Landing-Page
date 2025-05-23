import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const useTelegramLogin = () => {
  const { pathname } = useLocation();

  return useMutation({
    mutationFn: (user: any) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(user);
        }, 1000);
      });
    },

    onSuccess: () => {
      const url = new URL(pathname, window.location.origin);
      url.searchParams.set("isAuthenticated", "true");
      window.history.pushState({}, "", url);
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error(error.message || "Something went wrong");
      }
    },
  });
};

export default useTelegramLogin;
