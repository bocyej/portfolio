import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";
import ClickSpark from "./components/reactbits/ClickSpark.tsx";
import LoadingPage from "./components/LoadingPage.tsx";
import "./css/component-styles/LoadingPage.css"

function App() {
  return (
    <>
      <LoadingPage />

      <div className="container">
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
      </div>
    </>
  );
}

export default App;
