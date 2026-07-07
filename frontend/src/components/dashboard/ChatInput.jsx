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
    <div className="flex items-center gap-3 border-t border-gray-700/80 bg-slate-900/90 p-4 sm:p-5">
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Ask anything..."
        className="flex-1 rounded-xl border border-gray-700 bg-[#111827] px-5 py-3 text-white outline-none transition focus:border-cyan-400"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
      </button>
    </div>
  );
}