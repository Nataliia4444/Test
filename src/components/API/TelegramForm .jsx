import { useState } from "react";
import axios from "axios";

const TelegramForm = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const token = "7030272361:AAGcTfuLbzyC9OFoWqC1S1wK-XfCJ0OtlFg";
    const chatId = "944014556"; // Используем username чата

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await axios.post(url, {
        chat_id: chatId,
        text: message,
      });
      if (response.data.ok) {
        alert("Message sent!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TelegramForm;
