'use client';

import { useEffect, useState, useRef } from 'react';

const SCAN_LINES = [
  { text: '$ securefirst scan --target ████████.com --deep', type: 'cmd', delay: 0 },
  { text: '[*] Initializing 27-phase security scan...', type: 'info', delay: 800 },
  { text: '[*] Recon: Enumerating subdomains...', type: 'info', delay: 1400 },
  { text: '    Found: api.████████.com', type: 'sub', delay: 1800 },
  { text: '    Found: staging.████████.com', type: 'sub', delay: 2100 },
  { text: '    Found: admin.████████.com ⚠', type: 'warn', delay: 2400 },
  { text: '[+] TLS/SSL: Grade A', type: 'pass', delay: 3000 },
  { text: '[+] HSTS: Enabled', type: 'pass', delay: 3300 },
  { text: '[-] CSP: Missing — XSS attack surface open', type: 'fail', delay: 3600 },
  { text: '[-] X-Frame-Options: Missing', type: 'fail', delay: 3900 },
  { text: '[*] Phase 7: API Endpoint Discovery...', type: 'info', delay: 4400 },
  { text: '    POST /api/v2/users        200 OK', type: 'sub', delay: 4800 },
  { text: '    GET  /api/v2/admin/config 200 OK ⚠', type: 'warn', delay: 5100 },
  { text: '[!] CRITICAL: Admin endpoint exposed without auth', type: 'critical', delay: 5600 },
  { text: '[*] Phase 12: Injection Testing...', type: 'info', delay: 6100 },
  { text: "    /api/v2/search?q=' OR 1=1--", type: 'sub', delay: 6500 },
  { text: '[!] CRITICAL: SQL injection confirmed on /search', type: 'critical', delay: 6900 },
  { text: '[*] Phase 19: Authentication Bypass...', type: 'info', delay: 7500 },
  { text: '[-] JWT: HS256 with guessable secret', type: 'fail', delay: 7900 },
  { text: '[*] Phase 27: SSRF / IDOR Validation...', type: 'info', delay: 8500 },
  { text: '[-] IDOR: /api/users/{id} — no authz check', type: 'fail', delay: 8900 },
  { text: '', type: 'blank', delay: 9300 },
  { text: '╔══════════════════════════════════════╗', type: 'border', delay: 9500 },
  { text: '║  SCAN COMPLETE — 27/27 phases done   ║', type: 'border', delay: 9650 },
  { text: '╠══════════════════════════════════════╣', type: 'border', delay: 9750 },
  { text: '║  CRITICAL: 2   HIGH: 3   MEDIUM: 5   ║', type: 'result', delay: 9950 },
  { text: '║  Endpoints: 47  Vulns: 10  Score: D  ║', type: 'result', delay: 10150 },
  { text: '╚══════════════════════════════════════╝', type: 'border', delay: 10350 },
];

const typeColors: Record<string, string> = {
  cmd:      'text-green-400 font-bold',
  info:     'text-blue-400',
  sub:      'text-slate-400',
  pass:     'text-green-500',
  fail:     'text-amber-400',
  warn:     'text-yellow-400',
  critical: 'text-red-500 font-bold',
  border:   'text-cyan-400',
  result:   'text-cyan-300 font-bold',
  blank:    '',
};

export default function HackerTerminal() {
  const [visibleLines, setVisibleLines]   = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingText, setTypingText]       = useState('');
  const [isTypingCmd, setIsTypingCmd]     = useState(true);
  const [fading, setFading]               = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const hasStarted  = useRef(false);
  const timers      = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typing + scan loop
  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const cmd = SCAN_LINES[0].text;
    let i = 0;
    const typeId = setInterval(() => {
      if (i <= cmd.length) {
        setTypingText(cmd.slice(0, i++));
      } else {
        clearInterval(typeId);
        setIsTypingCmd(false);
        setVisibleLines(1);

        SCAN_LINES.forEach((line, idx) => {
          if (idx === 0) return;
          const t = setTimeout(() => setVisibleLines(idx + 1), line.delay);
          timers.current.push(t);
        });

        // Fade out then restart
        const fadeT = setTimeout(() => setFading(true), 12000);
        const resetT = setTimeout(() => {
          timers.current.forEach(clearTimeout);
          timers.current = [];
          setFading(false);
          setVisibleLines(0);
          setTypingText('');
          setIsTypingCmd(true);
          hasStarted.current = false;
        }, 12800);
        timers.current.push(fadeT, resetT);
      }
    }, 32);

    return () => {
      clearInterval(typeId);
      timers.current.forEach(clearTimeout);
    };
  }, [isTypingCmd]);

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines, typingText]);

  const progress = Math.min(Math.round((visibleLines / SCAN_LINES.length) * 100), 100);

  return (
    <div className="relative group">
      {/* Ambient glow */}
      <div className="absolute -inset-6 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
        style={{background:'radial-gradient(ellipse,rgba(0,71,171,0.25) 0%,rgba(0,255,200,0.08) 60%,transparent 100%)'}} />

      {/* Terminal window */}
      <div className={`relative rounded-xl overflow-hidden shadow-2xl transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
        style={{background:'#060a10',border:'1px solid rgba(0,71,171,0.35)',boxShadow:'0 0 40px rgba(0,71,171,0.15),0 25px 60px rgba(0,0,0,0.6)'}}>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{background:'#090e18',borderColor:'rgba(0,71,171,0.25)'}}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{background:'#ff5f57'}} />
            <div className="w-3 h-3 rounded-full" style={{background:'#febc2e'}} />
            <div className="w-3 h-3 rounded-full" style={{background:'#28c840'}} />
          </div>
          <span className="text-[11px] font-mono ml-2 tracking-wider" style={{color:'rgba(0,150,255,0.7)'}}>SECUREFIRST_SCANNER v2.7 — LIVE</span>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#22c55e'}} />
            <span className="text-[10px] font-mono" style={{color:'#22c55e'}}>ACTIVE</span>
          </div>
        </div>

        {/* CRT scanline overlay */}
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,200,0.012) 2px,rgba(0,255,200,0.012) 4px)'}} />

        {/* Terminal content */}
        <div ref={terminalRef}
          className="p-4 font-mono text-[12px] leading-[1.65] h-[370px] overflow-hidden relative"
          style={{textShadow:'0 0 6px rgba(0,200,255,0.2)'}}>
          {isTypingCmd ? (
            <div className="text-green-400 font-bold">
              {typingText}
              <span className={`transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} style={{color:'#4ade80'}}>█</span>
            </div>
          ) : (
            <>
              {SCAN_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i}
                  className={`${typeColors[line.type] || 'text-slate-400'} ${i === visibleLines - 1 ? 'animate-[fadeIn_0.12s_ease-out]' : ''} ${line.type === 'critical' ? 'animate-pulse' : ''}`}>
                  {line.text || '\u00A0'}
                </div>
              ))}
              {visibleLines < SCAN_LINES.length && (
                <span className={`transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} style={{color:'#4ade80'}}>█</span>
              )}
            </>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 border-t text-[10px] font-mono"
          style={{background:'#090e18',borderColor:'rgba(0,71,171,0.25)'}}>
          <span style={{color:'rgba(0,150,255,0.5)'}}>27 PHASES | OWASP TOP 10 | CVE DB 2026</span>
          <span style={{color: progress === 100 ? 'rgba(255,80,80,0.8)' : 'rgba(0,150,255,0.5)'}}>
            {progress < 100 ? `SCANNING... ${progress}%` : 'COMPLETE — 10 VULNS FOUND'}
          </span>
        </div>
      </div>
    </div>
  );
}
