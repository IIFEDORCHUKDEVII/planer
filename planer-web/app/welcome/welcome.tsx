import { useEffect } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
const tg = window.Telegram.WebApp;

export function Welcome() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      working
      <button onClick={onClose}>Close</button>
    </div>
  );
}
