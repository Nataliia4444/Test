//* STYLES CSS
import "./App.css";

//* IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Benefit from "./components/Benefit/Benefit";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      {/*BACKGROUND */}
      <div className="blurRight"></div>
      <div className="blurLeft"></div>
      <div className="technologyCss"></div>
      <div className="technologyHtml"></div>
      <div className="technologyJs"></div>
      <div className="technologyText"></div>
      <div className="technologyVs"></div>
      <div className="container">
        <div className="mobileOverlay"></div>
        <Header />
        <div className="heroContainer">
          <Hero />
          <Form />
        </div>
        <div className="benefitSection">
          <Benefit />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
