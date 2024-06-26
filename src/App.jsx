//* STYLES CSS
import "./App.css";
import Header from "./components/Header/Header";
// import Benefit from "./components/Benefit/Benefit";
// import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
//
function App() {
  return (
    <div>
      <div className="blurRight"></div>
      <div className="blurLeft"></div>
      <div className="technologyCss"></div>
      <div className="technologyHtml"></div>
      <div className="technologyJs"></div>
      <div className="technologyText"></div>
      <div className="technologyVs"></div>
      {/* <div className="overlay"> */}
      <div className="container">
        <div className="mobileOverlay"></div>
        <Header />
        {/* <Form /> */}
        <Hero />
        {/* <Benefit /> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
