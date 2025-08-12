import "./App.css";
import { useEffect } from "react";

import { Navigation } from "./navigation/Navigation";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
