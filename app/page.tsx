"use client";

import React, { useState, useEffect, useRef } from "react";
import { Trash2, MessageSquarePlus, Send } from "lucide-react";
import { characters } from "../data/characters";
import { v4 as uuidv4 } from "uuid"; // ✅ Generates unique user IDs

interface ChatMessage {
  sender: "user" | "character";
  content: string;
}

interface Chat {
  id: string;
  character: typeof characters[number];
  messages: ChatMessage[];
}

export default function Page() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [input, setInput] = useState("");
  const [showCharacterSelection, setShowCharacterSelection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Each visitor gets a unique userId (persistent in browser)
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    let storedId = localStorage.getItem("userId");
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem("userId", storedId);
    }
    setUserId(storedId);
  }, []);

  // ✅ Load chats specific to this user
  useEffect(() => {
    if (!userId) return;
    const saved = localStorage.getItem(`savedChats_${userId}`);
    if (saved) setChats(JSON.parse(saved));
  }, [userId]);

  // ✅ Save chats for this specific user
  useEffect(() => {
    if (userId) {
      localStorage.setItem(`savedChats_${userId}`, JSON.stringify(chats));
    }
  }, [chats, userId]);

  useEffect(() => {
    if (chatEndRef.current)
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat?.messages]);

  const handleSend = async () => {
    if (!input.trim() || !selectedChat) return;

    const newMessage: ChatMessage = { sender: "user", content: input };
    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, newMessage],
    };

    setChats((prev) =>
      prev.map((c) => (c.id === selectedChat.id ? updatedChat : c))
    );
    setSelectedChat(updatedChat);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          characterId: selectedChat.character.id,
        }),
      });
      const data = await response.json();
      const reply: ChatMessage = { sender: "character", content: data.reply };
      const updatedChatWithReply = {
        ...updatedChat,
        messages: [...updatedChat.messages, reply],
      };
      setChats((prev) =>
        prev.map((c) => (c.id === selectedChat.id ? updatedChatWithReply : c))
      );
      setSelectedChat(updatedChatWithReply);
    } catch {
      console.error("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  const startChatWithCharacter = (character: typeof characters[number]) => {
    const newChat: Chat = { id: Date.now().toString(), character, messages: [] };
    setChats((prev) => [...prev, newChat]);
    setSelectedChat(newChat);
    setShowCharacterSelection(false);
    setSearch("");
  };

  const handleDelete = (id: string) => {
    setChats((prev) => prev.filter((c) => c.id !== id));
    if (selectedChat?.id === id) setSelectedChat(null);
  };

  const uniqueCharacters = characters.filter(
    (char, index, self) => index === self.findIndex((c) => c.id === char.id)
  );

  const filteredCharacters = uniqueCharacters
    .filter((char) => char.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const groupedCharacters: Record<string, typeof characters> = {};
  filteredCharacters.forEach((char) => {
    const firstLetter = char.name[0].toUpperCase();
    if (!groupedCharacters[firstLetter]) groupedCharacters[firstLetter] = [];
    groupedCharacters[firstLetter].push(char);
  });

  const letters = Object.keys(groupedCharacters).sort();

  return (
    <div className="flex h-screen font-sans text-gray-100 bg-[#0a0a0a] transition-colors duration-300 dark:bg-[#0a0a0a]">
      {/* Sidebar */}
      <aside className="w-72 bg-[#111]/80 backdrop-blur-md border-r border-gray-800 flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold tracking-wide text-gray-200">
            Chats
          </h2>
          <button
            onClick={() => setShowCharacterSelection(true)}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition shadow-lg"
          >
            <MessageSquarePlus className="w-5 h-5 text-gray-200" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center justify-between p-3 cursor-pointer transition-all duration-200 rounded-xl ${
                selectedChat?.id === chat.id
                  ? "bg-gradient-to-r from-indigo-700/40 to-purple-700/30 border-l-4 border-indigo-500 shadow-xl"
                  : "hover:bg-[#141414]/70 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={chat.character.image}
                  alt={chat.character.name}
                  className="w-11 h-11 rounded-full object-cover border border-gray-700 shadow-md"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-100">
                    {chat.character.name}
                  </span>
                  {chat.messages.length > 0 && (
                    <span className="text-xs text-gray-400 truncate max-w-[150px]">
                      {chat.messages[chat.messages.length - 1].content}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(chat.id);
                }}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col relative bg-[#0f0f0f]">
        {selectedChat ? (
          <>
            <div className="flex items-center gap-3 p-4 border-b border-gray-800 bg-[#111]/60 backdrop-blur-md shadow-md">
              <img
                src={selectedChat.character.image}
                alt={selectedChat.character.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-700 shadow-lg"
              />
              <h2 className="text-lg font-semibold text-gray-200">
                {selectedChat.character.name}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {selectedChat.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } transition-all duration-300`}
                >
                  <div
                    className={`max-w-xs sm:max-w-md p-3 rounded-2xl text-sm break-words shadow-md transition-all duration-300 transform animate-fadeIn ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-indigo-600/80 to-purple-700/80 text-white rounded-br-none shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:scale-[1.02]"
                        : "bg-[#1a1a1a]/80 text-gray-100 rounded-bl-none shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:scale-[1.01]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-gray-400 text-sm pl-1 animate-pulse">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                  </span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="p-4 border-t border-gray-800 bg-[#111]/70 backdrop-blur-md flex gap-3 items-center shadow-inner rounded-t-xl">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 p-3 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 focus:border-indigo-500 outline-none transition text-[15px] shadow-inner"
              />
              <button
                onClick={handleSend}
                className="flex items-center justify-center p-2 bg-transparent hover:scale-110 transition-transform hover:text-indigo-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.8)]"
              >
                <Send className="w-6 h-6 text-gray-100" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 text-lg">
            Select or start a chat to begin messaging.
          </div>
        )}

        {showCharacterSelection && (
          <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-start z-50 p-6 pt-16 overflow-y-auto">
            <input
              type="text"
              placeholder="Search characters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md p-3 mb-8 rounded-xl bg-[#1a1a1a]/80 text-white border border-gray-700 focus:border-indigo-600 outline-none text-center text-lg shadow-lg backdrop-blur-md"
            />
            <div className="w-full max-w-6xl flex flex-col gap-10">
              {letters.length === 0 && (
                <p className="text-gray-500 text-center">No characters found.</p>
              )}
              {letters.map((letter) => (
                <div key={letter}>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-300 tracking-wide">
                    {letter}
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {groupedCharacters[letter].map((char) => (
                      <button
                        key={char.id}
                        onClick={() => startChatWithCharacter(char)}
                        className="bg-[#151515]/80 hover:bg-[#1f1f1f]/90 rounded-2xl p-5 flex flex-col items-center transition-all duration-200 shadow-lg hover:shadow-indigo-500/40 border border-gray-800 backdrop-blur-sm hover:scale-[1.02]"
                      >
                        <img
                          src={char.image}
                          alt={char.name}
                          className="w-28 h-28 rounded-full object-cover mb-3 border-2 border-gray-700 shadow-lg"
                        />
                        <span className="text-lg font-medium text-gray-200">
                          {char.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}