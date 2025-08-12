import { useCallback, useEffect } from "react";

const tg = window.Telegram.WebApp;
export const HomeScreen = () => {
  const onCLose = useCallback(() => {
    tg.close();
  }, []);
  useEffect(() => {
    // Ініціалізація Telegram Web App
    tg.ready();
    tg.MainButton.show();
    // Наприклад, кнопка для закриття Telegram Web App
    tg.onEvent("mainButtonClicked", () => {
      onCLose();
    });
  }, [onCLose]);

  return <div>HomeScreen</div>;
};
