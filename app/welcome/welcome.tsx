import { useEffect } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  useEffect(() => {
    if (window.Telegram) {
      // Ініціалізація Telegram Web App
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();

      // Наприклад, кнопка для закриття Telegram Web App
      window.Telegram.WebApp.onEvent("close", () => {
        window.Telegram.WebApp.close();
      });
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Telegram Mini App</h1>
      <button onClick={() => window.Telegram.WebApp.close()}>Close</button>
    </div>
  );
}
