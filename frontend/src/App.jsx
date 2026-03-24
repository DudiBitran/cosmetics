import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/pages/mainPage";
import SuccessPage from "./components/pages/success";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </main>
  );
}

export default App;
