import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({ onSend, loading }) {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;

    onSend(question);
    setQuestion("");
  };

  return (
    <div className="flex flex-col gap-3 border-t border-gray-700/80 bg-slate-900/90 p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-4 lg:p-5">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Ask anything..."
        className="w-full rounded-xl border border-gray-700 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 sm:flex-1 sm:px-5 sm:text-base"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send size={18} />
      </button>
    </div>
  );
}