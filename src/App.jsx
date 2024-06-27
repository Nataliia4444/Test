//* STYLES CSS
import "./App.css";

//* IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Benefit from "./components/Benefit/Benefit";
import Form from "./components/ContactForm/ContactForm";
import Hero from "./components/Hero/Hero";
// import TelegramForm from "./components/API/sendMessageToTelegram";

// import axios from "axios";

import { ToastContainer } from "react-toastify";
import sendMessageToTelegram from "./components/API/sendMessageToTelegram";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  // const sendMessageToTelegram = async (data) => {
  //   const token = "7030272361:AAGcTfuLbzyC9OFoWqC1S1wK-XfCJ0OtlFg";
  //   const chatId = "-4234129827";
  //   const url = `https://api.telegram.org/bot${token}/sendMessage`;
  //   const message = `
  //     Ім'я: ${data.username}
  //     Номер телефону: ${data.number}
  //     Email: ${data.email}
  //   `;

  //   try {
  //     const response = await axios.post(url, {
  //       chat_id: chatId,
  //       text: message,
  //     });

  //     if (response.data.ok) {
  //       toast.success("Message sent!", {
  //         position: "top-right",
  //       });
  //     } else {
  //       toast.error("Failed to send message.", {
  //         position: "top-right",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     toast.error("Failed to send message.", {
  //       position: "top-right",
  //     });
  //   }
  // };

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

      <div className="technologyCssEllipse"></div>
      <div className="technologyHtmlEllipse"></div>
      <div className="technologyJsEllipse"></div>
      <div className="technologyTextEllipse"></div>
      <div className="technologyVsEllipse"></div>
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
      <div className="overlay"></div>
      {/* <TelegramForm /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
