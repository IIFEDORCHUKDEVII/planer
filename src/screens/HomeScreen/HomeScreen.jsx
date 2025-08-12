import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Header } from "../../components/Header/Header";

export const HomeScreen = () => {
  const { tg } = useTelegram();

  return (
    <div>
      <Header />
    </div>
  );
};
