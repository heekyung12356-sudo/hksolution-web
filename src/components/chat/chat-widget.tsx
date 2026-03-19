'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { MessageSquare, X, Send, Shield, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  conversation_id: string;
  sender_type: string;
  sender_id: string | null;
  content_type: string;
  content: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

const SERVICE_CATEGORIES = [
  { key: 'security', emoji: '🔒', label: 'Security Audit' },
  { key: 'investment', emoji: '📊', label: 'Investment & M&A' },
  { key: 'competitive', emoji: '🎯', label: 'Competitive Intel' },
  { key: 'enterprise', emoji: '🏢', label: 'Enterprise' },
  { key: 'legal', emoji: '⚖️', label: 'Legal & Litigation' },
  { key: 'engineering', emoji: '⚡', label: 'Product Engineering' },
];

// API calls go to securefirst.dev (shared backend)
const API_BASE = 'https://securefirst.dev';

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem('hk_chat_session');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('hk_chat_session', id);
  }
  return id;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [aiTyping, setAiTyping] = useState(false);

  // Onboarding flow
  const [step, setStep] = useState<'category' | 'name' | 'chat'>('category');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [contactInfo, setContactInfo] = useState<{ name: string; email: string; category: string } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const supabase = useMemo(() => createClient(), []);

  // Load saved state
  useEffect(() => {
    const saved = localStorage.getItem('hk_contact_info');
    if (saved) {
      try {
        const info = JSON.parse(saved);
        setContactInfo(info);
        setStep('chat');
      } catch { /* ignore */ }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && step === 'chat') inputRef.current?.focus();
  }, [isOpen, step]);

  // Load existing messages
  useEffect(() => {
    const sessionId = getSessionId();
    if (!sessionId) return;

    async function loadExisting() {
      try {
        const res = await fetch(`${API_BASE}/api/chat/history`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId }),
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data.conversation_id) {
          setConversationId(data.conversation_id);
          if (data.messages) setMessages(data.messages);
          setStep('chat');
        }
      } catch { /* first visit */ }
    }

    loadExisting();
  }, []);

  // Realtime
  useEffect(() => {
    if (!conversationId) return;

    const channel = supabase
      .channel(`hk-chat-${conversationId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `conversation_id=eq.${conversationId}`,
      }, (payload) => {
        const newMsg = payload.new as Message;
        if (newMsg.sender_type !== 'contact') {
          setAiTyping(false);
        }
        setMessages((prev) => {
          if (prev.some((m) => m.id === newMsg.id)) return prev;
          return [...prev, newMsg];
        });
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [conversationId, supabase]);

  // Category select
  function selectCategory(key: string) {
    setSelectedCategory(key);
    setStep('name');
  }

  // Name submit
  function submitName() {
    const name = nameInput.trim();
    if (!name) return;
    const info = { name, email: emailInput.trim(), category: selectedCategory };
    setContactInfo(info);
    localStorage.setItem('hk_contact_info', JSON.stringify(info));
    setStep('chat');
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  // Send message
  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || sending) return;

    setSending(true);
    setInput('');

    const optimistic: Message = {
      id: `temp-${Date.now()}`,
      conversation_id: conversationId || '',
      sender_type: 'contact',
      sender_id: null,
      content_type: 'text',
      content: text,
      metadata: {},
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);
    setAiTyping(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: getSessionId(),
          message: text,
          contact_info: contactInfo ? {
            name: contactInfo.name,
            email: contactInfo.email,
          } : undefined,
        }),
      });

      const data = await res.json();
      if (data.conversation_id && !conversationId) {
        setConversationId(data.conversation_id);

        // Tag the conversation with category + source
        if (contactInfo?.category) {
          // Fire and forget — tag will be set via API
          fetch(`${API_BASE}/api/chat/send`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              session_id: getSessionId(),
              message: `[auto] Service: ${contactInfo.category} | Source: hksolution.dev`,
            }),
          }).catch(() => {});
        }
      }
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== optimistic.id));
      setAiTyping(false);
    }

    setSending(false);
  }, [input, sending, conversationId, contactInfo]);

  return (
    <>
      {/* Floating Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-slate-900 text-white rounded-full
                     shadow-lg shadow-black/20 flex items-center justify-center
                     hover:scale-105 transition-transform"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-[70] bg-slate-900 border border-slate-700
                        shadow-2xl shadow-black/40 flex flex-col overflow-hidden
                        top-0 left-0 right-0 bottom-0
                        sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[580px] sm:rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-white" />
              <div>
                <span className="text-white font-semibold text-sm">HK Solution</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-slate-400 text-xs">Online — replies in seconds</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {/* Step 1: Category Selection */}
            {step === 'category' && (
              <div className="space-y-4 py-4">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                  <p className="text-white font-medium text-sm">What can we help you with?</p>
                  <p className="text-slate-400 text-xs mt-1">Select a service category</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => selectCategory(cat.key)}
                      className="text-left bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500
                                 rounded-xl px-3 py-3 transition-colors"
                    >
                      <span className="text-lg">{cat.emoji}</span>
                      <p className="text-white text-xs font-medium mt-1">{cat.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Name Collection */}
            {step === 'name' && (
              <div className="space-y-4 py-4">
                <div className="text-center">
                  <p className="text-white font-medium text-sm">
                    {SERVICE_CATEGORIES.find((c) => c.key === selectedCategory)?.emoji}{' '}
                    {SERVICE_CATEGORIES.find((c) => c.key === selectedCategory)?.label}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Before we connect, may I know your name?</p>
                </div>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submitName()}
                  placeholder="Your name *"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white
                             placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
                  autoFocus
                />
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submitName()}
                  placeholder="Email (optional)"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white
                             placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
                />
                <button
                  onClick={submitName}
                  disabled={!nameInput.trim()}
                  className="w-full bg-white text-slate-900 py-2.5 rounded-xl text-sm font-medium
                             hover:bg-slate-100 disabled:opacity-30 transition-colors"
                >
                  Start Chat
                </button>
                <button
                  onClick={() => setStep('category')}
                  className="w-full text-slate-500 text-xs hover:text-white transition-colors"
                >
                  ← Back to categories
                </button>
              </div>
            )}

            {/* Step 3: Chat */}
            {step === 'chat' && (
              <>
                {messages.length === 0 && (
                  <div className="text-center py-6">
                    <p className="text-slate-400 text-sm">
                      Hi{contactInfo?.name ? ` ${contactInfo.name}` : ''}! How can we help?
                    </p>
                    {contactInfo?.category && (
                      <span className="inline-block mt-2 text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full">
                        {SERVICE_CATEGORIES.find((c) => c.key === contactInfo.category)?.emoji}{' '}
                        {SERVICE_CATEGORIES.find((c) => c.key === contactInfo.category)?.label}
                      </span>
                    )}
                  </div>
                )}

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender_type === 'contact' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed
                        ${msg.sender_type === 'contact'
                          ? 'bg-white text-slate-900 rounded-br-md'
                          : msg.sender_type === 'ai'
                            ? 'bg-slate-800 text-slate-200 rounded-bl-md'
                            : 'bg-blue-600/20 text-blue-300 rounded-bl-md'
                        }`}
                    >
                      {msg.sender_type !== 'contact' && (
                        <div className="text-[10px] text-slate-500 mb-0.5 font-medium">
                          {msg.sender_type === 'ai' ? '🤖 AI' : '👤 Agent'}
                        </div>
                      )}
                      <span className="whitespace-pre-wrap break-words">{msg.content}</span>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {aiTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 rounded-2xl rounded-bl-md px-4 py-2.5">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input (only in chat step) */}
          {step === 'chat' && (
            <div className="border-t border-slate-700 px-3 py-3">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white
                             placeholder:text-slate-500 focus:outline-none focus:border-slate-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || sending}
                  className="w-10 h-10 bg-white text-slate-900 rounded-xl flex items-center justify-center
                             hover:bg-slate-100 transition-colors disabled:opacity-30"
                >
                  {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
