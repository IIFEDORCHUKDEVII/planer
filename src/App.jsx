import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    // Ініціалізація Telegram Web App
    tg.ready();
    tg.MainButton.show();
    // Наприклад, кнопка для закриття Telegram Web App
  }, []);
  const onCLose = () => {
    tg.close();
  };
  return (
    <div>
      <h1>Welcome 2</h1>
      <button onClick={onCLose}>Close</button>
    </div>
  );
}

export default App;
