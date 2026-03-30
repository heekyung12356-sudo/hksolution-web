'use client';

import { useEffect, useState, useRef } from 'react';

const SCAN_LINES = [
  { text: '$ securefirst scan --target ████████.com --deep', type: 'cmd', delay: 0 },
  { text: '[*] Initializing 27-phase security scan...', type: 'info', delay: 800 },
  { text: '[*] Recon: Enumerating subdomains...', type: 'info', delay: 1400 },
  { text: '    Found: api.████████.com', type: 'sub', delay: 1800 },
  { text: '    Found: staging.████████.com', type: 'sub', delay: 2000 },
  { text: '    Found: admin.████████.com', type: 'warn', delay: 2200 },
  { text: '[+] TLS/SSL: Grade A', type: 'pass', delay: 2800 },
  { text: '[+] HSTS: Enabled', type: 'pass', delay: 3100 },
  { text: '[-] CSP: Missing', type: 'fail', delay: 3400 },
  { text: '[-] X-Frame-Options: Missing', type: 'fail', delay: 3700 },
  { text: '[*] Phase 7: API Endpoint Discovery...', type: 'info', delay: 4200 },
  { text: '    POST /api/v2/users — 200 OK', type: 'sub', delay: 4600 },
  { text: '    GET  /api/v2/admin/config — 200 OK', type: 'warn', delay: 4900 },
  { text: '[!] CRITICAL: Admin endpoint exposed without auth', type: 'critical', delay: 5300 },
  { text: '[*] Phase 12: SQL Injection Testing...', type: 'info', delay: 5800 },
  { text: '    /api/v2/search?q=\' OR 1=1--', type: 'sub', delay: 6200 },
  { text: '[!] CRITICAL: SQLi confirmed on /search', type: 'critical', delay: 6600 },
  { text: '[*] Phase 19: Authentication Bypass...', type: 'info', delay: 7200 },
  { text: '[-] JWT: Using weak HS256, secret guessable', type: 'fail', delay: 7600 },
  { text: '[*] Phase 27: SSRF/IDOR Validation...', type: 'info', delay: 8200 },
  { text: '[-] IDOR: /api/users/{id} — no authz check', type: 'fail', delay: 8600 },
  { text: '', type: 'blank', delay: 9000 },
  { text: '╔══════════════════════════════════════╗', type: 'border', delay: 9200 },
  { text: '║  SCAN COMPLETE — 27/27 phases done   ║', type: 'border', delay: 9400 },
  { text: '╠══════════════════════════════════════╣', type: 'border', delay: 9500 },
  { text: '║  CRITICAL: 2   HIGH: 3   MEDIUM: 5   ║', type: 'result', delay: 9700 },
  { text: '║  Endpoints: 47  Vulns: 10  Score: D   ║', type: 'result', delay: 9900 },
  { text: '╚══════════════════════════════════════╝', type: 'border', delay: 10100 },
];

const typeColors: Record<string, string> = {
  cmd: 'text-green-400 font-bold',
  info: 'text-blue-400',
  sub: 'text-slate-400',
  pass: 'text-green-500',
  fail: 'text-amber-400',
  warn: 'text-yellow-500',
  critical: 'text-red-500 font-bold animate-pulse',
  border: 'text-cyan-400',
  result: 'text-cyan-300 font-bold',
  blank: '',
};

export default function HackerTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingText, setTypingText] = useState('');
  const [isTypingCmd, setIsTypingCmd] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for first command
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    const cmd = SCAN_LINES[0].text;
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= cmd.length) {
        setTypingText(cmd.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTypingCmd(false);
        // Start showing scan lines
        SCAN_LINES.forEach((line, idx) => {
          if (idx === 0) {
            setVisibleLines(1);
            return;
          }
          setTimeout(() => {
            setVisibleLines(idx + 1);
          }, line.delay);
        });
        // Loop: restart after all lines shown
        setTimeout(() => {
          setVisibleLines(0);
          setTypingText('');
          setIsTypingCmd(true);
          hasStarted.current = false;
        }, 13000);
      }
    }, 35);
    return () => clearInterval(typeInterval);
  }, [isTypingCmd]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines, typingText]);

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-green-500/10 to-cyan-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Terminal window */}
      <div className="relative bg-[#0a0e17] rounded-xl border border-cyan-900/50 shadow-2xl shadow-cyan-500/10 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1220] border-b border-cyan-900/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[11px] text-cyan-600 font-mono ml-2 tracking-wider">SECUREFIRST_SCANNER v2.7 — LIVE</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-green-500 font-mono">ACTIVE</span>
          </div>
        </div>

        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,200,0.015)_2px,rgba(0,255,200,0.015)_4px)] z-10" />

        {/* Terminal content */}
        <div
          ref={terminalRef}
          className="p-4 font-mono text-[12px] leading-[1.6] h-[380px] overflow-hidden relative"
          style={{ textShadow: '0 0 8px rgba(0,255,200,0.3)' }}
        >
          {isTypingCmd ? (
            <div className="text-green-400 font-bold">
              {typingText}
              <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-green-400 transition-opacity duration-100`}>█</span>
            </div>
          ) : (
            <>
              {SCAN_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} className={`${typeColors[line.type] || 'text-slate-400'} ${i === visibleLines - 1 ? 'animate-[fadeIn_0.15s_ease-out]' : ''}`}>
                  {line.text || '\u00A0'}
                </div>
              ))}
              {visibleLines < SCAN_LINES.length && (
                <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-green-400 transition-opacity duration-100`}>█</span>
              )}
            </>
          )}
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-[#0d1220] border-t border-cyan-900/30 text-[10px] font-mono">
          <span className="text-cyan-700">27 PHASES | OWASP TOP 10 | CVE DB 2026</span>
          <span className="text-cyan-700">
            {visibleLines < SCAN_LINES.length
              ? `SCANNING... ${Math.min(Math.round((visibleLines / SCAN_LINES.length) * 100), 100)}%`
              : 'COMPLETE — 10 VULNERABILITIES FOUND'}
          </span>
        </div>
      </div>
    </div>
  );
}
