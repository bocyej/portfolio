import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";
import ClickSpark from "./components/reactbits/ClickSpark.tsx";
import LoadingPage from "./components/LoadingPage.tsx";
import "./css/component-styles/LoadingPage.css";
import { useLayoutEffect, useState } from "react";
import "../src/index.css";
import "../src/css/Body.css";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useLayoutEffect(() => {
    const loadingShown = sessionStorage.getItem("loadingShown");

    if (!loadingShown) {
      setShowLoading(true);
      sessionStorage.setItem("loadingShown", "true");
    } else {
      setIsContentVisible(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setTimeout(() => setIsContentVisible(true), 200);
  };

  return (
    <>
      {showLoading && <LoadingPage onComplete={handleLoadingComplete} />}

      <div
        className="container"
        style={{
          opacity: isContentVisible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <ClickSpark
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Header />
          <Body />
          <Footer />
        </ClickSpark>
      </div>
    </>
  );
}

export default App;
