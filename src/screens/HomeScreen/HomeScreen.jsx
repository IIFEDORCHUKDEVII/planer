import { useCallback, useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Header } from "../../components/Header/Header";

export const HomeScreen = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    // tg.MainButton.setText("Close");
    // tg.MainButton.show();
    // tg.onEvent("mainButtonClicked", () => {
    //   onCLose();
    // });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};
