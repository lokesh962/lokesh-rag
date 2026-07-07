import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex h-full min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl">🤖 DocuMind AI</h1>
          <p className="text-base text-gray-400 sm:text-lg">Upload a PDF and ask anything about it.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-y-auto px-3 py-4 sm:px-6 sm:py-6 lg:px-8 custom-scrollbar">
        <div className="space-y-4 sm:space-y-5">
          {messages.map((msg, index) => (
            <MessageBubble key={index} sender={msg.sender} message={msg.message} />
          ))}
          <div ref={bottomRef}></div>
        </div>
      </div>
    </div>
  );
}