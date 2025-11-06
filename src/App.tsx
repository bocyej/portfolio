import { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";
import ClickSpark from "./components/reactbits/ClickSpark.tsx";

function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <Body />
        <Footer />
      </ClickSpark>
    </>
  );
}

export default App;
