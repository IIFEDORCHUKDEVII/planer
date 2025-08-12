import { useEffect } from "react";

const tg = window.Telegram.WebApp;
export const HomeScreen = () => {
  useEffect(() => {
    // Ініціалізація Telegram Web App
    tg.ready();
    tg.MainButton.show();
    // Наприклад, кнопка для закриття Telegram Web App
    tg.onEvent("mainButtonClicked", () => {
      tg.close();
    });
  }, []);
  const onCLose = () => {
    tg.close();
  };
  return <div>HomeScreen</div>;
};
