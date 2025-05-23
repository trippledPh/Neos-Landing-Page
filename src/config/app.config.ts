export const APP_CONFIG = {
  env: {
    BACKEND_API:
      import.meta.env.VITE_BACKEND_API ?? "https://neos-backend.onrender.com",
    GITBOOK_URL:
      import.meta.env.VITE_GITBOOK_URL ?? "https://neos-2.gitbook.io/neos-bot",
    TELEGRAM_WIDGET_URL:
      import.meta.env.VITE_TELEGRAM_WIDGET_URL ??
      "https://telegram.org/js/telegram-widget.js?22",
  },
};
