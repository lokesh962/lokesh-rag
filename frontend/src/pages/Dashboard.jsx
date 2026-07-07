import { useState } from "react";

import DocumentSidebar from "../components/dashboard/DocumentSidebar";
import ChatWindow from "../components/dashboard/ChatWindow";
import ChatInput from "../components/dashboard/ChatInput";

import useChat from "../hooks/useChat";
import useDocuments from "../hooks/useDocuments";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Documents live here now
  const {
    documents,
    loading: documentsLoading,
    refresh,
  } = useDocuments();

  const { sendMessage, loading } = useChat();

  const handleSend = async (question) => {
    const userMessage = {
      sender: "user",
      message: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        message: "Thinking...",
      },
    ]);

    try {
      const response = await sendMessage({
        question,
        document_id: selectedDocument?.id || null,
      });

      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          sender: "ai",
          message: response.answer,
        };

        return updated;
      });
    } catch {
      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          sender: "ai",
          message: "Something went wrong.",
        };

        return updated;
      });
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl md:flex-row">
      <DocumentSidebar
        documents={documents}
        loading={documentsLoading}
        refresh={refresh}
        selectedDocument={selectedDocument}
        setSelectedDocument={setSelectedDocument}
      />

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <ChatWindow messages={messages} selectedDocument={selectedDocument} />

        <ChatInput onSend={handleSend} loading={loading} />
      </div>
    </div>
  );
}