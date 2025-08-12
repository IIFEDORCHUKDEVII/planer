import "./App.css";

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
