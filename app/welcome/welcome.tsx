import { useEffect } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
const tg = window.Telegram.WebApp;
export function Welcome() {
  useEffect(() => {
    if (tg) {
      // Ініціалізація Telegram Web App
      tg.ready();
      tg.expand();

      // Наприклад, кнопка для закриття Telegram Web App
    }
  }, []);
  const onCLose = () => {
    tg.close();
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={onCLose}>Close</button>
    </div>
  );
}
