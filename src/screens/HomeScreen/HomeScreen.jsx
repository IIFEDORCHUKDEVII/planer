import { useCallback, useEffect } from "react";

const tg = window.Telegram.WebApp;
export const HomeScreen = () => {
  useEffect(() => {
    // Ініціалізація Telegram Web App
    tg.ready();
    tg.MainButton.show();
    // Наприклад, кнопка для закриття Telegram Web App
    tg.onEvent("mainButtonClicked", () => {
      onCLose()
    });
  }, []);
  const onCLose = useCallback(() => {
    tg.close();
  }, []);
  return <div>HomeScreen</div>;
};
