import { useState } from "react";
import api from "../api/api";

export default function useChat() {
  const [loading, setLoading] = useState(false);

  const sendMessage = async ({ question, document_id = null }) => {
    setLoading(true);

    try {
      const response = await api.post("/chat", {
        question,
        document_id,
      });

      return response.data;
    } catch (error) {
      console.error("Chat Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMessage,
    loading,
  };
}