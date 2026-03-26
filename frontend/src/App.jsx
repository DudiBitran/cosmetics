import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import MainPage from "./components/pages/mainPage";
import SuccessPage from "./components/pages/success";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

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
