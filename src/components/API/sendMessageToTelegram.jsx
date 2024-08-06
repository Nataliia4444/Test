// *LIBRARY AXIOS
import axios from "axios";

//* IMPORT NOTICATION FROM REACT TOAST
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// * FUNCTION SENT MESSAGE TO TELEGRAM
export default async function sendMessageToTelegram(data) {
  const token = "7030272361:AAGcTfuLbzyC9OFoWqC1S1wK-XfCJ0OtlFg";
  const chatId = "944014556";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const message = ` Ім'я: ${data.username},
    Номер телефону: ${data.number},
    Email: ${data.email},`;

  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: message,
    });

    if (response.data.ok) {
      //* SUCCESS NOTICE
      toast.success("Message sent!", {
        position: "top-right",
      });
    } else {
      //* ERROR NOTICE
      toast.error("Failed to send message.", {
        position: "top-right",
      });
    }
  } catch (error) {
    //* ERROR NOTICE
    console.error("Error sending message:", error);
    toast.error("Failed to send message.", {
      position: "top-right",
    });
  }
}
