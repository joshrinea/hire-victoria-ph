import { useEffect } from "react";
import Aos from "aos";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import "./styles/App.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
