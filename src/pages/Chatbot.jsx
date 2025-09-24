import { useState, useRef } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import OpenAI from "openai/index.js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const SYSTEM_PROMPT = `
  Bạn là một trợ lý AI chuyên sâu về khoa học chính trị, đặc biệt là chủ đề nhà nước xã hội chủ nghĩa trong Chủ nghĩa xã hội khoa học Mác-Lênin.
  Nhiệm vụ của bạn là giải thích rõ ràng, logic, có hệ thống về bản chất, vai trò, chức năng, đặc điểm của nhà nước xã hội chủ nghĩa theo quan điểm Mác-Lênin.

  Yêu cầu khi trả lời:
  1. Trình bày hoàn toàn bằng tiếng Việt, văn phong chuẩn mực, dễ hiểu.
  2. Sử dụng ví dụ lịch sử hoặc thực tiễn minh họa về nhà nước xã hội chủ nghĩa (ở Việt Nam hoặc quốc tế).
  3. Kết luận ngắn gọn, nhấn mạnh ý nghĩa của nhà nước XHCN trong tiến trình xây dựng chủ nghĩa xã hội.
  4. Chỉ trả lời những gì liên quan đến chủ đề nhà nước xã hội chủ nghĩa trong Chủ nghĩa xã hội khoa học Mác-Lênin.
  5. Với những câu hỏi trả lời ngắn gọn, xúc tích dễ hiểu và có ví dụ minh họa.
  6. Không trả lời những câu hỏi ngoài phạm vi trên.
  7. Quan điểm Mác-Lênin về nhà nước xã hội chủ nghĩa luôn đúng và phù hợp với thực tiễn phát triển xã hội.
  8. Và quan trọng nhất, không có ý định xuyên tạc về nhà nước xã hội chủ nghĩa.
  `;

  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    dangerouslyAllowBrowser: true,
  });

  async function sendMessage() {
    if (!input.trim()) return;
    setLoading(true);
    setMessages((p) => [...p, { role: "user", text: input }]);
    try {
      const res = await client.chat.completions.create({
        model: "qwen/qwen3-30b-a3b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: input },
        ],
      });
      const answer = res.choices[0].message.content;
      setMessages((p) => [...p, { role: "bot", text: answer }]);
    } catch {
      setMessages((p) => [...p, { role: "bot", text: "Lỗi API." }]);
    }
    setLoading(false);
    setInput("");
  }

  const visibleMessages = messages.slice(-20);

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-[#7b1f1f] via-[#b22234] to-[#f5e6c8] flex flex-col items-center justify-start"
      style={{ fontFamily: "Roboto, Arial, Helvetica, sans-serif" }}
    >
      {/* Thematic Header */}
      <header className="w-full py-10 flex flex-col items-center justify-center bg-gradient-to-r from-[#7b1f1f] via-[#b22234] to-[#f5e6c8] shadow-lg border-b-4 border-yellow-500">
        <div className="flex items-center gap-4 mb-2">
          <span className="inline-block text-yellow-500 text-5xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21h18M4.5 10.5l7.5-7.5 7.5 7.5M4.5 10.5V21m15-10.5V21M9 21v-6h6v6"
              />
            </svg>
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200 drop-shadow-lg tracking-wide text-center">
            Trợ lý AI Nhà nước XHCN
          </h1>
        </div>
        <p className="text-lg md:text-xl text-yellow-100 font-light max-w-2xl text-center">
          Giải đáp về nhà nước xã hội chủ nghĩa trong Chủ nghĩa xã hội khoa học
          Mác-Lênin
          <br />
          <span className="text-yellow-300 font-semibold">
            Hỏi đáp học thuật, ví dụ thực tiễn, kiến thức chuẩn mực
          </span>
        </p>
      </header>

      {/* Chat Container */}
      <main className="flex-1 w-full flex flex-col items-center justify-start py-10 px-2">
        <section
          className="w-full max-w-5xl bg-white/90 rounded-3xl shadow-2xl border-4 border-yellow-500/70 backdrop-blur-xl flex flex-col"
          style={{
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            fontFamily: "Roboto, Arial, Helvetica, sans-serif",
          }}
        >
          {/* Messages */}
          <div
            className="flex-1 p-8 overflow-y-auto space-y-6 max-h-[70vh]"
            style={{ minHeight: "400px" }}
          >
            {visibleMessages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-6 py-4 rounded-2xl shadow text-base whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-yellow-100 to-yellow-300 text-gray-900 border border-yellow-400"
                      : "bg-gradient-to-r from-[#f5e6c8] to-[#fffbe6] text-[#7b1f1f] border border-yellow-300"
                  }`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mt-2">
                <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#f5e6c8] to-[#fffbe6] text-[#7b1f1f] border border-yellow-300 shadow animate-pulse">
                  <svg
                    className="animate-spin h-5 w-5 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Đang trả lời...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            className="flex items-center gap-3 p-6 border-t-2 border-yellow-300 bg-white/80 rounded-b-3xl"
            onSubmit={(e) => {
              e.preventDefault();
              if (!loading) sendMessage();
            }}
          >
            <input
              type="text"
              className="flex-1 px-5 py-4 rounded-full border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg bg-white/90"
              style={{ fontFamily: "Roboto, Arial, Helvetica, sans-serif" }}
              placeholder="Nhập câu hỏi về nhà nước xã hội chủ nghĩa..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="px-7 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#7b1f1f] font-bold shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 disabled:opacity-60 border-2 border-yellow-300"
              disabled={loading}
            >
              <PaperAirplaneIcon className="w-6 h-6" />
              Gửi
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
