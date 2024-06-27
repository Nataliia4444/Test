import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function sendMessageToTelegram(data) {
  const token = "7030272361:AAGcTfuLbzyC9OFoWqC1S1wK-XfCJ0OtlFg";
  const chatId = "-4234129827";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const message = `
    Ім'я: ${data.username}
    Номер телефону: ${data.number}
    Email: ${data.email}
  `;

  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: message,
    });

    if (response.data.ok) {
      toast.success("Message sent!", {
        position: "top-right",
      });
    } else {
      toast.error("Failed to send message.", {
        position: "top-right",
      });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message.", {
      position: "top-right",
    });
  }
}
