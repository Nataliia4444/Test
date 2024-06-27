//* STYLES CSS
import "./App.css";

//* IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Benefit from "./components/Benefit/Benefit";
import Form from "./components/ContactForm/ContactForm";
import Hero from "./components/Hero/Hero";

//* IMPORT NOTICATION FROM REACT TOAST
import { ToastContainer } from "react-toastify";

//* IMPORT FUNCTION SENT MESSAGE TO TELEGRAM
import sendMessageToTelegram from "./components/API/sendMessageToTelegram";

function App() {
  return (
    <div>
      {/* BACKGROUND BLUR */}
      <div className="blurRight"></div>
      <div className="blurLeft"></div>

      {/* BACKGROUND TECHNOLOGY */}
      <div className="technologyCss"></div>
      <div className="technologyHtml"></div>
      <div className="technologyJs"></div>
      <div className="technologyText"></div>
      <div className="technologyVs"></div>
      <div className="technologyCssEllipse"></div>
      <div className="technologyHtmlEllipse"></div>
      <div className="technologyJsEllipse"></div>
      <div className="technologyTextEllipse"></div>
      <div className="technologyVsEllipse"></div>

      {/* CONTAINER */}
      <div className="container">
        <div className="mobileOverlay"></div>
        <Header />
        <div className="heroContainer">
          <Hero />
          <Form onSubmit={sendMessageToTelegram} />
        </div>
        <div className="benefitSection">
          <Benefit />
        </div>
      </div>

      {/* OVERLAY FRONT-END DEVELOPER */}
      <div className="overlay"></div>

      {/* NOTICATION */}
      <ToastContainer />
    </div>
  );
}

export default App;
